import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Search, Settings, Plus } from "lucide-react";
import { cn } from '@/lib/utils';

// --- Mock Data ---
const events = [
  { id: 1, title: 'Monday Wake-Up Hour', day: 'MON', startTime: '8:00 AM', endTime: '9:00 AM', color: 'blue' },
  { id: 2, title: 'All-Team Kickoff', day: 'MON', startTime: '9:00 AM', endTime: '10:00 AM', color: 'blue' },
  { id: 3, title: 'Financial Update', day: 'MON', startTime: '10:00 AM', endTime: '11:00 AM', color: 'blue' },
  { id: 4, title: 'New Employee Welcome Lunch', day: 'MON', startTime: '11:00 AM', endTime: '12:00 PM', color: 'green' },
  { id: 5, title: 'Product Review', day: 'MON', startTime: '1:00 PM', endTime: '2:00 PM', color: 'blue' },
  { id: 6, title: '1:1 with Jon', day: 'MON', startTime: '2:00 PM', endTime: '3:00 PM', color: 'yellow' },
  
  { id: 7, title: 'Product Review: Acme Marketi...', day: 'TUE', startTime: '9:00 AM', endTime: '10:00 AM', color: 'blue' },
  { id: 8, title: 'Product System Kickoff Lunch', day: 'TUE', startTime: '12:00 PM', endTime: '1:00 PM', color: 'blue' },
  { id: 9, title: 'Concept Product Review II', day: 'TUE', startTime: '2:00 PM', endTime: '4:00 PM', color: 'blue' },

  { id: 10, title: 'Webinar: Customer...', day: 'WED', startTime: '9:00 AM', endTime: '10:00 AM', color: 'blue' },
  { id: 11, title: 'Onboarding Presentation', day: 'WED', startTime: '11:00 AM', endTime: '12:00 PM', color: 'green' },
  { id: 12, title: 'MVP Prioritization Workshop', day: 'WED', startTime: '1:00 PM', endTime: '3:00 PM', color: 'blue' },
  { id: 13, title: 'Sales Team Happy Hour', day: 'WED', startTime: '4:00 PM', endTime: '5:00 PM', color: 'yellow' },

  { id: 14, title: 'Coffee Chat', day: 'THU', startTime: '9:00 AM', endTime: '10:00 AM', color: 'green' },
  { id: 15, title: 'Health Benefits Walkthrough', day: 'THU', startTime: '10:00 AM', endTime: '11:00 AM', color: 'green' },
  { id: 16, title: 'Product Review', day: 'THU', startTime: '1:00 PM', endTime: '2:00 PM', color: 'blue' },

  { id: 17, title: 'Coffee Chat', day: 'FRI', startTime: '9:00 AM', endTime: '10:00 AM', color: 'green' },
  { id: 18, title: 'Marketing Meet-and-Greet', day: 'FRI', startTime: '12:00 PM', endTime: '1:00 PM', color: 'blue' },
  { id: 19, title: '1:1 with Heather', day: 'FRI', startTime: '2:00 PM', endTime: '3:00 PM', color: 'yellow' },
  { id: 20, title: 'Happy Hour', day: 'FRI', startTime: '4:00 PM', endTime: '5:00 PM', color: 'yellow' },
];

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const hours = Array.from({ length: 12 }, (_, i) => {
    const hour = i + 7;
    if (hour === 12) return '12 PM';
    if (hour > 12) return `${hour - 12} PM`;
    return `${hour} AM`;
});

// --- Helper Functions ---
const timeToRow = (timeStr) => {
  const [time, period] = timeStr.split(' ');
  const [hour, minute] = time.split(':').map(Number);
  let h24 = period === 'PM' && hour !== 12 ? hour + 12 : hour;
  const totalMinutes = (h24 - 7) * 60 + (minute || 0);
  return (totalMinutes / 30) + 2; // Grid starts at row 2, 30 min per slot
};

const timeToRowSpan = (startTime, endTime) => {
  const startMinutes = (parseInt(startTime) - 7) * 60 + (startTime.includes(':30') ? 30 : 0);
  const endMinutes = (parseInt(endTime) - 7) * 60 + (endTime.includes(':30') ? 30 : 0);
  
  const [startHourStr, startPeriod] = startTime.split(' ');
  let [startHour] = startHourStr.split(':').map(Number);
  if (startPeriod === 'PM' && startHour !== 12) startHour += 12;

  const [endHourStr, endPeriod] = endTime.split(' ');
  let [endHour] = endHourStr.split(':').map(Number);
  if (endPeriod === 'PM' && endHour !== 12) endHour += 12;

  const durationMinutes = (endHour - startHour) * 60;
  return durationMinutes / 30; // 30 min per slot
};

// --- Components ---
const EventCard = ({ event }) => {
  const colIndex = daysOfWeek.indexOf(event.day) + 2;
  const rowStart = timeToRow(event.startTime);
  const rowSpan = timeToRowSpan(event.startTime, event.endTime);

  const colorClasses = {
    blue: 'bg-blue-500/20 border-l-4 border-blue-400 text-blue-100',
    green: 'bg-green-500/20 border-l-4 border-green-400 text-green-100',
    yellow: 'bg-yellow-500/20 border-l-4 border-yellow-400 text-yellow-100',
  };

  return (
    <div
      className={cn('p-2 rounded-lg text-xs overflow-hidden absolute', colorClasses[event.color])}
      style={{
        gridColumn: colIndex,
        gridRow: `${rowStart} / span ${rowSpan}`,
      }}
    >
      <p className="font-semibold">{event.title}</p>
    </div>
  );
};

const CalendarioCronogramas = () => {
  const [view, setView] = useState('Week');

  return (
    <Card className="bg-gray-900/50 border-gray-700 text-white h-full flex flex-col">
      <CardHeader className="flex-shrink-0 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">Calendar</h2>
            <p className="text-gray-400">Schedule a meeting for today!</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search" className="bg-gray-800 border-gray-700 pl-9" />
            </div>
            <Button variant="outline" className="bg-gray-800 border-gray-700"><Settings className="h-4 w-4 mr-2" /> Customise</Button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="bg-gray-800 border-gray-700"><ChevronLeft className="h-4 w-4" /></Button>
            <Button variant="outline" className="bg-gray-800 border-gray-700">Today</Button>
            <Button variant="outline" size="icon" className="bg-gray-800 border-gray-700"><ChevronRight className="h-4 w-4" /></Button>
            <h3 className="text-xl font-semibold ml-4">May 21 - 27, 2024</h3>
          </div>
          <div className="flex items-center gap-1 p-1 bg-gray-800 rounded-lg">
            {['Day', 'Week', 'Month', 'Year'].map(v => (
              <Button key={v} variant={view === v ? 'secondary' : 'ghost'} size="sm" onClick={() => setView(v)}>{v}</Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow overflow-auto no-scrollbar p-0">
        <div
          className="grid gap-px bg-gray-700 relative"
          style={{
            gridTemplateColumns: '60px repeat(7, 1fr)',
            gridTemplateRows: 'auto repeat(24, 30px)',
          }}
        >
          {/* Top-left empty cell */}
          <div className="sticky top-0 z-20 bg-gray-800"></div>
          
          {/* Day Headers */}
          {daysOfWeek.map((day, i) => (
            <div key={day} className="sticky top-0 z-20 p-2 text-center bg-gray-800 text-sm font-medium">
              {day} <span className="text-gray-400">{21 + i}</span>
            </div>
          ))}

          {/* Time Gutter and Grid Lines */}
          {hours.flatMap((hour, i) => [
            <div key={`time-${hour}`} className="row-start-[${i * 2 + 2}] row-span-2 text-right pr-2 text-xs text-gray-400 bg-gray-800 -mt-2 pt-2 sticky left-0 z-10">
              {hour}
            </div>,
            ...daysOfWeek.map((_, j) => (
              <React.Fragment key={`cell-frag-${i}-${j}`}>
                <div className="bg-gray-800 border-t border-gray-700" style={{ gridColumn: j + 2, gridRow: i * 2 + 2 }}></div>
                <div className="bg-gray-800 border-t border-dashed border-gray-700" style={{ gridColumn: j + 2, gridRow: i * 2 + 3 }}></div>
              </React.Fragment>
            ))
          ])}

          {/* Events */}
          {events.map(event => <EventCard key={event.id} event={event} />)}
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarioCronogramas;