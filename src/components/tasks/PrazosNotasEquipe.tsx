import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Bold, Italic } from "lucide-react";

const PrazosNotasEquipe = () => {
  const [note, setNote] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertText = (textToInsert: string, wrap: boolean = false) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = note.substring(start, end);
    let newText;

    if (wrap && selectedText) {
      newText = `${note.substring(0, start)}${textToInsert}${selectedText}${textToInsert}${note.substring(end)}`;
    } else {
      newText = `${note.substring(0, start)}${textToInsert}${note.substring(end)}`;
    }

    setNote(newText);
    
    setTimeout(() => {
      textarea.focus();
      if (wrap && selectedText) {
        textarea.setSelectionRange(start + textToInsert.length, end + textToInsert.length);
      } else {
        textarea.setSelectionRange(start + textToInsert.length, start + textToInsert.length);
      }
    }, 0);
  };

  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <CardTitle className="text-white text-base">Notas da Equipe</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-800 border border-gray-600 rounded-lg">
          <div className="p-2 border-b border-gray-600 flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => insertText('**', true)}><Bold className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => insertText('*', true)}><Italic className="h-4 w-4" /></Button>
            <div className="border-l border-gray-600 h-6 mx-1"></div>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => insertText('👍')}>👍</Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => insertText('⚠️')}>⚠️</Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => insertText('✅')}>✅</Button>
          </div>
          <Textarea 
            ref={textareaRef}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Adicione uma nota para a equipe... Use **negrito** e *itálico*."
            className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[120px]"
          />
        </div>
        <Button size="sm" className="mt-2">Salvar Nota</Button>
      </CardContent>
    </Card>
  );
};

export default PrazosNotasEquipe;