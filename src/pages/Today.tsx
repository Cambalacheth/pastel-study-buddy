import { Plus, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const todayTasks = [
  { id: 1, title: "Review Math Chapter 5", time: "09:00", completed: true },
  { id: 2, title: "Write History Essay", time: "14:00", completed: false },
  { id: 3, title: "Practice Spanish Vocab", time: "16:30", completed: false },
];

export default function Today() {
  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="text-center pt-8 pb-6">
        <h1 className="text-2xl font-light text-foreground/90 mb-2">Today</h1>
        <p className="text-muted-foreground text-sm">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      {/* Quick Actions */}
      <div className="px-6">
        <Button className="w-full gradient-primary text-white border-0 py-3 rounded-2xl font-medium shadow-lg shadow-primary/20">
          <Plus size={18} className="mr-2" />
          Add Study Session
        </Button>
      </div>

      {/* Today's Schedule */}
      <div className="px-6 space-y-3">
        <h2 className="text-lg font-medium text-foreground/80 mb-4">Schedule</h2>
        {todayTasks.map((task) => (
          <Card 
            key={task.id} 
            className="gradient-card border-border/30 p-4 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 
                size={20} 
                className={`${
                  task.completed 
                    ? "text-green-500 fill-green-100" 
                    : "text-muted-foreground"
                }`} 
              />
              <div className="flex-1">
                <h3 className={`font-medium ${
                  task.completed 
                    ? "text-muted-foreground line-through" 
                    : "text-foreground"
                }`}>
                  {task.title}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  <Clock size={14} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{task.time}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Study Stats */}
      <div className="px-6">
        <Card className="gradient-card border-border/30 p-6 rounded-2xl">
          <h3 className="text-lg font-medium text-foreground/80 mb-4">Today's Progress</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2.5h</div>
              <div className="text-sm text-muted-foreground">Study Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">1/3</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}