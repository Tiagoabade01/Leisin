import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Shield } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/app');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-4">
       <div className="flex items-center gap-2 mb-8">
          <Shield className="w-8 h-8 text-primary" />
          <span className="text-3xl font-bold text-white">leisin</span>
        </div>
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
          theme="dark"
          view="magic_link"
          showLinks={false}
          localization={{
            variables: {
              magic_link: {
                email_label: 'Seu e-mail',
                button_label: 'Enviar link de acesso',
                loading_button_label: 'Enviando...',
                link_text: 'Use um link mágico para entrar sem senha',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Login;