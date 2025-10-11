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
          localization={{
            variables: {
              sign_in: {
                email_label: 'Seu e-mail',
                password_label: 'Sua senha',
                button_label: 'Entrar',
                social_provider_text: 'Entrar com {{provider}}',
                link_text: 'Já tem uma conta? Entre',
              },
              sign_up: {
                email_label: 'Seu e-mail',
                password_label: 'Sua senha',
                button_label: 'Cadastrar',
                social_provider_text: 'Cadastrar com {{provider}}',
                link_text: 'Não tem uma conta? Cadastre-se',
              },
              forgotten_password: {
                email_label: 'Seu e-mail',
                button_label: 'Enviar instruções',
                link_text: 'Esqueceu sua senha?',
              }
            },
          }}
        />
      </div>
    </div>
  );
};

export default Login;