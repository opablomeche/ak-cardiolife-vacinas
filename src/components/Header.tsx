import logo from "@/assets/logo-cardiolife.webp";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5562994031244&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20vacina%C3%A7%C3%A3o.";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground text-sm py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:6233112796" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              (62) 3311-2796
            </a>
            <a href="tel:62994031244" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              (62) 9 9403-1244
            </a>
          </div>
          <div className="hidden md:flex items-center gap-1 text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            <span>Ed. London Hotel & Offices, Rua Cel. Batista 415, 12° Andar, Anápolis - GO</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-background shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <a href="#inicio">
            <img src={logo} alt="Cardio Life" className="h-14 md:h-16" />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-7">
            <a href="#inicio" className="font-heading font-semibold text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#faixas" className="font-heading font-semibold text-foreground hover:text-primary transition-colors">
              Faixas Etárias
            </a>
            <a href="#como-funciona" className="font-heading font-semibold text-foreground hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#vacinas" className="font-heading font-semibold text-foreground hover:text-primary transition-colors">
              Vacinas
            </a>
            <a href="#contato" className="font-heading font-semibold text-foreground hover:text-primary transition-colors">
              Contato
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground font-heading font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Agendar Vacina
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background border-t px-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4 pt-4">
              <a href="#inicio" onClick={() => setMenuOpen(false)} className="font-heading font-semibold text-foreground">Início</a>
              <a href="#faixas" onClick={() => setMenuOpen(false)} className="font-heading font-semibold text-foreground">Faixas Etárias</a>
              <a href="#como-funciona" onClick={() => setMenuOpen(false)} className="font-heading font-semibold text-foreground">Como Funciona</a>
              <a href="#vacinas" onClick={() => setMenuOpen(false)} className="font-heading font-semibold text-foreground">Vacinas</a>
              <a href="#contato" onClick={() => setMenuOpen(false)} className="font-heading font-semibold text-foreground">Contato</a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-foreground font-heading font-bold px-6 py-2.5 rounded-lg text-center"
              >
                Agendar Vacina
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
