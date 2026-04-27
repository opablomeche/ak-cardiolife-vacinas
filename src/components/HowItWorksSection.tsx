import { Search, CalendarCheck, Building2, CreditCard } from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5562994031244&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20vacina%C3%A7%C3%A3o.";

const steps = [
  {
    icon: Search,
    title: "Escolha o serviço",
    description: "Navegue pelo site e escolha as vacinas que você ou sua família precisam.",
  },
  {
    icon: CalendarCheck,
    title: "Agende seu horário",
    description: "Entre em contato pelo WhatsApp para agendar no melhor dia e horário.",
  },
  {
    icon: Building2,
    title: "Venha até nossa clínica",
    description: "Compareça no dia agendado e realize sua vacinação com conforto e segurança.",
  },
  {
    icon: CreditCard,
    title: "Forma de pagamento",
    description: "Aceitamos Pix, dinheiro, cartão de crédito e débito ou link de pagamento.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
            Passo a Passo
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-3 mb-4">
            Como <span className="text-primary">funciona?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Processo simples e seguro para agendar sua vacinação presencial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="relative bg-card rounded-2xl p-6 shadow-sm border border-border"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center shadow-md">
                {idx + 1}
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mt-2">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-secondary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground font-heading font-bold text-lg px-10 py-4 rounded-lg hover:opacity-90 transition-all shadow-lg inline-flex items-center justify-center gap-2"
          >
            Agendar Sua Vacinação
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
