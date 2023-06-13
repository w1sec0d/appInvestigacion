import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import Pandemia from '../../img/pandemia.jpg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardb() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Pandemia}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Estudio de la evolución de la pandemia en Colombia
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            El estudio de la evolución de la pandemia en Colombia implica el análisis y seguimiento de los datos epidemiológicos para
            comprender cómo ha evolucionado la propagación del virus y su impacto en la población.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}