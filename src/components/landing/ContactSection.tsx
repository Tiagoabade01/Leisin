import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Descubra como nosso <span className="text-primary">Software Jurídico</span> pode mudar sua operação!</h2>
            <p className="text-muted-foreground mb-8">Preencha os dados e fale com nosso time para conhecer os módulos ideais para sua operação.</p>
            <div className="bg-card p-8 rounded-lg shadow-lg border">
              <form className="space-y-4">
                <div><Label htmlFor="name">Nome*</Label><Input id="name" className="bg-background" /></div>
                <div><Label htmlFor="email">Email*</Label><Input id="email" type="email" className="bg-background" /></div>
                <div><Label htmlFor="phone">Telefone*</Label><Input id="phone" type="tel" className="bg-background" /></div>
                <Button type="submit" size="lg" className="w-full">Agendar Demonstração</Button>
              </form>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src="/placeholder.svg" alt="Advogado sorrindo" className="rounded-lg w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};