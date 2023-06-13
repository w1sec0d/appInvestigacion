import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import museo from '../../img/museo.png';

const CardContainer = styled(Card)({
  marginRight: '15px', // Establece el margen derecho
});

export default function ActionAreaCardFd() {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={museo}
          alt="amazonas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Museo de Arte Contemporáneo
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Un museo de arte contemporáneo es un espacio dedicado a la exhibición, promoción y preservación de obras de arte contemporáneo. Es un lugar donde
            los visitantes pueden explorar y apreciar las expresiones artísticas más recientes y relevantes de nuestra época.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}