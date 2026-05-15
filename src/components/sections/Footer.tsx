import { motion } from "framer-motion";
import logo from "@/assets/logo-cardiolife.png";

const Footer = () => {
  return (
    <motion.footer
      className="bg-secondary text-secondary-foreground py-10 px-4"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Cardio Life" className="h-12" style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(96%) saturate(4000%) hue-rotate(350deg) brightness(90%)' }} />
            <div>
              <p className="font-heading font-semibold">Cardio Life</p>
              <p className="text-sm text-secondary-foreground/60">Centro de Vacinação Especializada</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-secondary-foreground/60">
              Dr. Gabriel Antonio Stanisci Miguel — CRM-GO 12.614 | RQE 26296
            </p>
            <p className="text-sm text-secondary-foreground/40 mt-1">
              © {new Date().getFullYear()} Cardio Life. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
