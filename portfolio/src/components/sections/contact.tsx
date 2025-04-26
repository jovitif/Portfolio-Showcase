
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../language/language-provider";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">{t("contact")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>{t("getInTouch")}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder={t("name")} />
                <Input type="email" placeholder={t("email")} />
                <Textarea placeholder={t("message")} />
                <Button>{t("sendMessage")}</Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t("connectWithMe")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <a href="https://github.com/jovitif" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/joaofdsales" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
                <a href="mailto:joaosales911@gmail.com" className="flex items-center gap-2 hover:text-primary">
                  <Mail className="h-5 w-5" />
                  joaosales911@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
