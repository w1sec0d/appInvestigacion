import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import tic from '../../img/tic.jpg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardgb() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={tic}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Educación y Tecnologías
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            La educación basada en tecnologías ofrece una amplia gama de herramientas y recursos, como aplicaciones móviles,
            plataformas de aprendizaje en línea, simuladores, realidad virtual y aumentada, entre otros.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}