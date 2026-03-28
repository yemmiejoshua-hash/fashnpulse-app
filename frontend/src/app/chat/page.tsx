'use client';

import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'AI Assistant', text: 'Welcome to Heritage! How can I help you find the perfect outfit today?', isMe: false },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { id: Date.now(), sender: 'You', text: input, isMe: true }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        sender: 'AI Assistant', 
        text: 'I can connect you to one of our top artisans for that request. Would you like to browse the corporate collection first?', 
        isMe: false 
      }]);
    }, 1000);
  };

  return (
    <main className="h-screen bg-surface flex flex-col pt-20 pb-20 max-w-4xl mx-auto w-full relative">
      <div className="px-6 py-4 bg-surface-container-low flex items-center justify-between shadow-sm sticky top-20 z-10">
        <div>
          <h2 className="font-headline font-bold text-xl text-primary">Heritage Support</h2>
          <p className="text-xs text-on-surface-variant text-green-600 font-medium">● Online</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl ${msg.isMe ? 'bg-primary text-on-primary rounded-tr-none' : 'bg-surface-container-highest text-on-surface rounded-tl-none'}`}>
              {!msg.isMe && <p className="text-[10px] uppercase font-bold tracking-widest opacity-60 mb-1">{msg.sender}</p>}
              <p className="text-sm font-body">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-surface-container-low sticky bottom-20 z-10">
        <form onSubmit={handleSend} className="flex gap-4">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..." 
            className="flex-1 bg-white border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-primary shadow-sm"
          />
          <button type="submit" className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center hover:bg-primary-dim transition-colors shadow-md">
            <span className="material-symbols-outlined">send</span>
          </button>
        </form>
      </div>
    </main>
  );
}
