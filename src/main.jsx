import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Code2, Film, Globe2, Mail, Menu, Monitor,
  Play, Send, Sparkles, X, ChevronDown, ExternalLink, Layers3,
  Smartphone, Terminal, Zap
} from "lucide-react";
import "./styles.css";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const projects = [
  {
    title: "Bíblia & Harpa",
    category: "Web • React + Node.js",
    description: "Uma experiência de leitura com Bíblia e Harpa, navegação por capítulos, busca e tema claro/escuro.",
    tag: "Projeto real",
    accent: "cyan",
    url: "https://biblia-harpa-leitura-e-vida.vercel.app/"
  },

  {
    title: "Site Nova Madeira",
    category: "Marcenaria • Empreendedorismo",
    description: "Projeto pensado para transformar questionários e análises em diagnóstico e recomendações de segurança.",
    tag: "Sistema",
    accent: "violet",
    url: "https://nova-madeira-site.vercel.app/"
  },
  {
    title: "Projetos personalizados",
    category: "Programação • edição de vídeo • web design • Design",
    description: "Aplicações, automações, páginas e ferramentas construídas de acordo com a necessidade de cada projeto.",
    tag: "Sob medida",
    accent: "white",
  }
];

const services = [
  {
    icon: Globe2,
    number: "01",
    title: "Sites",
    text: "Sites modernos, responsivos e com personalidade — do conceito ao lançamento.",
    bullets: ["Landing pages", "Sites institucionais", "Experiências interativas"]
  },
  {
    icon: Code2,
    number: "02",
    title: "Programação",
    text: "Sistemas e aplicações pensados para resolver problemas de verdade.",
    bullets: ["Aplicações web", "Sistemas personalizados", "Automações"]
  },
  {
    icon: Film,
    number: "03",
    title: "Edição de vídeo",
    text: "Vídeos com ritmo, cortes, textos, efeitos e acabamento para prender atenção.",
    bullets: ["Reels e Shorts", "Vídeos para redes", "Conteúdo promocional"]
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <div className="noise" />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Vellmont início">
          <img src="Vellmont.png" alt="Vellmont" />
        </button>
    <div className="social-buttons">
  <a
  href="https://www.tiktok.com/search?q=vellmontstudios"
  target="_blank"
  rel="noreferrer"
  aria-label="TikTok"
>
  <FaTiktok />
</a>
  <a
    href="https://www.instagram.com/vellmontstudios"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=gabrieleditor396@gmail.com"
  target="_blank"
  rel="noreferrer"
  aria-label="Gmail"
>
  <SiGmail />
</a>
</div>    
        <nav className={menuOpen ? "nav open" : "nav"}>
          <button onClick={() => scrollTo("sobre")}>Sobre</button>
          <button onClick={() => scrollTo("servicos")}>Serviços</button>
          <button onClick={() => scrollTo("projetos")}>Projetos</button>
          <button onClick={() => scrollTo("contato")} className="nav-contact">Vamos conversar <ArrowUpRight size={15}/></button>
        </nav>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid" />
          <div className="hero-content">
            <div className="eyebrow"><span className="pulse-dot" /> CRIATIVIDADE + TECNOLOGIA</div>
            <h1>
              Ideias que viram
              <span className="gradient-text"> experiências.</span>
            </h1>
            <p className="hero-copy">
              A Vellmont cria <strong>sites, sistemas, programas e vídeos</strong>
              com uma mistura de tecnologia, design e criatividade.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollTo("projetos")}>
                Ver meus projetos <ArrowUpRight size={18}/>
              </button>
              <button className="btn btn-ghost" onClick={() => scrollTo("contato")}>
                Falar comigo <Send size={16}/>
              </button>
            </div>
            <div className="hero-proof">
              <span><Sparkles size={15}/> Projetos autorais</span>
              <span><Zap size={15}/> Soluções sob medida</span>
            </div>
          </div>

          <div className="hero-logo-wrap" aria-hidden="true">
            <div className="logo-orbit orbit-1" />
            <div className="logo-orbit orbit-2" />
            <div className="logo-glow" />
            <div className="logo-card">
              <div className="scan-line" />
              <img src="Vellmont.png" alt="Vellmont" />
              <div className="logo-shine" />
            </div>
            <span className="floating-label label-one">DESIGN</span>
            <span className="floating-label label-two">CODE</span>
            <span className="floating-label label-three">CREATE</span>
          </div>

          <div className="scroll-hint"><span /> role para explorar</div>
        </section>

        <section id="sobre" className="about section">
          <div className="section-tag reveal">01 / SOBRE A VELLMONT</div>
          <div className="about-grid">
            <div className="reveal">
              <h2>Não é só criar.<br /><span>É fazer acontecer.</span></h2>
            </div>
            <div className="about-text reveal">
              <p>
                A <strong>Vellmont</strong> nasceu para transformar ideias em projetos digitais
                que realmente tenham presença.
              </p>
              <p>
                Cada projeto une código, estética e estratégia para entregar algo que não
                parece genérico — parece <strong>seu</strong>.
              </p>
              <div className="mini-stats">
                <div><b>WEB</b><span>Interfaces modernas</span></div>
                <div><b>CODE</b><span>Sistemas e aplicações</span></div>
                <div><b>VIDEO</b><span>Edição criativa</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="services section">
          <div className="section-head reveal">
            <div>
              <div className="section-tag">02 / O QUE EU FAÇO</div>
              <h2>Três formas de<br /><span>tirar sua ideia do papel.</span></h2>
            </div>
            <p>Do primeiro rascunho até o resultado final, a Vellmont cria soluções digitais com identidade.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card reveal" key={service.number}>
                  <div className="service-top"><span>{service.number}</span><Icon size={28}/></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>{service.bullets.map(b => <li key={b}><span />{b}</li>)}</ul>
                  <div className="card-line" />
                </article>
              );
            })}
          </div>
        </section>

        <section id="projetos" className="projects section">
          <div className="section-head reveal">
            <div>
              <div className="section-tag">03 / PORTFÓLIO</div>
              <h2>Projetos que<br /><span>falam por si.</span></h2>
            </div>
            <p>Clique em um projeto para conhecer melhor. Os links podem ser trocados pelos seus endereços reais.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <button
                className={`project-card project-${project.accent} reveal`}
                key={project.title}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-number">0{index + 1}</div>
                <div className="project-art">
                  <div className="art-ring" />
                  <div className="art-window">
                    <div className="window-bar"><i/><i/><i/></div>
                    <div className="window-content">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <Layers3 className="art-icon" size={42}/>
                </div>
                <div className="project-info">
                  <span className="project-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                  <span className="view-project">Abrir projeto <ArrowUpRight size={17}/></span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="process section">
          <div className="process-inner">
            <div className="section-tag reveal">04 / COMO FUNCIONA</div>
            <h2 className="reveal">Da ideia ao <span>resultado.</span></h2>
            <div className="steps">
              {[
                ["01", "IDEIA", "Entendo o que você precisa e o resultado que quer alcançar."],
                ["02", "CRIAÇÃO", "Transformo a ideia em estrutura, visual e experiência."],
                ["03", "DESENVOLVIMENTO", "Construo, testo e ajusto cada parte do projeto."],
                ["04", "ENTREGA", "Você recebe algo pronto para colocar sua ideia em movimento."]
              ].map(([num, title, text]) => (
                <div className="step reveal" key={num}>
                  <span>{num}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="contact section">
          <div className="contact-glow" />
          <div className="contact-content reveal">
            <div className="section-tag">05 / CONTATO</div>
            <h2>Tem uma ideia?<br /><span>Vamos criar.</span></h2>
            <p>Se você precisa de um site, sistema, programa ou edição de vídeo, me chama.</p>
            <div className="contact-actions">
              <a className="btn btn-primary" href="mailto:gabrieleditor396@gmail.com">
                <Mail size={18}/> gabrieleditor396@gmail.com
              </a>
              <a className="btn btn-ghost" href="https://instagram.com/vellmontstudios" target="_blank" rel="noreferrer">
                Instagram <ExternalLink size={16}/>
              </a>
            </div>
          </div>
          <div className="contact-side reveal">
            <Terminal size={22}/>
            <span>Vellmont Studio</span>
            <b>CREATE / BUILD / IMPACT</b>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <img src="Vellmont.png" alt="Vellmont" />
          <span>Sites • Código • Vídeo</span>
        </div>
        <span>© {year} Vellmont. Todos os direitos reservados.</span>
        <button onClick={() => scrollTo("home")} aria-label="Voltar ao topo"><ChevronDown size={18} className="up"/></button>
      </footer>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}><X/></button>
            <div className={`modal-art project-${selectedProject.accent}`}>
              <Monitor size={54}/>
            </div>
            <span className="project-tag">{selectedProject.tag}</span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="modal-actions">
              {selectedProject.url !== "#" ? (
                <a className="btn btn-primary" href={selectedProject.url} target="_blank" rel="noreferrer">
                  Visitar projeto <ExternalLink size={17}/>
                </a>
              ) : (
                <button className="btn btn-primary" onClick={() => setSelectedProject(null)}>
                  Link do projeto <ArrowUpRight size={17}/>
                </button>
              )}
              <button className="btn btn-ghost" onClick={() => setSelectedProject(null)}>Fechar</button>
            </div>
            {selectedProject.url === "#" && <small>Edite a propriedade <code>url</code> no arquivo <code>src/main.jsx</code> para colocar o link real.</small>}
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
