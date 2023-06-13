import ConstructionIcon from '@mui/icons-material/Construction';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { HashLink } from 'react-router-hash-link';


export const mainListItems = (
  <React.Fragment>
    <HashLink smooth to='/estudiante/#personal' >
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </HashLink>
    <HashLink smooth to='/estudiante/#publicaciones' >
      <ListItemButton>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Publicaciones" />
      </ListItemButton>
    </HashLink>
    <HashLink smooth to='/estudiante/#grupos' >
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Grupos" />
      </ListItemButton>
    </HashLink>
    <HashLink smooth to='/estudiante/#proyectos' >
      <ListItemButton>
        <ListItemIcon>
          <ConstructionIcon />
        </ListItemIcon>
        <ListItemText primary="Proyectos" />
      </ListItemButton>
    </HashLink>
    <HashLink smooth to='/estudiante/#areaConocimiento' >
      <ListItemButton>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Áreas de conocimiento" />
      </ListItemButton>
    </HashLink>
    <HashLink smooth to='/estudiante/#infraestructura' >
      <ListItemButton>
        <ListItemIcon>
          <HomeWorkIcon />
        </ListItemIcon>
        <ListItemText primary="Infraestructura" />
      </ListItemButton>
    </HashLink>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>

  </React.Fragment>
);
