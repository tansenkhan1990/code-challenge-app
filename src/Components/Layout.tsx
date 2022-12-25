import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';


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
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout;