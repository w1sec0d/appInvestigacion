import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import edificioing from '../../img/edificioing.png';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardF() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={edificioing}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Edificio de Ingeniería
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            El edificio de Ingeniería de la Universidad Nacional de Colombia sede Bogotá es una infraestructura emblemática que alberga las actividades académicas,
            investigativas y de extensión relacionadas con la ingeniería en esta reconocida institución educativa.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}