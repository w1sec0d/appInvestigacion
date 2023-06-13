import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import plantaEolica from './plantaEolica.jpg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardPa() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          alt="amazonas"
          image={plantaEolica}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Desarrollo de un sistema de monitoreo de la calidad del aire
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Este grupo se dedica al desarrollo de un sistema de monitoreo de la calidad del aire. Su objetivo principal
            es crear una solución tecnológica que permita recopilar, analizar y visualizar datos relacionados con la calidad del aire
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}