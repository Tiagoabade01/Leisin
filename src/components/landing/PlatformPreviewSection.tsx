import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PlatformPreviewSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">A Plataforma em Ação</h2>
          <p className="text-lg text-muted-foreground mt-2">Visualize o poder e a simplicidade da nossa interface.</p>
        </div>
        <Tabs defaultValue="dashboard" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="contracts">Gestão de Contratos</TabsTrigger>
            <TabsTrigger value="diligence">Due Diligence IA</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="mt-6">
            <Card className="bg-background border-secondary overflow-hidden">
              <CardContent className="p-0">
                <img src="/placeholder.svg" alt="Dashboard do T3 Diligence" className="w-full h-auto" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="contracts" className="mt-6">
            <Card className="bg-background border-secondary overflow-hidden">
              <CardContent className="p-0">
                <img src="/placeholder.svg" alt="Tela de Gestão de Contratos" className="w-full h-auto" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="diligence" className="mt-6">
            <Card className="bg-background border-secondary overflow-hidden">
              <CardContent className="p-0">
                <img src="/placeholder.svg" alt="Tela de Due Diligence com IA" className="w-full h-auto" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};