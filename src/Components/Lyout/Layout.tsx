import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Menus from "./Menus";

const Layout: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("home");
  }, []);

  return (
    <>
      <Container>
        <header className="header">
          <Header />
        </header>
        <div className="float-right menus">
          <Menus />
        </div>
        <main>
          <div className="outlet-content">
            <Outlet />
          </div>
        </main>
      </Container>
    </>
  );
};

export default Layout;
