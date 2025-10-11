import Layout from "@/components/Layout";
import CalendarioCronogramas from "@/components/tasks/CalendarioCronogramas";

const AgendaCalendario = () => {
  return (
    <Layout>
      <div className="bg-[#0A0F14] text-gray-100 h-full p-6 md:p-8 flex flex-col">
        <header className="mb-6 flex-shrink-0">
          <h1 className="text-3xl font-bold text-white font-serif">Agenda & Calendário</h1>
          <p className="text-gray-400">Visualize seus prazos, audiências e compromissos em um só lugar.</p>
        </header>
        <div className="flex-grow min-h-0">
          <CalendarioCronogramas />
        </div>
      </div>
    </Layout>
  );
};

export default AgendaCalendario;