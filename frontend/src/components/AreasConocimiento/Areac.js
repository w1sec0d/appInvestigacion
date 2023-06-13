import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import artes from '../../img/artes.jpg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardAc() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={artes}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Artes Visuales
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            son una forma de expresión artística que involucra la creación y apreciación de obras visuales. Incluyen una amplia gama de disciplinas,
            como la pintura, la escultura, la fotografía, la ilustración, el grabado, el diseño gráfico, la arquitectura y muchas otras formas de arte que se basan en el uso de elementos visuales.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}