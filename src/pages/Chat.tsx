import { Send, Bot, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const chatMessages = [
  { 
    type: "bot", 
    message: "Hi! I'm your study assistant. How can I help you today?",
    time: "10:30 AM"
  },
  { 
    type: "user", 
    message: "Can you help me understand calculus derivatives?",
    time: "10:32 AM"
  },
  { 
    type: "bot", 
    message: "Of course! Derivatives measure how a function changes as its input changes. Think of it as the slope of a curve at any point. Would you like me to explain with an example?",
    time: "10:33 AM"
  },
];

const suggestions = [
  "Explain photosynthesis",
  "Spanish grammar help", 
  "Math problem solving",
  "History essay tips"
];

export default function Chat() {
  return (
    <div className="flex flex-col h-screen pb-20">
      {/* Header */}
      <div className="text-center pt-8 pb-6 px-6">
        <h1 className="text-2xl font-light text-foreground/90 mb-2">AI Study Assistant</h1>
        <p className="text-muted-foreground text-sm">Ask me anything about your studies</p>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 px-6 space-y-4 overflow-y-auto">
        {chatMessages.map((msg, index) => (
          <div 
            key={index} 
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <Card 
              className={`max-w-[80%] p-4 rounded-2xl ${
                msg.type === 'user' 
                  ? 'bg-primary text-primary-foreground ml-8' 
                  : 'gradient-card border-border/30 mr-8'
              }`}
            >
              <div className="flex items-start gap-2 mb-2">
                {msg.type === 'bot' ? (
                  <Bot size={16} className="text-primary mt-0.5" />
                ) : (
                  <User size={16} className="text-primary-foreground mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="text-sm leading-relaxed">{msg.message}</p>
                  <span className={`text-xs mt-2 block ${
                    msg.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Quick Suggestions */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-2 gap-2 mb-4">
          {suggestions.map((suggestion, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="text-xs rounded-xl border-border/30 bg-card/50 hover:bg-muted/50"
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="px-6 pb-4">
        <div className="flex gap-2">
          <Input 
            placeholder="Type your question..." 
            className="flex-1 rounded-2xl border-border/30 bg-card/50 backdrop-blur-sm"
          />
          <Button 
            size="icon"
            className="rounded-2xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}