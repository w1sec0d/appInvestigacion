import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import Rio from '../../img/rio.jpeg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardd() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Rio}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Desarrollo de una nueva técnica de extracción de ADN
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            El desarrollo de una nueva técnica de extracción de ADN es un avance significativo en el campo de la biología y la genética.
            La extracción de ADN es un proceso fundamental que permite obtener material genético de alta calidad para su posterior análisis y estudio.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}