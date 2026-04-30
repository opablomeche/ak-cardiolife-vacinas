import logo from "@/assets/logo-cardiolife.webp";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Cardio Life" className="h-12 brightness-0 invert" />
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
    </footer>
  );
};

export default Footer;
