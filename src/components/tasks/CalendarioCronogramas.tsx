import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar as MiniCalendar } from "@/components/ui/calendar";
import { ChevronLeft, ChevronRight, Search, Settings, Sun, Moon } from "lucide-react";
import { cn } from '@/lib/utils';
import { format, addDays, subDays, startOfWeek, endOfWeek, eachDayOfInterval, getDay, isEqual, isSameMonth, isToday, isSameDay, startOfMonth, endOfMonth, subMonths, addMonths, subYears, addYears } from 'date-fns';
import { ptBR } from 'date-fns/locale';

// --- Mock Data ---
const events = [
  { id: 1, title: 'Reunião de Alinhamento Semanal', date: new Date(2024, 4, 27, 9), durationHours: 1, color: 'blue' },
  { id: 2, title: 'Almoço de Boas-Vindas', date: new Date(2024, 4, 27, 12), durationHours: 1, color: 'green' },
  { id: 3, title: '1:1 com Jonatas', date: new Date(2024, 4, 27, 14), durationHours: 1, color: 'yellow' },
  { id: 4, title: 'Revisão de Produto: Acme', date: new Date(2024, 4, 28, 9), durationHours: 1, color: 'blue' },
  { id: 5, title: 'Workshop de Priorização MVP', date: new Date(2024, 4, 29, 13), durationHours: 2, color: 'blue' },
  { id: 6, title: 'Happy Hour da Equipe de Vendas', date: new Date(2024, 4, 29, 16), durationHours: 1, color: 'yellow' },
];

const sidebarEvents = [
    { date: 'HOJE 27/05/2024', weather: '24°/18°', icon: Sun, color: 'blue', events: [
        { time: '09:00 - 10:00', title: 'Reunião de Alinhamento' },
        { time: '12:00 - 13:00', title: 'Almoço de Boas-Vindas', link: 'https://zoom.us/...' }
    ]},
    { date: 'AMANHÃ 28/05/2024', weather: '25°/19°', icon: Sun, color: 'yellow', events: [
        { time: '09:00 - 10:00', title: 'Revisão de Produto: Acme' },
    ]},
];

const hours = Array.from({ length: 12 }, (_, i) => i + 7); // 7 AM to 6 PM
const daysOfWeek = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

// --- Helper Functions ---
const timeToRow = (date: Date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const totalMinutes = (hour - 7) * 60 + minute;
  return (totalMinutes / 30) + 2;
};

// --- Components ---
const EventCard = ({ event }) => {
  const dayIndex = getDay(event.date);
  const colIndex = dayIndex + 2;
  const rowStart = timeToRow(event.date);
  const rowSpan = (event.durationHours * 60) / 30;

  const colorClasses = {
    blue: 'bg-blue-500/20 border-l-4 border-blue-400 text-blue-100',
    green: 'bg-green-500/20 border-l-4 border-green-400 text-green-100',
    yellow: 'bg-yellow-500/20 border-l-4 border-yellow-400 text-yellow-100',
  };

  return (
    <div
      className={cn('p-2 rounded-md text-xs overflow-hidden', colorClasses[event.color])}
      style={{ gridColumn: colIndex, gridRow: `${rowStart} / span ${rowSpan}` }}
    >
      <p className="font-semibold">{event.title}</p>
      <p className="opacity-80">{format(event.date, 'HH:mm')}</p>
    </div>
  );
};

const Sidebar = ({ currentDate, setCurrentDate }) => {
    const colorClasses = { blue: 'border-blue-400', green: 'border-green-400', yellow: 'border-yellow-400' };
    return (
        <aside className="w-80 flex-shrink-0 bg-gray-800/50 border-r border-gray-700 p-4 flex flex-col gap-6">
            <div className="flex items-center gap-2"><div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold">S</div><h1 className="text-xl font-bold text-white">Calendário</h1></div>
            <div>
                <MiniCalendar mode="single" selected={currentDate} onSelect={setCurrentDate} locale={ptBR} className="p-0" classNames={{ root: "bg-transparent", caption_label: "text-lg font-bold", head_cell: "text-gray-400 font-normal", cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-gray-700/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md", day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100", day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground", day_today: "bg-gray-700 text-white rounded-md" }} />
            </div>
            <div className="flex-grow overflow-y-auto no-scrollbar space-y-4">
                {sidebarEvents.map((day, index) => (
                    <div key={index} className={cn("p-3 rounded-lg border-l-4", colorClasses[day.color])}>
                        <div className="flex justify-between items-center text-xs text-gray-400 mb-2"><span>{day.date}</span><div className="flex items-center gap-1"><span>{day.weather}</span><day.icon className="h-4 w-4" /></div></div>
                        <div className="space-y-2">{day.events.map((event, idx) => (<div key={idx}><p className="text-sm font-semibold text-white">{event.title}</p><p className="text-xs text-gray-400">{event.time}</p>{event.link && <a href="#" className="text-xs text-blue-400 truncate">{event.link}</a>}</div>))}</div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

const WeeklyView = ({ currentDate, events }) => {
    const weekStart = startOfWeek(currentDate, { weekStartsOn: 0 });
    const weekEnd = endOfWeek(currentDate, { weekStartsOn: 0 });
    const daysInWeek = eachDayOfInterval({ start: weekStart, end: weekEnd });
    return (
        <div className="grid gap-px bg-gray-700" style={{ gridTemplateColumns: '60px repeat(7, 1fr)', gridTemplateRows: 'auto repeat(24, 30px)' }}>
            <div className="sticky top-0 z-20 bg-gray-800"></div>
            {daysInWeek.map((day) => (<div key={day.toString()} className="sticky top-0 z-20 p-2 text-center bg-gray-800 text-sm font-medium capitalize">{format(day, 'EEE', { locale: ptBR })} <span className="text-gray-400">{format(day, 'd')}</span></div>))}
            {hours.map((hour, i) => (<React.Fragment key={`row-${hour}`}><div className="row-start-[${i * 2 + 2}] row-span-2 text-right pr-2 text-xs text-gray-400 bg-gray-800 -mt-px pt-px sticky left-0 z-10">{hour}:00</div>{daysInWeek.map((day, j) => (<React.Fragment key={`cell-${i}-${j}`}><div className="bg-gray-800 border-t border-gray-700" style={{ gridColumn: j + 2, gridRow: i * 2 + 2 }}></div><div className="bg-gray-800 border-t border-dashed border-gray-700" style={{ gridColumn: j + 2, gridRow: i * 2 + 3 }}></div></React.Fragment>))}</React.Fragment>))}
            {events.filter(e => e.date >= weekStart && e.date <= weekEnd).map(event => <EventCard key={event.id} event={event} />)}
        </div>
    );
};

const MonthlyView = ({ currentDate, events, setCurrentDate, setView }) => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });
    const days = eachDayOfInterval({ start: startDate, end: endDate });
    const handleDayClick = (day) => { setCurrentDate(day); setView('Semana'); };
    return (
        <div className="grid grid-cols-7 flex-grow">
            {daysOfWeek.map(day => (<div key={day} className="p-2 text-center text-sm font-medium bg-gray-800 text-gray-400 border-b border-r border-gray-700">{day}</div>))}
            {days.map(day => {
                const dayEvents = events.filter(e => isSameDay(e.date, day));
                return (
                    <div key={day.toString()} className={cn("p-2 bg-gray-800 overflow-hidden border-r border-b border-gray-700 cursor-pointer hover:bg-gray-700/50", !isSameMonth(day, monthStart) && "bg-gray-800/50 text-gray-500")} onClick={() => handleDayClick(day)}>
                        <span className={cn("font-medium", isToday(day) && "bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center")}>{format(day, 'd')}</span>
                        <div className="mt-1 space-y-1">{dayEvents.slice(0, 2).map(event => (<div key={event.id} className="text-xs p-1 rounded bg-blue-900/50 truncate">{event.title}</div>))}{dayEvents.length > 2 && <div className="text-xs text-gray-400">+{dayEvents.length - 2} mais</div>}</div>
                    </div>
                );
            })}
        </div>
    );
};

const YearlyView = ({ currentDate, setCurrentDate, setView }) => {
  const year = currentDate.getFullYear();
  const months = Array.from({ length: 12 }, (_, i) => new Date(year, i, 1));

  const handleMonthClick = (month) => {
    setCurrentDate(month);
    setView('Mês');
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {months.map(month => (
        <div key={month.toString()}>
          <MiniCalendar
            month={month}
            onSelect={(day) => {
              if (day) {
                setCurrentDate(day);
                setView('Semana');
              }
            }}
            locale={ptBR}
            classNames={{
              root: "bg-gray-800/50 p-3 rounded-md",
              nav: "hidden",
              head_cell: "text-gray-400 font-normal text-xs w-8",
              cell: "text-center text-xs p-0",
              day: "h-8 w-8 p-0 font-normal",
              day_today: "bg-primary text-primary-foreground rounded-full",
              day_selected: "bg-gray-700 rounded-full",
            }}
            components={{
              Caption: ({ displayMonth }) => (
                <div 
                  className="text-center font-semibold mb-2 cursor-pointer hover:text-primary capitalize"
                  onClick={() => handleMonthClick(displayMonth)}
                >
                  {format(displayMonth, 'MMMM', { locale: ptBR })}
                </div>
              ),
            }}
          />
        </div>
      ))}
    </div>
  );
};

const MainCalendar = ({ currentDate, setCurrentDate }) => {
    const [view, setView] = useState('Semana');
    const handlePrev = () => { if (view === 'Semana') setCurrentDate(subDays(currentDate, 7)); if (view === 'Dia') setCurrentDate(subDays(currentDate, 1)); if (view === 'Mês') setCurrentDate(subMonths(currentDate, 1)); if (view === 'Ano') setCurrentDate(subYears(currentDate, 1)); };
    const handleNext = () => { if (view === 'Semana') setCurrentDate(addDays(currentDate, 7)); if (view === 'Dia') setCurrentDate(addDays(currentDate, 1)); if (view === 'Mês') setCurrentDate(addMonths(currentDate, 1)); if (view === 'Ano') setCurrentDate(addYears(currentDate, 1)); };
    const handleToday = () => setCurrentDate(new Date());
    const formatHeaderDate = () => {
        if (view === 'Dia') return format(currentDate, "d 'de' MMMM 'de' yyyy", { locale: ptBR });
        if (view === 'Mês') return format(currentDate, "MMMM 'de' yyyy", { locale: ptBR });
        if (view === 'Ano') return format(currentDate, "yyyy", { locale: ptBR });
        const weekStart = startOfWeek(currentDate, { weekStartsOn: 0 });
        const weekEnd = endOfWeek(currentDate, { weekStartsOn: 0 });
        const startMonth = format(weekStart, 'MMMM', { locale: ptBR });
        const endMonth = format(weekEnd, 'MMMM', { locale: ptBR });
        if (startMonth === endMonth) { return `${format(weekStart, 'd')} - ${format(weekEnd, "d 'de' MMMM 'de' yyyy", { locale: ptBR })}`; }
        return `${format(weekStart, "d 'de' MMMM", { locale: ptBR })} - ${format(weekEnd, "d 'de' MMMM 'de' yyyy", { locale: ptBR })}`;
    };
    const renderView = () => {
        switch (view) {
            case 'Mês': return <MonthlyView currentDate={currentDate} events={events} setCurrentDate={setCurrentDate} setView={setView} />;
            case 'Ano': return <YearlyView currentDate={currentDate} setCurrentDate={setCurrentDate} setView={setView} />;
            case 'Semana': default: return <WeeklyView currentDate={currentDate} events={events} />;
        }
    };
    return (
        <main className="flex-1 flex flex-col min-w-0">
            <header className="p-4 border-b border-gray-700">
                <div className="flex justify-between items-center"><h2 className="text-2xl font-bold text-white">Calendário</h2><div className="flex items-center gap-4"><div className="relative w-64"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /><Input placeholder="Buscar" className="bg-gray-800 border-gray-700 pl-9" /></div><Button variant="outline" className="bg-gray-800 border-gray-700"><Settings className="h-4 w-4 mr-2" /> Personalizar</Button></div></div>
                <div className="flex justify-between items-center mt-4"><div className="flex items-center gap-2"><Button onClick={handlePrev} variant="outline" size="icon" className="bg-gray-800 border-gray-700"><ChevronLeft className="h-4 w-4" /></Button><Button onClick={handleToday} variant="outline" className="bg-gray-800 border-gray-700">Hoje</Button><Button onClick={handleNext} variant="outline" size="icon" className="bg-gray-800 border-gray-700"><ChevronRight className="h-4 w-4" /></Button><h3 className="text-xl font-semibold ml-4 capitalize">{formatHeaderDate()}</h3></div><div className="flex items-center gap-1 p-1 bg-gray-800 rounded-lg">{['Semana', 'Mês', 'Ano'].map(v => (<Button key={v} variant={view === v ? 'secondary' : 'ghost'} size="sm" onClick={() => setView(v)}>{v}</Button>))}</div></div>
            </header>
            <div className="flex-grow overflow-auto no-scrollbar flex flex-col">{renderView()}</div>
        </main>
    );
};

const CalendarioCronogramas = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 4, 27));
  return (
    <Card className="bg-gray-900/50 border-gray-700 text-white h-full flex flex-col">
      <CardContent className="p-0 flex flex-1">
        <div className="flex h-full w-full">
            <Sidebar currentDate={currentDate} setCurrentDate={setCurrentDate} />
            <MainCalendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarioCronogramas;