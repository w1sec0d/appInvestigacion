import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import hemeroteca from "../img/hemeroteca.jpg";


import React from 'react';

function getCSRFToken() {
  const csrfCookie = document.cookie.match('(^|;)\\s*csrftoken\\s*=\\s*([^;]+)');
  return csrfCookie ? csrfCookie.pop() : '';
}

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        UNAL
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function LoginView() {

  const csfrtoken = getCSRFToken();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal)



  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('id'),
      password: data.get('clave'),
    });

    try {
      const response = await axios.post('http://localhost:8000/custom-login/', {
        usuario: data.get('id'),
        clave: data.get('clave'),
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.data.success) {
        console.log('Login successful:', response.data);
        if (response.data.admin) {
          window.location.assign('http://localhost:8000/admin')
        } else {
          navigate('/estudiante', { state: response.data });
        }
      } else {
        // Login failed, display error message or handle accordingly
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '¡Has ingresado un usuario incorrecto! Porfavor intentalo de nuevo',
        })
      }
      // Perform any necessary actions after successful login
    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Handle login failure
    }

  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${hemeroteca})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            La investigación en la UNAL
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="Número de identificación"
              name="id"
              type="number"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="clave"
              label="Contraseña"
              type="password"
              id="clave"
              autoComplete="current-password"
            />
            <TextField
              value={csfrtoken}
              name="csrfmiddlewaretoken"
              type="hidden"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar sesión
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              {/* <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}