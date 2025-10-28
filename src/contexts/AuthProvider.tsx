import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  session: Session | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    // onAuthStateChange is called immediately with the current session
    // and then listens for future changes.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    // When the component unmounts, unsubscribe from the listener
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, loading }}>
      {/* Only render children when loading is complete */}
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);