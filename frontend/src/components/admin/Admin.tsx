import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('mukt_admin_token');
    if (token) {
      navigate('/admin-panel');
    }
  }, [navigate]);

  return <LoginForm  />;
}

export default Admin;
