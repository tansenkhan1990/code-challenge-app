import React from "react";
import { Route, Routes } from "react-router-dom";
import GameConfigure from "./Components/GameConfigure";
import Home from "./Components/Home";
import Layout from "./Components/Layout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" index element={<Home />} />
        <Route path="game-configure" element={<GameConfigure />} />
      </Route>
    </Routes>
  );
};

export default App;
