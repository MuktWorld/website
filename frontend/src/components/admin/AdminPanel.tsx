import { useEffect } from 'react';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';

function AdminPanel() {
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('mukt_admin_token');
      if (!token) {
        navigate('/conf/admin');
      }
    }, [navigate]);

  return (
      <section>
        <Dashboard />
      </section>
  );
}

export default AdminPanel;
