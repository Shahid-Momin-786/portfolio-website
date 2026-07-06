import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Shahid's AI Assistant. Ask me about his skills, projects, or how to get in touch!", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { text: userMessage, isBot: false }]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const msg = userMessage.toLowerCase();
      let botResponse = "I'm currently a UI demo, but Shahid is very real and would love to hear from you via the Contact form!";
      if (msg.includes('hire') || msg.includes('job') || msg.includes('opportunity')) {
        botResponse = "Shahid is actively looking for opportunities! He's a First Year MCA student skilled in Django, Flutter & Python. Reach out via the contact form!";
      } else if (msg.includes('project') || msg.includes('work')) {
        botResponse = "Shahid has built 4+ real-world projects: SpeakCampus, CampusEarn, a Real-Time Chat App, and a Smart Transport Solution. Check the Projects section!";
      } else if (msg.includes('skill') || msg.includes('tech') || msg.includes('stack')) {
        botResponse = "Shahid is skilled in Python, Django, Flutter, Java, JavaScript, MySQL, Firebase, and more. Check the Skills section for details!";
      } else if (msg.includes('contact') || msg.includes('email') || msg.includes('reach')) {
        botResponse = "You can reach Shahid at shahidmomin854@gmail.com or +91 9168987471. Use the Contact form below!";
      } else if (msg.includes('education') || msg.includes('college') || msg.includes('study')) {
        botResponse = "Shahid is pursuing his MCA at PCCOE, Pune (2025–2027) and completed his BSc in Computer Science from Annasaheb Magar College, Pune.";
      }
      setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-neon-cyan text-slate-900 shadow-[0_0_15px_#00f0ff] hover:scale-110 transition-transform"
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <MessageSquare size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-80 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl glass"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-800 p-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-neon-cyan"></div>
                <h3 className="font-semibold text-white">AI Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div className="flex h-80 flex-col overflow-y-auto p-4 space-y-4 bg-slate-950/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                      msg.isBot ? 'bg-slate-800 text-slate-200 rounded-tl-none' : 'bg-neon-cyan text-slate-900 rounded-tr-none font-medium'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-white/10 bg-slate-900 p-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 rounded-lg bg-slate-800 px-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-neon-cyan"
              />
              <button
                type="submit"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-neon-cyan text-slate-900 hover:bg-neon-cyan/80"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
