import { Shield, Baby, Users, Heart, Syringe, Clock } from "lucide-react";

const services = [
  {
    icon: Syringe,
    title: "Vacinação Adulto",
    description: "Vacinas essenciais e complementares para adultos, incluindo gripe, hepatite, HPV e mais.",
  },
  {
    icon: Baby,
    title: "Vacinação Infantil",
    description: "Calendário vacinal completo para crianças, com acompanhamento médico especializado.",
  },
  {
    icon: Users,
    title: "Vacinação para Idosos",
    description: "Proteção reforçada para a terceira idade: pneumonia, herpes zoster, gripe e mais.",
  },
  {
    icon: Shield,
    title: "Vacinação Segura",
    description: "Supervisão médica para pacientes com alergias ou histórico de reações adversas.",
  },
  {
    icon: Heart,
    title: "Orientação Personalizada",
    description: "Avaliação individual do seu histórico para definir o melhor esquema vacinal.",
  },
  {
    icon: Clock,
    title: "Atualização de Calendário",
    description: "Análise e atualização do seu calendário vacinal conforme sua fase de vida.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Vacinação com cuidado e <span className="text-primary">excelência médica</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos um atendimento completo em vacinação, com supervisão do 
            Dr. Gabriel Antonio Stanisci Miguel, garantindo segurança em cada aplicação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
