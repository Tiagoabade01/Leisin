import { Shield, Twitter, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">leisin</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Inteligência Jurídica para Resultados Exponenciais.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Produto</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="text-muted-foreground hover:text-foreground">Funcionalidades</a></li>
            <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Preços</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground">Segurança</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Empresa</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-muted-foreground hover:text-foreground">Sobre nós</a></li>
            <li><a href="#contact" className="text-muted-foreground hover:text-foreground">Contato</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground">Carreiras</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-muted-foreground hover:text-foreground">Termos de Serviço</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground">Política de Privacidade</a></li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Leisin. Todos os direitos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="text-muted-foreground hover:text-foreground"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="text-muted-foreground hover:text-foreground"><Facebook className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};