import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import complejodep from '../../img/complejodep.jpg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardFc() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={complejodep}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Complejo Deportivo
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Un complejo deportivo es una instalación diseñada para albergar una variedad de actividades deportivas y recreativas. Es un espacio amplio y versátil que brinda facilidades para la práctica de diferentes disciplinas deportivas,
            promoviendo la actividad física, el bienestar y el entretenimiento.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}