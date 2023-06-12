import React from 'react';
import { useLocation } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';

export const StudentView = () => {
  const { state } = useLocation();
  const { username, password } = state;

  return (
    <div>
      <Dashboard />
    </div>
  )
}
