import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import biotecnologiaa from '../../img/biotecnologiaa.jpg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardAa() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={biotecnologiaa}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Biotecnología
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            La biotecnología es un campo multidisciplinario que combina la biología, la química y la tecnología para desarrollar aplicaciones
            y productos utilizando organismos vivos o componentes biológicos.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}