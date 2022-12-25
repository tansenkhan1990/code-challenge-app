import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Layout from './Components/Layout';

const App: React.FC = () => {
  return(
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='home' element={<Home />} />
    </Routes>
  )
}

export default App
