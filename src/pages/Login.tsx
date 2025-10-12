import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, FormEvent } from 'react';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { showError } from '@/utils/toast';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('teste@leisin.com');
  const [password, setPassword] = useState('123456');

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/app');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleDevLogin = async (e: FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      showError('Falha no login: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-4">
      <div className="flex items-center gap-2 mb-8">
        <Shield className="w-8 h-8 text-primary" />
        <span className="text-3xl font-bold text-white">leisin</span>
      </div>
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg border border-gray-700 space-y-6">
        
        {/* Developer Login */}
        <div className="border border-dashed border-yellow-500/50 p-4 rounded-lg">
          <h3 className="text-center text-yellow-400 font-semibold mb-4">Acesso Rápido (Desenvolvimento)</h3>
          <form onSubmit={handleDevLogin} className="space-y-4">
            <div>
              <Label htmlFor="dev-email">E-mail</Label>
              <Input id="dev-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-700 border-gray-600" />
            </div>
            <div>
              <Label htmlFor="dev-password">Senha</Label>
              <Input id="dev-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-700 border-gray-600" />
            </div>
            <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700">Entrar como Desenvolvedor</Button>
          </form>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-gray-800 px-2 text-gray-400">Ou</span>
          </div>
        </div>

        {/* Magic Link */}
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