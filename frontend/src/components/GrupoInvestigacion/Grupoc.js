import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import cambioclim from '../../img/cambioclim.jpeg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardgc() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cambioclim}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Cambio Climático
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Es un fenómeno global que tiene profundas implicaciones en nuestro planeta y en la vida de las personas.
            Se refiere a los cambios a largo plazo en los patrones climáticos, incluyendo el aumento de la temperatura promedio de la Tierra, el derretimiento de los glaciares, el aumento del nivel del mar y la alteración de los ecosistemas.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}