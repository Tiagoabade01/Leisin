import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Vamos conversar?</h2>
          <p className="text-lg text-muted-foreground mt-2">Solicite uma demonstração ou fale com um de nossos especialistas.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-secondary/50 p-8 rounded-lg border border-secondary">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" placeholder="Seu nome" className="bg-background border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail Corporativo</Label>
                <Input id="email" type="email" placeholder="seu@email.com" className="bg-background border-border" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input id="company" placeholder="Nome da sua empresa" className="bg-background border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Área de Atuação</Label>
                <Input id="role" placeholder="Ex: Advogado, Sócio, Diretor" className="bg-background border-border" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="interest">Principal Interesse</Label>
              <Select>
                <SelectTrigger className="w-full bg-background border-border">
                  <SelectValue placeholder="Selecione um módulo" />
                </SelectTrigger>
                <SelectContent className="bg-secondary border-secondary text-white">
                  <SelectItem value="diligence">Due Diligence & IA</SelectItem>
                  <SelectItem value="contracts">Gestão de Contratos</SelectItem>
                  <SelectItem value="realestate">Módulo Imobiliário</SelectItem>
                  <SelectItem value="full">Plataforma Completa</SelectItem>
                  <SelectItem value="other">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensagem (Opcional)</Label>
              <Textarea id="message" placeholder="Conte-nos um pouco sobre seu desafio..." className="bg-background border-border" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" size="lg" className="flex-1">Solicitar Demonstração</Button>
              <Button type="button" variant="outline" size="lg" className="flex-1">
                <Phone className="w-4 h-4 mr-2" /> Falar com Especialista
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};