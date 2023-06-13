import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import amazonas from '../../img/amazonas.jpg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCard() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={amazonas}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            La biodiversidad en la Amazonía Colombiana
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            La biodiversidad en la Amazonía Colombiana es un tema de gran relevancia debido a la riqueza natural que alberga esta región.
            La Amazonía colombiana se extiende a lo largo de vastas extensiones de selva tropical, montañas, ríos y pantanos, y es considerada una de las áreas más biodiversas del planeta.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}
