import { motion } from "framer-motion";
import { Baby } from "lucide-react";
import child from "@/assets/age-child.jpg";
import teen from "@/assets/age-teen.jpg";
import adult from "@/assets/age-adult.jpg";
import elderly from "@/assets/age-elderly.jpg";

const ages = [
  {
    title: "Criança",
    range: "0–12 anos",
    description: "Vacinas essenciais para o desenvolvimento saudável das crianças.",
    image: child,
    target: "criancas",
  },
  {
    title: "Adolescente",
    range: "12–19 anos",
    description: "Proteção durante a fase de crescimento e desenvolvimento.",
    image: teen,
    target: "adolescentes",
  },
  {
    title: "Adulto",
    range: "20–59 anos",
    description: "Manutenção da imunidade e prevenção de doenças.",
    image: adult,
    target: "adultos",
  },
  {
    title: "Gestante",
    range: "Todas as idades",
    description: "Cuidados especiais para mãe e bebê durante a gravidez.",
    image: null,
    icon: Baby,
    target: "gestantes",
  },
  {
    title: "Idoso",
    range: "+60 anos",
    description: "Fortalecimento da imunidade na terceira idade.",
    image: elderly,
    target: "idosos",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const AgeGroupsSection = () => {
  return (
    <section id="faixas" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
            Faixas Etárias
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-3 mb-4">
            Para quem você busca <span className="text-primary">proteção?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Selecione a faixa etária para ver as vacinas específicas disponíveis.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {ages.map((age) => (
            <motion.a
              key={age.title}
              href={`#${age.target}`}
              variants={fadeUp}
              className="group bg-card rounded-2xl p-6 text-center shadow-sm border border-border transition-shadow hover:shadow-xl"
              whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted flex items-center justify-center ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all">
                {age.image ? (
                  <img
                    src={age.image}
                    alt={age.title}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : age.icon ? (
                  <age.icon className="w-10 h-10 text-primary" />
                ) : null}
              </div>
              <h3 className="font-heading font-bold text-lg text-secondary mb-1">
                {age.title}
              </h3>
              <p className="text-xs font-semibold text-primary mb-2">{age.range}</p>
              <p className="text-sm text-muted-foreground leading-snug">
                {age.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AgeGroupsSection;
