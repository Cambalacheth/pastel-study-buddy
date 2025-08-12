import { Calendar, Target, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const weekGoals = [
  { subject: "Mathematics", progress: 75, target: "Complete Chapter 6" },
  { subject: "History", progress: 45, target: "Finish Research Paper" },
  { subject: "Spanish", progress: 90, target: "Learn 100 New Words" },
];

export default function Plan() {
  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="text-center pt-8 pb-6">
        <h1 className="text-2xl font-light text-foreground/90 mb-2">Study Plan</h1>
        <p className="text-muted-foreground text-sm">Your learning roadmap</p>
      </div>

      {/* Weekly Overview */}
      <div className="px-6">
        <Card className="gradient-card border-border/30 p-6 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="text-primary" size={20} />
            <h2 className="text-lg font-medium text-foreground/80">This Week</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">12h</div>
              <div className="text-sm text-muted-foreground">Planned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">8h</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Weekly Goals */}
      <div className="px-6 space-y-3">
        <div className="flex items-center gap-2 mb-4">
          <Target className="text-primary" size={20} />
          <h2 className="text-lg font-medium text-foreground/80">Weekly Goals</h2>
        </div>
        
        {weekGoals.map((goal, index) => (
          <Card 
            key={index} 
            className="gradient-card border-border/30 p-4 rounded-2xl"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-foreground">{goal.subject}</h3>
                <span className="text-sm text-primary font-medium">{goal.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground">{goal.target}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Study Streak */}
      <div className="px-6">
        <Card className="gradient-card border-border/30 p-6 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="text-accent" size={20} />
            <h2 className="text-lg font-medium text-foreground/80">Study Streak</h2>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">7 days</div>
            <p className="text-sm text-muted-foreground">Keep it up! 🌟</p>
          </div>
        </Card>
      </div>
    </div>
  );
}