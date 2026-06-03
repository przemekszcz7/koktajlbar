import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  Share2, 
  Coffee, 
  Flame, 
  Wine, 
  X, 
  ChevronRight, 
  Menu, 
  Compass, 
  Heart,
  Droplet,
  GlassWater,
  PartyPopper
} from "lucide-react";
import { DRINKS_DATA, OPENING_HOURS, BAR_INFO, Drink } from "./data";

// Custom Pencil Separator component
const PencilLine = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1000 20" preserveAspectRatio="none" className={`w-full h-4 stroke-pencil-gray fill-none opacity-80 ${className}`}>
    <path d="M 0,10 Q 120,4 250,11 T 500,7 T 750,12 T 1000,9" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M 10,12 Q 130,8 260,13 T 510,9 T 760,14 T 990,11" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
  </svg>
);

// Custom Pencil Underline for headings
const PencilUnderline = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 15" preserveAspectRatio="none" className={`h-3 stroke-sepia fill-none ${className}`}>
    <path d="M 5,6 Q 75,2 150,8 T 295,5" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
    <path d="M 15,10 Q 80,6 160,9 T 285,8" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-[#C4A882]/20 selection:text-[#2E2E2E]">
      
      {/* 1. NAVIGATION */}
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-paper-light border-b border-pencil-gray/40 py-3 shadow-md" 
          : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3 group header-glow">
            <div className="relative w-10 h-10 rounded-full border border-sepia/70 p-0.5 overflow-hidden bg-paper-dark/50 flex-shrink-0 flex items-center justify-center">
              <img 
                src="https://i.ibb.co/W4JCnChB/358588762-103882859444961-282224786586787185-n.jpg"
                alt="Logo BAR & SHOT Sława"
                className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-hand text-2xl md:text-3xl font-bold tracking-tight text-charcoal leading-none">
                KOKTAJL BAR
              </span>
              <span className="text-[10px] tracking-widest font-mono text-charcoal-light uppercase">
                BAR & SHOT • Sława
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#o-nas" className="font-hand text-lg hover:text-sepia tracking-wider transition-colors">O Nas</a>
            <a href="#nasze-specjaly" className="font-hand text-lg hover:text-sepia tracking-wider transition-colors">Karta Drinków</a>
            <a href="#godziny" className="font-hand text-lg hover:text-sepia tracking-wider transition-colors">Godziny Otwarcia</a>
            <a href="#kontakt" className="font-hand text-lg hover:text-sepia tracking-wider transition-colors">Kontakt</a>
            <a 
              href={`tel:${BAR_INFO.phone}`} 
              className="px-4 py-1.5 rounded-full border border-sepia text-charcoal hover:bg-sepia/10 font-hand text-base transition-all duration-200 flex items-center space-x-2"
            >
              <Phone size={14} className="text-sepia" />
              <span>Zadzwoń</span>
            </a>
          </div>

          {/* Mobile Hamburguer Button */}
          <button 
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-charcoal hover:text-sepia transition-colors focus:outline-none"
            aria-label="Menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 w-full h-auto bg-paper-light border-b-2 border-pencil-gray z-30 pt-20 pb-8 px-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col space-y-5 text-center">
              <a 
                href="#o-nas" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-hand text-2xl py-2 border-b border-pencil-gray/20 text-charcoal"
              >
                O Nas
              </a>
              <a 
                href="#nasze-specjaly" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-hand text-2xl py-2 border-b border-pencil-gray/20 text-charcoal"
              >
                Karta Drinków
              </a>
              <a 
                href="#godziny" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-hand text-2xl py-2 border-b border-pencil-gray/20 text-charcoal"
              >
                Godziny Otwarcia
              </a>
              <a 
                href="#kontakt" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-hand text-2xl py-2 border-b border-pencil-gray/20 text-charcoal"
              >
                Kontakt
              </a>
              
              <div className="pt-2 flex flex-col items-center space-y-3">
                <a 
                  href={`tel:${BAR_INFO.phone}`} 
                  className="w-full max-w-xs py-2 rounded-lg bg-sepia text-paper-light font-hand text-xl shadow-md hover:bg-sepia/90 flex items-center justify-center space-x-2"
                >
                  <Phone size={18} />
                  <span>{BAR_INFO.phone}</span>
                </a>
                <div className="flex space-x-4 pt-2">
                  <a href={BAR_INFO.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 bg-paper-dark rounded-full flex items-center justify-center border border-pencil-gray text-charcoal">
                    <i className="fa-brands fa-facebook-f text-lg"></i>
                  </a>
                  <a href={BAR_INFO.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 bg-paper-dark rounded-full flex items-center justify-center border border-pencil-gray text-charcoal">
                    <i className="fa-brands fa-instagram text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* 2. HERO SECTION */}
      <section 
        id="hero" 
        className="relative w-full h-screen bg-paper-light text-charcoal flex items-center justify-center overflow-hidden"
      >
        {/* Subtle Canvas Warm Overlay for light vintage depth */}
        <div className="absolute inset-0 bg-paper-dark/30 opacity-70"></div>
        <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-paper-light/20 to-paper-dark/45"></div>
        
        {/* Art Deco style corner borders in Pencil style */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-pencil-gray/60 pointer-events-none"></div>
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-pencil-gray/60 pointer-events-none"></div>
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-pencil-gray/60 pointer-events-none"></div>
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-pencil-gray/60 pointer-events-none"></div>

        <div className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-3"
          >
            <span className="font-mono text-xs md:text-sm tracking-[0.35rem] text-sepia uppercase font-bold">
              BAR & SHOT
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            {/* Big handwritten styled central text */}
            <h1 className="font-hand text-6xl sm:text-7xl md:text-9xl font-bold tracking-tight text-charcoal">
              KOKTAJL BAR
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4">
              <svg viewBox="0 0 300 20" className="w-full h-6 stroke-sepia fill-none opacity-80">
                <path d="M 0,10 Q 150,2 300,10 M 10,13 Q 150,5 290,12" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-kalam text-2xl sm:text-3xl md:text-4xl text-charcoal-light mt-8 italic"
          >
            „Koktajl, który zapamiętasz.”
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a 
              href="#nasze-specjaly" 
              className="px-8 py-3 bg-sepia text-charcoal font-hand text-xl font-bold rounded-lg shadow-lg hover:bg-sepia/90 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-sepia"
            >
              Przejdź do Notesu Drinków
            </a>
            <a 
              href="#kontakt" 
              className="px-8 py-3 border border-charcoal/45 text-charcoal font-hand text-xl rounded-lg hover:bg-charcoal/5 transition-all duration-200"
            >
              Rezerwacje & Kontakt
            </a>
          </motion.div>



        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10 opacity-80 hover:opacity-100">
          <a href="#o-nas" aria-label="W dół" className="text-charcoal-light flex flex-col items-center">
            <span className="font-hand text-xs mb-1">Przewiń</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-sepia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>


      {/* 3. ABOUT US SECTION */}
      <section id="o-nas" className="w-full py-20 px-4 md:px-8 bg-paper-light relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-hand text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
              Kilka Słów o Naszym Klimacie
            </h2>
            <PencilUnderline className="mx-auto w-48 mt-1" />
            <p className="font-mono text-xs text-sepia tracking-widest uppercase mt-4">
              Z serca starego notesu barmańskiego
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left side: Handwritten style notebook page */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="pencil-box notebook-paper p-8 md:p-12 shadow-2xl relative rotate-[0.5deg]">
                {/* Vintage details */}
                <div className="absolute -top-3 left-10 flex space-x-2">
                  <div className="w-6 h-6 rounded-full bg-[#1A1816]/5 border border-pencil-gray flex items-center justify-center">
                    <span className="text-xs font-mono text-pencil-gray">●</span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#1A1816]/5 border border-pencil-gray flex items-center justify-center">
                    <span className="text-xs font-mono text-pencil-gray">●</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 text-xs font-mono text-sepia/70 border border-sepia/30 px-2 py-0.5 rounded rotate-3">
                  EST. 2023
                </div>

                <h3 className="font-hand text-3xl font-bold text-charcoal mb-6 mt-2 border-b border-sepia/30 pb-2">
                  Bar, ogródek i widok, który zostaje w pamięci...
                </h3>

                <div className="font-sans text-base text-charcoal-light space-y-4 leading-relaxed">
                  <p>
                    <span className="font-hand text-2xl text-sepia font-bold">BAR & SHOT</span> to rzemieślniczy koktajl bar stworzony z autentycznej miłości do miksologii i unikalnej atmosfery. Zlokalizowany w sercu Sławy, przy ulicy <span className="font-semibold underline">Odrodzonego Wojska Polskiego</span>, stał się ucieczką dla wszystkich, którzy szukają czegoś więcej niż standardowego wieczornego wyjścia.
                  </p>
                  <p>
                    Nasz wielki atut? Przycieszny, klimatyczny <strong className="text-charcoal font-semibold">ogródek z widokiem na jezioro</strong>. To właśnie u nas orzeźwiające Espresso Tonic najlepiej smakuje w letnie niedzielne popołudnia, a chłodne Daiquiri z dymną bańką tworzy idealny akompaniament dla zachodów słońca.
                  </p>
                  <p>
                    Dbamy o każdy detal – od ręcznie robionych syropów owocowych i starannie dobranych ziół, po spektakularny sposób podania. Każdy kieliszek opowiada inną historię. Chlebem powszednim są u nas zaskoczenie i powiew kreatywności.
                  </p>
                  <p className="font-hand text-2xl text-sepia pt-4">
                    ~ Zapraszamy za bar, Ekipa Koktajl Bar BAR&SHOT
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: Illustrated board / Feature details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              <div className="pencil-box bg-[#FAF6F0] p-6 hover:translate-y-[-4px] transition-all duration-300 flex items-start space-x-4 rotate-[-0.5deg]">
                <div className="w-12 h-12 bg-sepia/10 border border-sepia/30 rounded-full flex items-center justify-center flex-shrink-0 text-sepia">
                  <Wine size={24} />
                </div>
                <div>
                  <h4 className="font-hand text-2xl font-bold text-charcoal mb-1">Prawdziwe rzemiosło</h4>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    Sami robimy bazy, kandyzujemy owoce i tworzymy dymne niespodzianki. U nas nie ma drogi na skróty.
                  </p>
                </div>
              </div>

              <div className="pencil-box bg-[#FAF6F0] p-6 hover:translate-y-[-4px] transition-all duration-300 flex items-start space-x-4 rotate-[0.8deg]">
                <div className="w-12 h-12 bg-sepia/10 border border-sepia/30 rounded-full flex items-center justify-center flex-shrink-0 text-sepia">
                  <Compass size={24} />
                </div>
                <div>
                  <h4 className="font-hand text-2xl font-bold text-charcoal mb-1">Widok na Jezioro</h4>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    Ogródek letni usytuowany tak, aby każdy wieczorny promień słońca nad wodą umilał Twój ulubiony napój.
                  </p>
                </div>
              </div>

              <div className="pencil-box bg-[#FAF6F0] p-6 hover:translate-y-[-4px] transition-all duration-300 flex items-start space-x-4 rotate-[-0.8deg]">
                <div className="w-12 h-12 bg-sepia/10 border border-sepia/30 rounded-full flex items-center justify-center flex-shrink-0 text-sepia">
                  <Flame size={24} />
                </div>
                <div>
                  <h4 className="font-hand text-2xl font-bold text-charcoal mb-1">Spektakl w szkle</h4>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    Używamy bąbli z zapachowym dymem, podajemy gorące napary i chłodzimy suchym lodem dla niezapomnianych wrażeń.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <PencilLine />


      {/* 4. DRINKS / MENU SECTION */}
      <section id="nasze-specjaly" className="w-full py-20 px-4 md:px-8 bg-paper-dark/35 relative">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-hand text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
              Nasze Specjały
            </h2>
            <PencilUnderline className="mx-auto w-56 mt-1" />
            <p className="font-mono text-xs text-sepia tracking-widest uppercase mt-4">
              Kliknij zdjęcie drinka, aby zobaczyć autorski opis w notesie
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DRINKS_DATA.map((drink, index) => {
              // Alternate tilt for natural handmade feel
              const rotateClass = index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]";
              return (
                <div 
                  key={drink.id}
                  className={`pencil-box bg-[#FAF6F0] overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 hover:translate-y-[-8px] hover:rotate-0 hover:shadow-2xl ${rotateClass}`}
                  onClick={() => setSelectedDrink(drink)}
                >
                  
                  {/* Drink Photo with Sepia overlay */}
                  <div className="relative h-72 overflow-hidden border-b border-pencil-gray">
                    <img 
                      src={drink.image} 
                      alt={drink.name} 
                      className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#C4A882]/10 mix-blend-color group-hover:bg-transparent transition-all duration-300"></div>
                    <div className="absolute top-3 right-3 bg-paper-light border border-sepia text-charcoal font-hand text-sm px-2.5 py-1 rounded shadow-md rotate-3">
                      {drink.category}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-hand text-2xl font-bold text-charcoal group-hover:text-sepia transition-colors">
                          {drink.name}
                        </h3>
                        <Sparkles size={16} className="text-sepia opacity-65" />
                      </div>
                      
                      <p className="font-sans text-sm text-charcoal-light leading-relaxed mb-4">
                        {drink.shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-pencil-gray/30 flex items-center justify-between text-xs font-mono text-sepia">
                      <span>Rekomendacja Barmana</span>
                      <span className="font-hand text-base text-charcoal flex items-center space-x-1 font-bold">
                        <span>Zobacz Szczegóły</span> 
                        <ChevronRight size={14} className="mt-0.5" />
                      </span>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="font-hand text-xl text-charcoal-light italic">
              "Karta ulega okresowym zmianom, zależnie od sezonowych owoców i kreatywności barmańskiej."
            </p>
          </div>

        </div>
      </section>

      {/* Lightbox / Notes details modal for each drink */}
      <AnimatePresence>
        {selectedDrink && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-paper-light border-2 border-charcoal rounded-xl shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedDrink(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-charcoal text-paper-light rounded-full border border-pencil-gray hover:bg-sepia transition-colors"
                aria-label="Zamknij"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Left: Full Picture */}
                <div className="h-80 md:h-full min-h-[400px] relative bg-charcoal">
                  <img 
                    src={selectedDrink.image} 
                    alt={selectedDrink.name} 
                    className="w-full h-full object-cover grayscale-[20%] sepia-[10%] brightness-[95%]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden"></div>
                  <div className="absolute bottom-6 left-6 block md:hidden text-paper-light">
                    <span className="text-xs uppercase tracking-widest font-mono text-sepia bg-charcoal/50 px-2 py-0.5 rounded">
                      {selectedDrink.category}
                    </span>
                    <h3 className="font-hand text-3xl font-bold mt-1 text-paper-light">
                      {selectedDrink.name}
                    </h3>
                  </div>
                </div>

                {/* Right: Hand-written Notebook Recipe & Details */}
                <div className="p-8 md:p-12 notebook-paper flex flex-col justify-between">
                  <div>
                    <span className="hidden md:inline-block text-xs uppercase tracking-widest font-mono text-sepia border border-sepia/30 px-2.5 py-0.5 rounded-full mb-3">
                      {selectedDrink.category}
                    </span>
                    <h3 className="hidden md:block font-hand text-4xl font-bold text-charcoal mb-4 border-b border-sepia/30 pb-2">
                      {selectedDrink.name}
                    </h3>

                    {/* Description */}
                    <div className="mb-6">
                      <h4 className="font-mono text-xs text-sepia tracking-widest uppercase mb-1">Historia Smaku</h4>
                      <p className="font-sans text-sm md:text-base text-charcoal-light leading-relaxed">
                        {selectedDrink.description}
                      </p>
                    </div>

                    {/* Ingredients & Temp details in Courier / typewriter font */}
                    <div className="grid grid-cols-1 gap-4 bg-paper-dark/40 border border-pencil-gray/50 rounded-lg p-4 font-special text-xs text-charcoal-light mb-6 rotate-[-0.5deg]">
                      <div>
                        <strong className="text-charcoal block mb-0.5">METODA PODANIA:</strong>
                        <span>{selectedDrink.temp}</span>
                      </div>
                      <div>
                        <strong className="text-charcoal block mb-0.5">AUTORSKIE NOTATKI:</strong>
                        <span>{selectedDrink.notes}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between pt-4 border-t border-pencil-gray/30">
                      <div className="flex items-center space-x-2">
                        <Heart size={16} className="text-sepia fill-sepia" />
                        <span className="font-hand text-base text-charcoal-light">Receptura Oryginalna</span>
                      </div>
                      <a 
                        href={`tel:${BAR_INFO.phone}`}
                        className="px-4 py-1.5 rounded-md bg-charcoal text-paper-light hover:bg-sepia hover:text-charcoal text-xs font-mono tracking-wider transition-colors"
                      >
                        Zarezerwuj Stolik
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>





      {/* 6. OPENING HOURS ("GODZINY OTWARCIA") */}
      <section id="godziny" className="w-full py-20 px-4 md:px-8 bg-[#181615] text-paper-light relative overflow-hidden">
        {/* Simulating Chalkboard Board */}
        <div className="absolute inset-0 bg-[#141211] opacity-75"></div>
        <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-[#0F0D0D]/40 to-[#0A0908]"></div>
        
        {/* Subtle white dust chalkboard scratches */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-pencil-gray/25 to-transparent"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-mono text-xs text-sepia tracking-[0.2em] uppercase font-semibold">
              Klimat Letnich Dni i Nocy
            </span>
            <h2 className="font-hand text-4xl md:text-5xl font-bold tracking-tight text-paper-light mt-2">
              Kiedy serwujemy szoty?
            </h2>
            <div className="mx-auto w-32 mt-1">
              <svg viewBox="0 0 100 12" className="w-full h-3 stroke-sepia fill-none opacity-80">
                <path d="M 0,6 Q 50,2 100,6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Artistic Chalkboard rendering */}
            <div className="lg:col-span-6">
              <div className="border-[8px] border-amber-900/60 rounded-xl bg-chalkboard p-6 md:p-8 shadow-2xl relative rotate-[-1deg]">
                {/* Chalk board wooden feel header */}
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-amber-900/90 text-[10px] text-paper-light font-mono px-4 py-0.5 rounded uppercase tracking-wider">
                  Tablica Kredowa Menu
                </div>

                <div className="mb-6 text-center border-b border-pencil-gray/30 pb-4">
                  <h3 className="font-hand text-3xl font-bold text-paper-light italic tracking-wide">
                    Dzisiejszy harmonogram
                  </h3>
                  <p className="font-mono text-[10px] text-[#A6A29C]/80 uppercase mt-1">
                    Widok na jezioro zaprasza od rana do nocy
                  </p>
                </div>

                <div className="space-y-4 font-special text-sm md:text-base text-[#FAF6F0]/90">
                  {OPENING_HOURS.map((item, index) => (
                    <div 
                      key={index} 
                      className={`flex justify-between items-center py-2.5 border-b border-white/[0.05] last:border-0 ${
                        item.weekend ? "text-sepia font-bold" : ""
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span>{item.day}</span>
                        {item.weekend && (
                          <span className="text-[10px] font-mono bg-sepia/25 text-sepia px-1.5 py-0.5 rounded uppercase border border-sepia/40">
                            Weekend
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 font-mono">
                        <span>{item.hours}</span>
                        <Clock size={14} className="text-pencil-gray opacity-50" />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Right side: Elegant descriptive card and phone CTA */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="font-hand text-3xl md:text-4xl text-sepia font-bold block">
                  Piątki i soboty aż do 02:00!
                </span>
                <p className="text-base text-[#FAF6F0]/85 leading-relaxed font-sans">
                  W BAR & SHOT wiemy, że letnie wieczory w Sławie zasługują na wyjątkową oprawę. Dlatego w weekendy (piątek i sobota) jesteśmy z Wami otwarcie aż do godziny <strong className="text-sepia">02:00 w nocy</strong>. 
                </p>
                <p className="text-base text-[#FAF6F0]/85 leading-relaxed font-sans">
                  Słońce powoli zachodzi nad naszym słynnym jeziorem, a barman rozgrzewa atmosferę pierwszymi szotami. Zapraszamy zarówno na chłodny popołudniowy koktajl w ciągu tygodnia, jak i dłuższą imprezę przy barze.
                </p>
              </div>

              {/* Unique call to active phone icon */}
              <div className="pencil-box bg-paper-dark p-6 text-charcoal border border-sepia rotate-[0.5deg]">
                <h4 className="font-hand text-2xl font-bold mb-1 text-charcoal">
                  Planujesz wizytę większą grupą?
                </h4>
                <p className="text-sm font-sans text-charcoal-light mb-4">
                  Zadzwoń do nas wcześniej. Przygotujemy dla Was najlepsze miejsca w ogródku z bezpośrednim, panoramicznym widokiem na jezioro.
                </p>
                <a 
                  href={`tel:${BAR_INFO.phone}`}
                  className="w-full py-2.5 px-4 rounded-md bg-charcoal text-paper-light hover:bg-sepia hover:text-charcoal font-mono text-sm uppercase tracking-wider flex items-center justify-center space-x-2 font-bold transition-colors"
                >
                  <Phone size={16} />
                  <span>Zadzwoń: {BAR_INFO.phone}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      <PencilLine />


      {/* 7. CONTACT & MAP SECTION ("KONTAKT") */}
      <section id="kontakt" className="w-full py-20 px-4 md:px-8 bg-paper-light relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-hand text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
              Jak Do Nas Trafić?
            </h2>
            <PencilUnderline className="mx-auto w-40 mt-1" />
            <p className="font-mono text-xs text-sepia tracking-widest uppercase mt-4">
              Dostępni przez cały sezon w Sławie
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left side: Handwritten notes address detail with vintage social stamps */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              <div className="pencil-box notebook-paper p-8 flex-grow shadow-lg rotate-[-0.7deg]">
                
                <h3 className="font-hand text-3.5xl font-bold text-charcoal mb-6 border-b border-sepia/30 pb-2">
                  Dane Kontaktowe
                </h3>

                <div className="space-y-6 font-sans text-charcoal-light">
                  
                  {/* Address */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2 border border-sepia rounded-md bg-paper-dark">
                      <MapPin size={20} className="text-sepia" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-sepia block uppercase">Lokalizacja</span>
                      <strong className="text-charcoal block text-lg font-semibold mt-0.5">
                        BAR & SHOT Sława
                      </strong>
                      <span className="text-sm">
                        ul. Odrodzonego Wojska Polskiego, Sława 67-410
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2 border border-sepia rounded-md bg-paper-dark">
                      <Phone size={20} className="text-sepia" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-sepia block uppercase">Telefon komórkowy</span>
                      <a 
                        href={`tel:${BAR_INFO.phone}`}
                        className="text-charcoal block text-xl font-bold mt-0.5 hover:text-sepia transition-colors"
                      >
                        {BAR_INFO.phone}
                      </a>
                      <span className="text-xs italic text-charcoal-light/70 block mt-0.5 col-span-2">
                        Kliknij numer, aby połączyć bezpośrednio
                      </span>
                    </div>
                  </div>

                </div>

                <div className="mt-8 pt-6 border-t border-pencil-gray/30">
                  <span className="font-hand text-xl text-charcoal font-semibold block mb-4 text-center">
                    Znajdziesz nas w sieci
                  </span>
                  
                  {/* Social media "Stamps" layout as requested (concentric pen drawing outline) */}
                  <div className="flex justify-center space-x-6">
                    
                    {/* FB Stamp */}
                    <a 
                      href={BAR_INFO.facebook} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="group flex flex-col items-center"
                    >
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-sepia flex items-center justify-center bg-[#FAF6F0] p-1 group-hover:scale-105 group-hover:-rotate-3 duration-300 shadow-sm">
                        <div className="w-full h-full rounded-full border border-sepia flex items-center justify-center text-charcoal bg-paper-dark">
                          <i className="fa-brands fa-facebook-f text-lg text-charcoal"></i>
                        </div>
                      </div>
                      <span className="font-hand text-sm mt-1 text-charcoal-light group-hover:text-sepia">Facebook</span>
                    </a>

                    {/* IG Stamp */}
                    <a 
                      href={BAR_INFO.instagram} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="group flex flex-col items-center"
                    >
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-sepia flex items-center justify-center bg-[#FAF6F0] p-1 group-hover:scale-105 group-hover:rotate-3 duration-300 shadow-sm">
                        <div className="w-full h-full rounded-full border border-sepia flex items-center justify-center text-charcoal bg-paper-dark">
                          <i className="fa-brands fa-instagram text-lg text-charcoal"></i>
                        </div>
                      </div>
                      <span className="font-hand text-sm mt-1 text-charcoal-light group-hover:text-sepia">Instagram</span>
                    </a>

                  </div>
                </div>

              </div>
              
            </div>

            {/* Right side: Google Map wrapped in a beautiful sketch border shadow frame */}
            <div className="lg:col-span-7">
              <div className="pencil-box bg-[#FAF6F0] p-3 shadow-xl rotate-[0.7deg] h-full flex flex-col justify-between">
                <div>
                  <div className="font-hand text-2xl font-bold text-charcoal p-2 border-b border-pencil-gray/20 mb-3 flex items-center justify-between">
                    <span>Notes wejściowy / Dojazd</span>
                    <span className="font-mono text-xs text-sepia uppercase">(Centrum Sławy)</span>
                  </div>
                </div>
                
                <div className="w-full flex-grow relative rounded overflow-hidden border border-pencil-gray min-h-[350px]">
                  {/* Google maps iframe - EXACT embedding requested by user */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.7681660508015!2d16.053991877091317!3d51.88344428316214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705e6232d4ed7f3%3A0x949d9f60870d409c!2sOdrodzonego%20Wojska%20Polskiego%2C%2067-410!5e0!3m2!1spl!2spl!4v1780494043958!5m2!1spl!2spl" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: "350px" }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BAR & SHOT Sława Mapa"
                  ></iframe>
                </div>

                <div className="p-2 text-center text-xs font-mono text-pencil-gray mt-2">
                  Skorzystaj z powyższej mapy interaktywnej dla wyznaczenia trasy
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      
      {/* 8. FOOTER */}
      <footer className="bg-[#11100F] text-[#FAF6F0] border-t border-pencil-gray/20 py-12 px-4 relative mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          
          <div className="text-center md:text-left">
            <span className="font-hand text-3xl font-bold text-sepia tracking-tight block">
              BAR & SHOT
            </span>
            <span className="font-mono text-[10px] text-pencil-gray uppercase tracking-widest block mt-1">
              Koktajl Bar Sława • Odrodzonego Wojska Polskiego
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-center">
              <p className="font-hand text-xl italic text-[#A6A29C]">
                „Koktajl, który zapamiętasz.”
              </p>
              <p className="font-mono text-[10px] text-pencil-gray/70 mt-2">
                © {new Date().getFullYear()} BAR & SHOT Sława. Wszelkie prawa zastrzeżone.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <a href={BAR_INFO.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 border border-pencil-gray/20 rounded-full flex items-center justify-center text-[#FAF6F0] hover:text-sepia hover:border-sepia transition-all">
              <i className="fa-brands fa-facebook-f text-sm"></i>
            </a>
            <a href={BAR_INFO.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 border border-pencil-gray/20 rounded-full flex items-center justify-center text-[#FAF6F0] hover:text-sepia hover:border-sepia transition-all">
              <i className="fa-brands fa-instagram text-sm"></i>
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}
