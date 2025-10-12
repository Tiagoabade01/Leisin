import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthProvider';
import LoadingSpinner from '@/components/LoadingSpinner';

const ProtectedRoute = () => {
  const { session, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;