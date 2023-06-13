import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import Adn from '../../img/adn.jpg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardc() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Adn}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Análisis de la presencia de contaminantes en el agua de la cuenca del río Bogotá
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            El análisis de la presencia de contaminantes en el agua de la cuenca del río Bogotá es un tema de gran importancia
            debido a la relevancia de este recurso hídrico para la ciudad de Bogotá y las comunidades que dependen de él.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}