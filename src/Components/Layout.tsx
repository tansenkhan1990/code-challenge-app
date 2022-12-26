import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import { Container } from 'react-bootstrap';


const Layout:React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate('home');
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
  )
}

export default Layout;