import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import peces from './peces.jpg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardPc() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          alt="amazonas"
          image={peces}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Análisis de la biodiversidad marina en la costa Caribe colombiana
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            El análisis de la biodiversidad marina en la costa Caribe colombiana se enfoca en estudiar la variedad de especies
            y los ecosistemas marinos presentes en esta región costera.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}