import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import laboratorio from '../../img/laboratorio.jpg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardFb() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={laboratorio}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Laboratorio de Biotecnología
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            El laboratorio de Biotecnología es un espacio dedicado a la investigación y desarrollo de aplicaciones biotecnológicas
            en diversos campos, como la medicina, la agricultura, la industria y el medio ambiente.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}