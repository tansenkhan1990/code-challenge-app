import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';

const App: React.FC = () => {
  return(
    <Routes>
      <Route path='/' element={<Layout />} />
    </Routes>
  )
}

export default App
