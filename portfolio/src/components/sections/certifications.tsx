
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../language/language-provider";

export function Certifications() {
  const { t } = useLanguage();

  const certifications = [
    {
      name: "awsCloudPractitioner",
    },
    {
      name: "aiAssisted",
    },
    {
      name: "genAiCertification",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">{t("certifications")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{t(cert.name)}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
