import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const PlatformPreviewSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Visualize o Poder da Leisin</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
            Uma interface intuitiva e poderosa, projetada para a máxima produtividade.
          </p>
        </div>
        <div className="bg-background p-4 rounded-lg border shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop"
            alt="Platform Preview"
            className="rounded-md w-full aspect-video object-cover"
          />
        </div>
      </div>
    </section>
  );
};