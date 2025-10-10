import { Shield } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Shield className="w-8 h-8" />
            <span className="text-2xl font-bold">T3 Diligence</span>
          </div>
          <div className="text-center md:text-right">
            <p className="font-semibold">Simplifique. Transforme. Potencialize.</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} T3 Diligence Tecnologia | Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};