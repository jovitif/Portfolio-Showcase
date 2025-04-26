
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../language/language-provider";

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: "fullStackIntern",
      company: "prefeitura",
      period: "ongoing",
      description: "prefeituraDesc",
    },
    {
      title: "researchScholarship",
      company: "higiaWay",
      period: "ongoing",
      description: "higiaWayDesc",
    },
    {
      title: "volunteerDeveloper",
      company: "languageLearningApp",
      period: "completed",
      description: "languageLearningAppDesc",
    },
    {
      title: "intern",
      company: "compassUol",
      period: "completed",
      description: "compassUolDesc",
    },
    {
      title: "volunteerInstructor",
      company: "universityCourses",
      period: "completed",
      description: "volunteerInstructorDesc",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">{t("experience")}</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{t(exp.title)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{t(exp.company)}</p>
                <p className="text-sm text-muted-foreground">{t(exp.period)}</p>
                <p className="mt-2">{t(exp.description)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
