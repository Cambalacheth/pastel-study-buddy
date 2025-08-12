import { Search, BookOpen, FileText, Video, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const subjects = [
  { name: "Mathematics", items: 24, icon: "📊", color: "text-primary" },
  { name: "History", items: 18, icon: "📚", color: "text-accent" },
  { name: "Spanish", items: 32, icon: "🌍", color: "text-secondary" },
  { name: "Science", items: 15, icon: "🔬", color: "text-primary" },
];

const recentItems = [
  { title: "Algebra Formulas", type: "notes", subject: "Math" },
  { title: "WWII Timeline", type: "document", subject: "History" },
  { title: "Conjugation Practice", type: "audio", subject: "Spanish" },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "notes": return <FileText size={16} />;
    case "document": return <BookOpen size={16} />;
    case "audio": return <Headphones size={16} />;
    case "video": return <Video size={16} />;
    default: return <FileText size={16} />;
  }
};

export default function Library() {
  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="text-center pt-8 pb-6">
        <h1 className="text-2xl font-light text-foreground/90 mb-2">Library</h1>
        <p className="text-muted-foreground text-sm">Your study materials</p>
      </div>

      {/* Search */}
      <div className="px-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Search your materials..." 
            className="pl-10 rounded-2xl border-border/30 bg-card/50 backdrop-blur-sm"
          />
        </div>
      </div>

      {/* Subjects */}
      <div className="px-6 space-y-3">
        <h2 className="text-lg font-medium text-foreground/80 mb-4">Subjects</h2>
        <div className="grid grid-cols-2 gap-3">
          {subjects.map((subject, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border/30 p-4 rounded-2xl hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="text-center space-y-2">
                <div className="text-2xl">{subject.icon}</div>
                <h3 className="font-medium text-foreground">{subject.name}</h3>
                <p className="text-sm text-muted-foreground">{subject.items} items</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Items */}
      <div className="px-6 space-y-3">
        <h2 className="text-lg font-medium text-foreground/80 mb-4">Recent</h2>
        {recentItems.map((item, index) => (
          <Card 
            key={index} 
            className="gradient-card border-border/30 p-4 rounded-2xl hover:shadow-sm transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="text-muted-foreground">
                {getTypeIcon(item.type)}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.subject}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="px-6">
        <Card className="gradient-card border-border/30 p-6 rounded-2xl">
          <h3 className="text-lg font-medium text-foreground/80 mb-4">Library Stats</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-primary">89</div>
              <div className="text-xs text-muted-foreground">Total Items</div>
            </div>
            <div>
              <div className="text-xl font-bold text-accent">4</div>
              <div className="text-xs text-muted-foreground">Subjects</div>
            </div>
            <div>
              <div className="text-xl font-bold text-secondary">12</div>
              <div className="text-xs text-muted-foreground">Recent</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}