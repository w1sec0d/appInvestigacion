import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import medicinare from '../../img/medicinare.jpg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardAd() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={medicinare}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Medicina Regenerativa
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            La medicina regenerativa es un campo de la medicina que se centra en el desarrollo y la aplicación de terapias innovadoras para reparar,
            reemplazar o regenerar tejidos y órganos dañados o enfermos.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}