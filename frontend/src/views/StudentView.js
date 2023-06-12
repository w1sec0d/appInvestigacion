import React from 'react';
import { useLocation } from 'react-router-dom';

export const StudentView = () => {
  const { state } = useLocation();
  const { username } = state;

  return (
    <div>
      <div>StudentView</div>
      <p>BUEN DIA GRUPO BIENVENIDO USUARIO {username}</p>
    </div>
  )
}
