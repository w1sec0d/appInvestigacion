import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import contaminacion from './contaminacion.jpg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardPb() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          alt="amazonas"
          image={contaminacion}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Efectos de la contaminación en la salud de la población
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Este grupo de investigación se enfoca en estudiar los efectos de la contaminación en la salud de la población. Su objetivo principal es comprender
            cómo la exposición a
            diferentes contaminantes del aire afecta la salud humana y buscar soluciones para mitigar los impactos negativos.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}