import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import Ingsoftware from '../../img/Ingsoftware.jpg';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardA() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Ingsoftware}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Ingeniería de Software
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Es una disciplina que se ocupa del diseño, desarrollo y mantenimiento de sistemas de software de calidad. Se basa en principios
            y métodos de ingeniería para abordar los desafíos relacionados con la creación de software confiable, eficiente y escalable.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}
