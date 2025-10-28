import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthProvider';
import { Shield, ArrowLeft } from 'lucide-react';

const Login = () => {
  const { session } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/app');
    }
  }, [session, navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4 relative">
      <Link to="/" className="absolute top-4 left-4 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Voltar para o início
      </Link>
      <div className="flex items-center gap-2 mb-8">
        <Shield className="w-8 h-8 text-primary" />
        <span className="text-3xl font-bold text-foreground">leisin</span>
      </div>
      <div className="w-full max-w-md">
        <Auth
          supabaseClient={supabase}
          appearance={{
            extend: false,
            className: {
              container: 'gap-4 flex flex-col',
              button: 'bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium',
              input: 'border-input bg-background rounded-md px-3 py-2 text-sm',
              label: 'text-sm font-medium text-foreground',
              anchor: 'text-sm text-primary hover:underline',
              message: 'text-sm text-destructive',
            }
          }}
          providers={[]}
          localization={{
            variables: {
              sign_in: {
                email_label: 'Seu email',
                password_label: 'Sua senha',
                button_label: 'Entrar',
                social_provider_text: 'Entrar com {{provider}}',
                link_text: 'Já tem uma conta? Entre',
              },
              sign_up: {
                email_label: 'Seu email',
                password_label: 'Sua senha',
                button_label: 'Cadastrar',
                social_provider_text: 'Cadastrar com {{provider}}',
                link_text: 'Não tem uma conta? Cadastre-se',
              },
              forgotten_password: {
                email_label: 'Seu email',
                button_label: 'Enviar instruções',
                link_text: 'Esqueceu sua senha?',
              },
              update_password: {
                password_label: 'Nova senha',
                password_confirmation_label: 'Confirme a nova senha',
                button_label: 'Atualizar senha',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Login;