import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Lyout/Layout";
import GameConfigure from "./Components/Pages/GameConfigure";
import Home from "./Components/Pages/Home";
import Reset from "./Components/Pages/Reset";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" index element={<Home />} />
        <Route path="game-configure" element={<GameConfigure />} />
        <Route path="reset" element={<Reset />} />
      </Route>
    </Routes>
  );
};

export default App;
