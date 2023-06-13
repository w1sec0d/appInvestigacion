import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ConstructionIcon from '@mui/icons-material/Construction';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import { Paper } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect } from 'react';
import ActionAreaCardAa from '../AreasConocimiento/Areaa';
import ActionAreaCardAb from '../AreasConocimiento/Areab';
import ActionAreaCardAc from '../AreasConocimiento/Areac';
import ActionAreaCardAd from '../AreasConocimiento/Aread';
import ActionAreaCardA from '../AreasConocimiento/Areaf';
import ActionAreaCardg from '../GrupoInvestigacion/Grupo';
import ActionAreaCardga from '../GrupoInvestigacion/Grupoa';
import ActionAreaCardgb from '../GrupoInvestigacion/Grupob';
import ActionAreaCardgc from '../GrupoInvestigacion/Grupoc';
import ActionAreaCardgd from '../GrupoInvestigacion/Grupod';
import ActionAreaCardge from '../GrupoInvestigacion/Grupoe';
import ActionAreaCardF from '../Infraestructura/Infra';
import ActionAreaCardFb from '../Infraestructura/Infrab';
import ActionAreaCardFc from '../Infraestructura/Infrac';
import ActionAreaCardFd from '../Infraestructura/Infrad';
import ActionAreaCardFe from '../Infraestructura/Infrae';
import ActionAreaCardPa from '../Proyectos/Carda';
import ActionAreaCardPc from '../Proyectos/Cardac';
import ActionAreaCardPb from '../Proyectos/Cardb';
import ActionAreaCard from '../Publicacion/Publi';
import ActionAreaCarda from '../Publicacion/Publia';
import ActionAreaCardb from '../Publicacion/Publib';
import ActionAreaCardc from '../Publicacion/Public';
import ActionAreaCardd from '../Publicacion/Publid';
import ActionAreaCarde from '../Publicacion/Publie';

import "./Dashboard.css";
import { mainListItems, secondaryListItems } from './listItems';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard(props) {
  const [open, setOpen] = React.useState(true);
  const [persona, setPersona] = React.useState("");
  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    async function getPersona(idpersona) {
      try {
        const response = await axios.get(`http://localhost:8000/Personas/${idpersona}/?format=json`);
        if (response.status === 200) {
          setPersona(response.data);
          // Do something with the nombre
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle the error
      }
    };
    getPersona(props.state.username)
  }, []);


  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              ¡Bienvenido {persona.nombre}!
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 4, alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 10, flexWrap: 'wrap' }}>
                <Typography variant="h3" sx={{ width: 500, marginBottom: 5 }} id="personal">
                  Información Personal
                </Typography>
                <Card variant="outlined" sx={{ padding: 5 }}>
                  <Stack direction="row" alignItems="center" gap={1}>
                    <AccountCircleIcon sx={{ fontSize: 80, margin: 'auto' }} />
                  </Stack>
                  <Typography sx={{ fontSize: 18, marginTop: 5 }} gutterBottom>
                    <b>{persona.rol}</b>: {persona.nombre} {persona.apellido}
                  </Typography>
                  <p><b>Nivel Académico: </b>{persona.nivelacademico}</p>
                  <p><b>Edad: </b>{persona.edad}</p>
                </Card>
              </Paper>
              <Typography variant="h3" sx={{ marginTop: 5, marginBottom: 5, textAlign: 'center' }} id="publicaciones">
                <DescriptionIcon sx={{ fontSize: 50, margin: 'auto' }} /> Publicaciones
              </Typography>
              <Paper sx={{ p: 4, display: 'flex', flexDirection: 'row' }}>
                <ActionAreaCard />
                <ActionAreaCarda />
                <ActionAreaCardb />
              </Paper>
              <Paper sx={{ p: 4, display: 'flex', flexDirection: 'row' }}>
                <ActionAreaCardc />
                <ActionAreaCardd />
                <ActionAreaCarde />
              </Paper>
              <Typography variant="h3" sx={{ marginTop: 5, marginBottom: 5, textAlign: 'center' }} id="grupos">
                <PeopleIcon sx={{ fontSize: 50 }} /> Grupos
              </Typography>
              <Paper sx={{ p: 4, display: 'flex', flexDirection: 'row' }}>
                <ActionAreaCardg />
                <ActionAreaCardga />
                <ActionAreaCardgb />
              </Paper>
              <Paper sx={{ p: 4, display: 'flex', flexDirection: 'row' }}>
                <ActionAreaCardgc />
                <ActionAreaCardgd />
                <ActionAreaCardge />
              </Paper>
              <Typography variant="h3" sx={{ marginTop: 5, marginBottom: 5, textAlign: 'center' }} id="proyectos">
                <ConstructionIcon sx={{ fontSize: 50 }} /> Proyectos
              </Typography>
              <Paper sx={{ p: 4, display: 'flex', flexDirection: 'row' }}>
                <ActionAreaCardPa />
                <ActionAreaCardPb />
                <ActionAreaCardPc />
              </Paper>
              <Typography variant="h3" sx={{ marginTop: 5, marginBottom: 5, textAlign: 'center' }} id="areaConocimiento">
                <SchoolIcon sx={{ fontSize: 50 }} /> Areas de conocimiento
              </Typography>
              <Paper sx={{ p: 4, display: 'flex', flexDirection: 'row' }}>
                <ActionAreaCardA />
                <ActionAreaCardAa />
                <ActionAreaCardAb />
              </Paper>
              <Paper sx={{ p: 4, display: 'flex', flexDirection: 'row' }}>
                <ActionAreaCardAc />
                <ActionAreaCardAd />
              </Paper>
              <Typography variant="h3" sx={{ marginTop: 5, marginBottom: 5, textAlign: 'center' }} id="infraestructura">
                <HomeWorkIcon sx={{ fontSize: 50 }} /> Infraestructura
              </Typography>
              <Paper sx={{ p: 4, display: 'flex', flexDirection: 'row' }}>
                <ActionAreaCardF />
                <ActionAreaCardFb />
                <ActionAreaCardFc />
              </Paper>
              <Paper sx={{ p: 4, display: 'flex', flexDirection: 'row' }}>
                <ActionAreaCardFd />
                <ActionAreaCardFe />
              </Paper>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
