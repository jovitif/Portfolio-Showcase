
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../language/language-provider";
import { 
  Code, 
  Database, 
  CloudCog, 
  Server, 
  Layout, 
  Smartphone, 
  Flag 
} from "lucide-react";

export function Skills() {
  const { t } = useLanguage();
  
  const skills = [
    { 
      name: "Python", 
      level: "advanced", 
      icon: Code, 
      sortOrder: 1 
    },
    { 
      name: "PostgreSQL", 
      level: "advanced", 
      icon: Database,
      sortOrder: 2 
    },
    { 
      name: "n8n", 
      level: "advanced", 
      icon: Flag,
      sortOrder: 3 
    },
    { 
      name: "Node.js", 
      level: "advanced", 
      icon: Server,
      sortOrder: 4
    },
    { 
      name: "AWS", 
      level: "intermediate", 
      icon: CloudCog,
      sortOrder: 5
    },
    { 
      name: "React.js", 
      level: "intermediate", 
      icon: Layout,
      sortOrder: 6 
    },
    { 
      name: "Ruby on Rails", 
      level: "intermediate", 
      icon: Server,
      sortOrder: 7 
    },
    { 
      name: "React Native", 
      level: "intermediate", 
      icon: Smartphone,
      sortOrder: 8 
    }
  ];
  
  // Sort skills by the specified order
  const sortedSkills = [...skills].sort((a, b) => a.sortOrder - b.sortOrder);
  
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">{t("skills")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sortedSkills.map((skill) => (
            <Card key={skill.name} className="flex flex-col">
              <CardHeader className="flex-row items-center gap-4">
                <skill.icon className="w-6 h-6" />
                <CardTitle>{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t(skill.level)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
