
import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  isUser: boolean;
  text: string;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      isUser: false,
      text: "Hi there! I'm Joy, your ShareJoy assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      isUser: true,
      text: inputValue,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate response after delay
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help you find a children's home that needs volunteers. Would you like to search by location?",
        "You can donate through our platform using MPESA. Would you like me to guide you through the process?",
        "We have many homes that need different kinds of support. What skills or resources can you offer?",
        "That's a great question! ShareJoy connects volunteers and donors with children's homes across Kenya."
      ];
      
      const botMessage: Message = {
        isUser: false,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    const messageContainer = document.getElementById('message-container');
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Chat Button */}
      <button
        className={`fixed z-50 right-6 bottom-24 md:bottom-6 rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-105 ${
          isOpen ? 'bg-muted' : 'bg-primary text-primary-foreground'
        }`}
        onClick={toggleChat}
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
      
      {/* Chat Window */}
      <div 
        className={`fixed z-40 right-6 bottom-40 md:bottom-20 bg-card rounded-lg shadow-xl w-80 md:w-96 border border-border overflow-hidden transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
        }`}
      >
        {/* Chat Header */}
        <div className="bg-primary px-4 py-3 flex items-center justify-between text-primary-foreground">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div className="ml-3">
              <p className="font-medium">Joy</p>
              <p className="text-xs opacity-80">ShareJoy Assistant</p>
            </div>
          </div>
        </div>
        
        {/* Messages Container */}
        <div 
          id="message-container"
          className="p-4 h-80 overflow-y-auto"
        >
          {messages.map((message, index) => (
            <div 
              key={index}
              className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.isUser 
                    ? 'bg-primary text-primary-foreground rounded-br-none' 
                    : 'bg-muted text-foreground rounded-bl-none'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="mb-4 flex justify-start">
              <div className="bg-muted text-foreground rounded-lg rounded-bl-none px-4 py-2">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-foreground/50 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-foreground/50 animate-pulse delay-100"></div>
                  <div className="w-2 h-2 rounded-full bg-foreground/50 animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Input Form */}
        <form 
          onSubmit={handleSubmit}
          className="border-t border-border p-3 flex items-center"
        >
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1 bg-transparent focus:outline-none text-sm"
          />
          <button 
            type="submit"
            className="ml-2 p-2 rounded-full bg-primary text-primary-foreground"
            disabled={!inputValue.trim()}
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
