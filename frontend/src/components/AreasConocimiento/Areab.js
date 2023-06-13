import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import cienciasdeporte from '../../img/cienciasdeporte.jpg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardAb() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cienciasdeporte}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Ciencias del Deporte
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Las ciencias del deporte son un campo multidisciplinario que se enfoca en el estudio científico de la actividad física, el rendimiento deportivo
            y los efectos del ejercicio en el cuerpo humano.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}