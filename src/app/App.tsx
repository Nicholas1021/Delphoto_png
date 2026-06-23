import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  Camera,
  Heart,
  Star,
  Instagram,
  MessageCircle,
  ChevronDown,
  Award,
  Aperture,
  CalendarDays,
  UserCircle,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// ─── Config ───────────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = "5511984415038";
const INSTAGRAM_HANDLE = "delphoto_png";
const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar um orçamento para fotos.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const INSTAGRAM_LINK = `https://instagram.com/${INSTAGRAM_HANDLE}`;
// ─── Data ─────────────────────────────────────────────────────────────────────



const portfolioItems = [
  { id: 1, img: "/images/delphoto 1.jpeg", alt: "Foto 1" },
  { id: 2, img: "/images/delphoto 2.jpeg", alt: "Foto 2" },
  { id: 3, img: "/images/delphoto 3.jpeg", alt: "Foto 3" },
  { id: 4, img: "/images/delphoto 4.jpeg", alt: "Foto 4" },
  { id: 5, img: "/images/delphoto 12.jpeg", alt: "Foto 5" },
  { id: 6, img: "/images/delphoto 9.jpeg", alt: "Foto 6" },
  { id: 7, img: "/images/delphoto 5.jpeg", alt: "Foto 7" },
  { id: 8, img: "/images/delphoto 11.jpeg", alt: "Foto 8" },
  { id: 9, img: "/images/delphoto 10.jpeg", alt: "Foto 9" },
  { id: 10, img: "/images/delphoto 13.jpeg", alt: "Foto 10" },
  { id: 11, img: "/images/delphoto 14.jpeg", alt: "Foto 11" },
  { id: 12, img: "/images/delphoto 16.jpeg", alt: "Foto 12" },
  /*
  { id: 13, img: "/images/foto13.jpg", alt: "Foto 13" },
  { id: 14, img: "/images/foto14.jpg", alt: "Foto 14" },
  { id: 15, img: "/images/foto15.jpg", alt: "Foto 15" },
   */
   
];



const services = [
  {
    icon: Heart,
    title: "Casamentos",
    desc: "Cobertura completa do seu dia especial, do making of à festa. Cada detalhe, cada emoção, eternizada com arte.",
  },
  {
    icon: Camera,
    title: "Ensaios Fotográficos",
    desc: "Ensaios de casal, gestante, família ou solo. Ambientes internos e externos. Imagens que revelam sua essência.",
  },
  {
    icon: CalendarDays,
    title: "Eventos Corporativos",
    desc: "Cobertura profissional de congressos, lançamentos, confraternizações e eventos institucionais.",
  },
  {
    icon: UserCircle,
    title: "Retratos Profissionais",
    desc: "Fotos para LinkedIn, press kits e perfis executivos. Transmita autoridade e confiança através das imagens.",
  },
  {
    icon: Aperture,
    title: "Cobertura de Festas",
    desc: "Aniversários, debutantes, formaturas e celebrações. Momentos de alegria guardados para sempre.",
  },
];



// ─── Shared Components ────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GoldLine() {
  return (
    <div className="flex items-center gap-4 justify-center my-6">
      <div
        className="h-px w-16"
        style={{ background: "linear-gradient(to right, transparent, #c9a96e)" }}
      />
      <div className="w-1.5 h-1.5 rotate-45" style={{ background: "#c9a96e" }} />
      <div
        className="h-px w-16"
        style={{ background: "linear-gradient(to left, transparent, #c9a96e)" }}
      />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="uppercase mb-4"
      style={{
        fontFamily: "'Playfair Display', serif",
        letterSpacing: "0.3em",
        color: "#c9a96e",
        fontSize: "0.7rem",
      }}
    >
      {children}
    </p>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,169,110,0.12)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <a href="#" style={{ fontFamily: "'Playfair Display', serif" }}>
          <span style={{ color: "#c9a96e", letterSpacing: "0.2em", fontSize: "1.2rem" }}>
            Del
          </span>
          <span
            style={{ color: "#f5f0e8", letterSpacing: "0.1em", fontSize: "1.2rem" }}
          >
          photo_png
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "0.22em",
                fontSize: "0.68rem",
                color: "#9a9080",
                textTransform: "uppercase",
              }}
              className="hover:text-[#c9a96e] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
       
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-1"
          style={{ color: "#f5f0e8" }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-px w-6 bg-current transition-all duration-300"
                style={{
                  transform:
                    open && i === 0
                      ? "rotate(45deg) translateY(5px)"
                      : open && i === 2
                      ? "rotate(-45deg) translateY(-5px)"
                      : "",
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "#0a0a0a", borderTop: "1px solid rgba(201,169,110,0.1)" }}
            className="md:hidden px-6 pb-6"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#9a9080",
                  letterSpacing: "0.2em",
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  borderBottom: "1px solid rgba(201,169,110,0.1)",
                }}
                className="block py-3 hover:text-[#c9a96e] transition-colors"
              >
                {l.label}
              </a>
            ))}

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden" style={{ height: "100vh", minHeight: 600 }}>
      <div className="absolute inset-0" style={{ background: "#000" }}>
        <img
          src="/images/capa delphoto.jpeg"
          alt="Delphotoimage"
          className="w-full h-full object-cover"
          style={{ opacity: 0.45 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.85) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "0.4em",
            color: "#c9a96e",
            fontSize: "0.7rem",
            textTransform: "uppercase",
          }}
          className="mb-7"
        >
          Fotografia de Alta Qualidade
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
            lineHeight: 1.12,
            color: "#fff",
            fontWeight: 400,
          }}
          className="mb-7"
        >
          <em style={{ color: "#c9a96e" }}>Você</em><br />
          É arte refletida através da minha lente e criada sob o meu olhar.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "rgba(255,255,255,0.65)",
            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
            letterSpacing: "0.06em",
          }}
          className="mb-10 max-w-xl mx-auto"
        >
          Fotografia profissional para casamentos, eventos, ensaios e retratos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: "#c9a96e",
              color: "#0a0a0a",
              padding: "16px 32px",
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
            className="hover:bg-[#e8d5a3] transition-colors duration-300"
          >
            <MessageCircle size={14} />
            Solicitar Orçamento 
          </a>
          <a
            href="#portfolio"
            style={{
              fontFamily: "'Playfair Display', serif",
              border: "1px solid rgba(255,255,255,0.45)",
              color: "#fff",
              padding: "16px 32px",
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
          >
            Ver Portfólio
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="sobre" className="py-28 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn>
          <div className="relative">
            <div
              className="absolute -inset-3"
              style={{ border: "1px solid rgba(201,169,110,0.18)" }}
            />
            <div
              className="absolute -bottom-8 -right-8 w-48 h-56"
              style={{ border: "1px solid rgba(201,169,110,0.15)", background: "rgba(201,169,110,0.03)" }}
            />
         <img
  src="/images/delphoto IA.png"
  alt="Gabrielle Delpech"
  className="relative z-10 w-full h-auto object-cover object-center"
/>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Label>Sobre o Fotógrafo</Label>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.22,
              color: "#f5f0e8",
              fontWeight: 400,
            }}
            className="mb-2"
          >
            A Arte de Contar<br />
            <em style={{ color: "#c9a96e" }}>Histórias com Luz</em>
          </h2>
          <GoldLine />
          <p
            style={{ fontFamily: "'Playfair Display', serif", color: "#9a9080", lineHeight: 1.8, fontSize: "0.95rem" }}
            className="mb-5"
          >
           Meu nome é Gabrielle, tenho 24 anos e sou de Guarulhos, SP.Sou apaixonada por fotografia e pela arte de registrar momentos únicos. Através das lentes, busco transformar emoções, histórias e detalhes em imagens que preservam memórias e despertam sentimentos.
           Ao longo da minha trajetória, desenvolvi um olhar atento para captar a essência de cada pessoa, ambiente e ocasião, sempre valorizando a autenticidade e a beleza de cada momento.
          </p>
          <p
            style={{ fontFamily: "'Playfair Display', serif", color: "#9a9080", lineHeight: 1.8, fontSize: "0.95rem" }}
            className="mb-10"
          >
            A fotografia me permitiu unir criatividade, sensibilidade e técnica em uma profissão que amo. Estou sempre em busca de novos desafios, experiências e oportunidades para evoluir meu trabalho e entregar registros que tenham significado para cada cliente.
            Cada ensaio, evento ou projeto é uma oportunidade de contar histórias de forma única, criando lembranças que podem ser revividas por muitos anos.
          </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Award, label: "Premiado" },
              { icon: Heart, label: "Apaixonado" },
              { icon: Camera, label: "Dedicado" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div
                  style={{ border: "1px solid rgba(201,169,110,0.35)", width: 38, height: 38 }}
                  className="flex items-center justify-center shrink-0"
                >
                  <Icon style={{ color: "#c9a96e" }} size={16} />
                </div>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#f5f0e8",
                    fontSize: "0.7rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Playfair Display', serif",
              border: "1px solid #c9a96e",
              color: "#c9a96e",
              padding: "14px 28px",
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            className="hover:bg-[#c9a96e] hover:text-black transition-all duration-300"
          >
            <MessageCircle size={13} />
            Fale Comigo
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Portfolio ────────────────────────────────────────────────────────────────
function Portfolio() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = portfolioItems;

  const [page, setPage] = useState(1);

  const itemsPerPage = 6;

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const displayedItems = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  

  return (
    <section id="portfolio" style={{ background: "#070707" }} className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn className="text-center mb-16">
          <Label>Portfólio</Label>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#f5f0e8",
              fontWeight: 400,
            }}
            className="mb-4"
          >
            Galeria de <em style={{ color: "#c9a96e" }}>Trabalhos</em>
          </h2>
          <GoldLine />
          <p
            style={{ fontFamily: "'Playfair Display', serif", color: "#9a9080", fontSize: "0.95rem" }}
            className="max-w-lg mx-auto"
          >
            Cada imagem representa uma história única. Explore alguns dos momentos que tive o privilégio de eternizar.
          </p>
        </FadeIn>

        {/* Filters */}
 

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <AnimatePresence>
           {displayedItems.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative group cursor-pointer overflow-hidden"
                style={{ background: "#111", aspectRatio: "3/4" }}
                onClick={() => setLightbox(item.img)}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "rgba(0,0,0,0.52)" }}
                >
                  <div
                    style={{ border: "1px solid #c9a96e", width: 44, height: 44 }}
                    className="flex items-center justify-center mb-3"
                  >
                    <Camera style={{ color: "#c9a96e" }} size={18} />
                  </div>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#c9a96e",
                      fontSize: "0.65rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.category}
                  </p>
                </div>
              </motion.div>

              
            ))}
          </AnimatePresence>
        </motion.div>


        {totalPages > 1 && (
  <div className="flex justify-center gap-3 mt-10">
    {Array.from({ length: totalPages }).map((_, index) => (
      <button
        key={index}
        onClick={() => setPage(index + 1)}
        className={`w-10 h-10 rounded-full transition-all ${
          page === index + 1
            ? "bg-[#c9a96e] text-black"
            : "border border-[#c9a96e] text-[#c9a96e]"
        }`}
      >
        {index + 1}
      </button>
    ))}
  </div>
)}

        <FadeIn delay={0.2} className="text-center mt-12">
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Playfair Display', serif",
              border: "1px solid rgba(201,169,110,0.25)",
              color: "#9a9080",
              padding: "14px 32px",
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            className="hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
          >
            <Instagram size={14} />
            Ver mais no Instagram
          </a>
        </FadeIn>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.96)" }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 transition-colors"
              style={{ color: "rgba(255,255,255,0.5)" }}
              onClick={() => setLightbox(null)}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              <X size={26} />
            </button>
            <motion.img
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              src={lightbox}
              alt="Imagem ampliada"
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="servicos" className="py-28 px-6 max-w-7xl mx-auto">
      <FadeIn className="text-center mb-16">
        <Label>Serviços</Label>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#f5f0e8",
            fontWeight: 400,
          }}
          className="mb-4"
        >
          O que <em style={{ color: "#c9a96e" }}>Ofereço</em>
        </h2>
        <GoldLine />
        <p
          style={{ fontFamily: "'Playfair Display', serif", color: "#9a9080", fontSize: "0.95rem" }}
          className="max-w-lg mx-auto"
        >
          Soluções fotográficas completas para cada momento da sua vida, com qualidade e atenção aos detalhes.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((svc, i) => (
          <FadeIn key={svc.title} delay={i * 0.08}>
            <div
              className="group relative overflow-hidden p-8 h-full transition-all duration-500"
              style={{
                border: "1px solid rgba(201,169,110,0.15)",
                background: "#111",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,169,110,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,169,110,0.15)";
              }}
            >
              <div
                className="absolute top-0 left-0 w-0.5 transition-all duration-500 group-hover:h-full"
                style={{ background: "#c9a96e", height: 0 }}
              />
              <div
                style={{ border: "1px solid rgba(201,169,110,0.3)", width: 46, height: 46 }}
                className="flex items-center justify-center mb-6 transition-colors duration-300 group-hover:border-[#c9a96e]"
              >
                <svc.icon style={{ color: "#c9a96e" }} size={20} />
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif", color: "#f5f0e8", fontSize: "1.15rem", fontWeight: 400 }}
                className="mb-3"
              >
                {svc.title}
              </h3>
              <p
                style={{ fontFamily: "'Playfair Display', serif", color: "#9a9080", lineHeight: 1.7, fontSize: "0.88rem" }}
              >
                {svc.desc}
              </p>
            </div>
          </FadeIn>
        ))}

        {/* CTA card */}
        <FadeIn delay={0.45}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center p-8 h-full transition-all duration-500 min-h-[200px]"
            style={{
              border: "1px solid rgba(201,169,110,0.35)",
              background: "linear-gradient(135deg, rgba(201,169,110,0.06) 0%, transparent 100%)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "linear-gradient(135deg, rgba(201,169,110,0.14) 0%, transparent 100%)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "linear-gradient(135deg, rgba(201,169,110,0.06) 0%, transparent 100%)";
            }}
          >
           <FaWhatsapp color="white" size={28} />
            <h3
              style={{ fontFamily: "'Playfair Display', serif", color: "#f5f0e8", fontSize: "1.1rem", fontWeight: 400 }}
              className="mb-2"
            >
              Precisa de algo especial?
            </h3>
            <p
              style={{ fontFamily: "'Playfair Display', serif", color: "#9a9080", fontSize: "0.85rem" }}
              className="mb-5"
            >
              Entre em contato e vamos criar juntos o projeto perfeito para você.
            </p>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#c9a96e",
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                borderBottom: "1px solid rgba(201,169,110,0.45)",
                paddingBottom: "2px",
              }}
            >
              Falar pelo WhatsApp
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}



// ─── Testimonials ─────────────────────────────────────────────────────────────



// ─── CTA ─────────────────────────────────────────────────────────────────────

function Cta() {
  return (
    <section id="contato" className="relative py-36 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1779745395966-fdee576c2fcc?w=1600&h=900&fit=crop&auto=format)",
          backgroundSize: "cover",
          backgroundPosition: "50% 20%",
          filter: "brightness(0.35)",
        }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.6)" }} />

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <FadeIn>
          <Label>Vamos criar juntos</Label>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1.18,
              color: "#fff",
              fontWeight: 400,
            }}
            className="mb-6"
          >
            Vamos contar sua história<br />
            <em style={{ color: "#c9a96e" }}>através de imagens?</em>
          </h2>
          <GoldLine />
          <p
            style={{ fontFamily: "'Playfair Display', serif", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontSize: "0.95rem" }}
            className="mb-10"
          >
            Cada momento é único e merece ser eternizado com arte. Entre em contato agora mesmo, tire suas dúvidas e receba uma proposta personalizada sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "#25D366",
                color: "#fff",
                padding: "16px 36px",
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
              className="hover:bg-[#1ebe5d] transition-colors duration-300"
            >
              <MessageCircle size={15} />
              Solicitar Orçamento pelo WhatsApp
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Playfair Display', serif",
                border: "1px solid rgba(255,255,255,0.38)",
                color: "#fff",
                padding: "16px 28px",
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
              className="hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
            >
              <Instagram size={15} />
              @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{ background: "#050505", borderTop: "1px solid rgba(201,169,110,0.12)" }}
      className="py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", letterSpacing: "0.15em" }}
              className="mb-4"
            >
              <span style={{ color: "#c9a96e" }}>Del
              <span style={{ color: "#f5f0e8" }}>photo_png</span>
            </div>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#9a9080",
                fontSize: "0.88rem",
                lineHeight: 1.75,
                maxWidth: "280px",
              }}
            >
              Fotografia profissional para quem valoriza momentos eternos. Arte, técnica e emoção em cada imagem.
            </p>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#c9a96e",
                fontSize: "0.65rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
              }}
              className="mb-5"
            >
              Contato
            </h4>
            <ul className="space-y-3">
              {[
                { label: "(11) 98441-5038", href: `tel:+${WHATSAPP_NUMBER}` },
                { label: "contatodoemail.com.com", href: "mailto:contatodoemail.com" },
                { label: "São Paulo, SP — Brasil", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    style={{ fontFamily: "'Playfair Display', serif", color: "#9a9080", fontSize: "0.88rem" }}
                    className="hover:text-[#c9a96e] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#c9a96e",
                fontSize: "0.65rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
              }}
              className="mb-5"
            >
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: INSTAGRAM_LINK, label: "Instagram" },
                { icon: MessageCircle, href: WHATSAPP_LINK, label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 40,
                    height: 40,
                    border: "1px solid rgba(201,169,110,0.25)",
                    color: "#9a9080",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}
        >
          <p style={{ fontFamily: "'Playfair Display', serif", color: "#9a9080", fontSize: "0.72rem", letterSpacing: "0.1em" }}>
            © 2026 Delphoto_png. Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: "'Playfair Display', serif", color: "#9a9080", fontSize: "0.72rem" }}>
            Feito com <span style={{ color: "#c9a96e" }}>♥</span> para eternizar momentos
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── WhatsApp Float ───────────────────────────────────────────────────────────

function WhatsAppFloat() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "80px",
        right: "24px",
        zIndex: 50,
      }}
    >
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -10, 0],
        }}
        transition={{
          scale: { delay: 2.5, type: "spring", stiffness: 180 },
          opacity: { delay: 2.5 },
          y: {
            delay: 2.5,
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.1, y: 0 }}
        whileTap={{ scale: 0.92 }}
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
          textDecoration: "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="32"
          height="32"
          fill="white"
        >
          <path d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.1 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm0 36c-3.1 0-6.1-.8-8.7-2.4l-.6-.4-6.2 1.6 1.6-6-.4-.6C8.1 29.8 7.3 27 7.3 24c0-9.2 7.5-16.7 16.7-16.7S40.7 14.8 40.7 24 33.2 40 24 40zm9.2-12.4c-.5-.2-2.9-1.4-3.3-1.6-.4-.2-.7-.2-1 .2-.3.5-1.2 1.6-1.5 1.9-.3.3-.5.4-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.4-2.8-2.6-3.2-.3-.5 0-.7.2-1 .2-.2.5-.5.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-1-2.5-1.4-3.4-.4-.9-.8-.8-1-.8h-.9c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.8s1.7 4.4 1.9 4.7c.2.3 3.3 5 8 7 1.1.5 2 .8 2.7 1 1.1.3 2.2.3 3 .2.9-.2 2.9-1.2 3.3-2.3.4-1.1.4-2.1.3-2.3-.2-.2-.5-.3-1-.5z" />
        </svg>
      </motion.a>
    </div>
  );
}
// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

return (
  <div style={{ background: "#0a0a0a", color: "#f5f0e8", scrollBehavior: "smooth", overflowX: "hidden" }}>
    <Navbar scrolled={scrolled} />
    <Hero />
    <About />
    <Portfolio />
    <Services />
    <Cta />
    <Footer />
    <WhatsAppFloat />
  </div>
);
}
