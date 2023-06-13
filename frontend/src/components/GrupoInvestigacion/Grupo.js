import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import sistemasint from '../../img/sistemasint.jpg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardg() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={sistemasint}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Sistemas Inteligentes
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Los sistemas inteligentes son una área de la informática y la inteligencia artificial que se enfoca en el desarrollo
            de sistemas capaces de tomar decisiones y realizar tareas de manera autónoma, imitando o superando la inteligencia humana en ciertos aspectos.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}
