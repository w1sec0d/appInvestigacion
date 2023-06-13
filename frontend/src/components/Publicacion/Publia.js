import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import Pajaro from '../../img/pajaro.jpeg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCarda() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Pajaro}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Desarrollo de una aplicación móvil para la identificación de especies de aves
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            El desarrollo de una aplicación móvil para la identificación de especies de aves es un proyecto que busca aprovechar
            la tecnología y el creciente uso de dispositivos móviles para promover el conocimiento y la conservación de las aves.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}