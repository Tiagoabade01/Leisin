import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '@/components/LoadingSpinner';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect immediately to the main app page
    navigate('/app');
  }, [navigate]);

  return <LoadingSpinner />;
};

export default Login;