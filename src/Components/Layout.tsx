import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";

const Layout: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("home");
  }, []);

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
