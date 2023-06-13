import React from 'react';
import { Route, Routes } from "react-router-dom";
import LoginView from './views/LoginView';
import { StudentView } from './views/StudentView';


const App = () => {

  return (
    <Routes>
      <Route path="/" element={< LoginView />} />
      <Route path="/estudiante" element={<StudentView />} />

      {/* <Route path='/admin' render={redirect()} /> */}
    </Routes>
  )
}

export default App