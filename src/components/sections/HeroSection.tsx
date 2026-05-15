import { motion } from "framer-motion";
import heroImg from "@/assets/hero-family.jpg";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5562994031244&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20vacina%C3%A7%C3%A3o.";

const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <section id="inicio" className="relative bg-section-warm overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            className="order-2 lg:order-1"
            variants={textContainer}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-heading font-semibold px-4 py-1.5 rounded-full mb-6 border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              Centro de Vacinação Especializada
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-secondary leading-tight mb-6"
            >
              Proteção Completa para{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">Toda a Família</span>
                <span className="absolute left-0 right-0 bottom-1 h-2 bg-primary/20 -z-0" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
            >
              Agende sua vacinação com supervisão do Dr. Gabriel Antonio Stanisci Miguel,
              em Anápolis (GO). Segurança, acolhimento e cuidado para todas as idades.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#vacinas"
                className="bg-primary text-primary-foreground font-heading font-bold text-lg px-8 py-4 rounded-lg shadow-lg inline-flex items-center justify-center"
                whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(0,0,0,0.18)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                Ver Vacinas Disponíveis
              </motion.a>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-foreground font-heading font-bold text-lg px-8 py-4 rounded-lg shadow-lg inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(0,0,0,0.14)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Agendar pelo WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
          >
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            <img
              src={heroImg}
              alt="Família feliz e protegida com vacinação"
              width={1024}
              height={1024}
              className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
