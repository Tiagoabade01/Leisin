import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  allowedRoles: ('master' | 'admin' | 'user')[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { session, profile, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Carregando...</div>; // Or a proper spinner component
  }

  if (!session) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!profile || !allowedRoles.includes(profile.role)) {
    // Redirect to a "not authorized" page or the main app page
    return <Navigate to="/app" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;