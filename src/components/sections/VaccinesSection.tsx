import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Syringe } from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5562994031244&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20vacina%C3%A7%C3%A3o.";

const groups = [
  {
    id: "criancas",
    title: "Para Crianças",
    range: "0–12 anos",
    vaccines: [
      "Hepatite A e B",
      "Hexavalente (DTP + Hib + Hep B + IPV)",
      "Poliomielite (VIP)",
      "Pneumocócica 20-valente",
      "Meningocócica B e ACWY",
      "Rotavírus",
      "Tríplice Viral (Sarampo, Caxumba, Rubéola)",
      "Tetraviral (Sarampo, Caxumba, Rubéola e Varicela)",
      "Varicela (Catapora)",
      "Influenza Tetravalente (Gripe)",
      "Febre Amarela",
      "HPV Nonavalente",
    ],
  },
  {
    id: "adolescentes",
    title: "Para Adolescentes",
    range: "12–19 anos",
    vaccines: [
      "HPV Nonavalente",
      "Meningocócica ACWY e B",
      "dTpa (Tríplice Bacteriana Adulto)",
      "Hepatite A e B",
      "Tríplice Viral",
      "Varicela",
      "Influenza Tetravalente (Gripe)",
      "Febre Amarela",
      "Dengue",
    ],
  },
  {
    id: "adultos",
    title: "Para Adultos",
    range: "20–59 anos",
    vaccines: [
      "Influenza Tetravalente (Gripe) anual",
      "dTpa (Difteria, Tétano e Coqueluche)",
      "Hepatite A e B",
      "HPV Nonavalente",
      "Tríplice Viral",
      "Varicela",
      "Meningocócica ACWY e B",
      "Pneumocócica 13 / 23-valente",
      "Febre Amarela",
      "Herpes Zoster",
      "Dengue",
    ],
  },
  {
    id: "gestantes",
    title: "Para Gestantes",
    range: "Todas as idades",
    vaccines: [
      "dTpa (a partir da 20ª semana)",
      "Influenza Tetravalente (Gripe)",
      "Hepatite B",
      "VSR (Vírus Sincicial Respiratório)",
    ],
  },
  {
    id: "idosos",
    title: "Para Idosos",
    range: "+60 anos",
    vaccines: [
      "Influenza Tetravalente (Gripe) anual",
      "Pneumocócica 13 e 23-valente",
      "Herpes Zoster",
      "dTpa / dT (reforço a cada 10 anos)",
      "Hepatite B",
      "COVID-19",
      "Febre Amarela (conforme indicação)",
      "VSR (Vírus Sincicial Respiratório)",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const VaccinesSection = () => {
  return (
    <section id="vacinas" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
            Catálogo
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-3 mb-4">
            Vacinas <span className="text-primary">Disponíveis</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Clique em cada categoria para ver as vacinas específicas e agende a sua aplicação
            pelo WhatsApp.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {groups.map((group) => (
                <motion.div key={group.id} variants={fadeUp}>
                  <AccordionItem
                    value={group.id}
                    id={group.id}
                    className="bg-card rounded-2xl border border-border shadow-sm px-6 scroll-mt-24 transition-shadow hover:shadow-md"
                  >
                    <AccordionTrigger className="hover:no-underline py-5">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Syringe className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-lg text-secondary">
                            {group.title}
                          </h3>
                          <p className="text-sm text-primary font-semibold">{group.range}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <ul className="grid sm:grid-cols-2 gap-2 mb-5 pl-1">
                        {group.vaccines.map((v) => (
                          <li
                            key={v}
                            className="flex items-start gap-2 text-muted-foreground text-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {v}
                          </li>
                        ))}
                      </ul>
                      <motion.a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex bg-accent text-accent-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-lg"
                        whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Agendar pelo WhatsApp
                      </motion.a>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          <motion.p
            className="text-center text-muted-foreground mt-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            Não encontrou a vacina que procura?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Entre em contato conosco!
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default VaccinesSection;
