/**
 * Asperitas Inc. - Interactive Scripting
 * Handles Navigation, Slider, Scroll Animations, and SVG Interactive Graph
 */

// Letter-scramble reveal effect, shared by the header mega menus and any page
// that wants the same "decode into place" text animation (e.g. the Leadership
// bio panel). Exposed on window so inline page scripts loaded after this file
// can reuse it without duplicating the logic.
window.TextScramble = class TextScramble {
  constructor(el) {
    this.el = el;
    this.finalText = el.textContent;
    this.frame = 0;
    this.frameRequest = null;
    this.queue = [];
    this.ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    this.TOTAL_FRAMES = Math.round(500 / (1000 / 60)); // ~0.5s at 60fps
  }
  setText(text) {
    // Allows reusing one scrambler instance for content that changes (e.g. a
    // detail panel that loads a different person/place each time it opens).
    this.finalText = text;
  }
  run() {
    const text = this.finalText;
    this.queue = [];
    for (let i = 0; i < text.length; i++) {
      // Stagger only when each letter locks in, so the whole word decodes left-to-right within ~0.5s
      const end = Math.floor((i / text.length) * this.TOTAL_FRAMES * 0.6) + Math.floor(Math.random() * (this.TOTAL_FRAMES * 0.4));
      this.queue.push({ to: text[i], end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
  }
  update = () => {
    let output = '';
    let complete = 0;
    for (let i = 0; i < this.queue.length; i++) {
      const { to, end } = this.queue[i];
      // Only letters/digits actually scramble; spaces, slashes, punctuation
      // etc. settle immediately so things like "01 / 04" don't flicker oddly.
      if (this.frame >= end || !/[A-Za-z0-9]/.test(to)) {
        complete++;
        output += to;
      } else {
        output += this.ALPHABET[Math.floor(Math.random() * this.ALPHABET.length)];
      }
    }
    this.el.textContent = output;
    if (complete === this.queue.length) {
      this.el.textContent = this.finalText;
      return;
    }
    this.frame++;
    this.frameRequest = requestAnimationFrame(this.update);
  };
};

document.addEventListener('DOMContentLoaded', () => {

  // 1. Sticky Header Scroll Effect & Subpage Logic
  const header = document.querySelector('.header');
  const isIndexPage = document.querySelector('.hero') !== null;
  // Pages whose top section is already dark (e.g. careers.html's black hero)
  // opt out of light-nav via body class, so the header text starts white
  // instead of dark-on-dark.
  const hasDarkTop = document.body.classList.contains('page-dark-header');

  if (isIndexPage) {
    // Home page: header (and footer) are solid black from the start, see body.page-home in CSS
    document.body.classList.add('page-home');
  } else if (!hasDarkTop) {
    // Subpages: transparent header with dark text over the page content until scrolled
    header.classList.add('light-nav');
  }

  const handleHeaderStyle = () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderStyle);
  handleHeaderStyle(); // Initial check

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Close mobile menu when nav link clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }

  // 2b. Header Mega Menus (Company, and the Pharma/Environment/Industrial
  // vertical panels) - letter-scramble reveal of each panel's static labels
  // on hover, plus the nested "hover a technology -> reveal its Products" panel.
  document.querySelectorAll('.nav-item-dropdown').forEach(item => {
    const scramblers = Array.from(item.querySelectorAll(':scope > .company-panel .scramble-text, :scope > .vertical-panel .scramble-text'))
      .map(el => new window.TextScramble(el));
    item.addEventListener('mouseenter', () => {
      scramblers.forEach(s => s.run());
    });

    item.querySelectorAll('.tech-item-has-products').forEach(techItem => {
      const productsCol = item.querySelector('.vertical-products-col');
      if (!productsCol) return;
      const productScramblers = Array.from(productsCol.querySelectorAll('.scramble-text')).map(el => new window.TextScramble(el));
      techItem.addEventListener('mouseenter', () => {
        productsCol.classList.add('visible');
        productScramblers.forEach(s => s.run());
      });
      techItem.addEventListener('mouseleave', () => {
        productsCol.classList.remove('visible');
      });
    });
  });

  // 3. Featured Slider (Landing Page - Full Width)
  const track = document.getElementById('slider-track');
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');
  
  if (track && prevBtn && nextBtn) {
    const slides = Array.from(track.children);
    let currentIndex = 0;
    let autoSlideTimer;

    const updateSlider = (index) => {
      // Bounds checks
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentIndex = index;

      // Translate track
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update active classes for zoom effect
      slides.forEach((slide, idx) => {
        if (idx === currentIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    };

    const startAutoSlide = () => {
      stopAutoSlide();
      autoSlideTimer = setInterval(() => {
        updateSlider(currentIndex + 1);
      }, 7000); // Auto slide every 7 seconds
    };

    const stopAutoSlide = () => {
      if (autoSlideTimer) clearInterval(autoSlideTimer);
    };

    prevBtn.addEventListener('click', () => {
      stopAutoSlide();
      updateSlider(currentIndex - 1);
      startAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
      stopAutoSlide();
      updateSlider(currentIndex + 1);
      startAutoSlide();
    });

    // Initialize slider state and auto slide
    updateSlider(0);
    startAutoSlide();
  }

  // 4. Typewriter Animation (Intersection Observer triggered, looping type-and-erase)
  const typingTarget = document.getElementById('typing-target');
  const typingTextContent = "Our platform discovers biological intelligence from nature and converts it into programmable products through AI and synthetic biology.";
  let hasTyped = false;

  if (typingTarget) {
    const typeWriter = (text, index) => {
      if (index <= text.length) {
        typingTarget.textContent = text.substring(0, index);
        setTimeout(() => typeWriter(text, index + 1), 35); // Typing speed (35ms per char)
      } else {
        // Pauses 2.5 seconds on completion, then triggers erasing
        setTimeout(() => eraseText(text, text.length), 2500);
      }
    };

    const eraseText = (text, index) => {
      if (index >= 0) {
        typingTarget.textContent = text.substring(0, index);
        setTimeout(() => eraseText(text, index - 1), 15); // Erasing speed (15ms per char)
      } else {
        // Pauses 1 second on erase completion, then re-types
        setTimeout(() => typeWriter(text, 0), 1000);
      }
    };

    const typingObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasTyped) {
          hasTyped = true;
          typeWriter(typingTextContent, 0);
          typingObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    typingObserver.observe(document.querySelector('.typing-section'));
  }

  // 5. Fade-in on Scroll using Intersection Observer
  const scrollElements = document.querySelectorAll('.animate-on-scroll');
  if (scrollElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target); // Unobserve after appearing once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    scrollElements.forEach(el => observer.observe(el));
  }

  // 6. Interactive SVG Knowledge Graph (Technology Page)
  const nodes = document.querySelectorAll('.graph-node');
  const infoTitle = document.getElementById('graph-info-title');
  const infoText = document.getElementById('graph-info-text');

  // Node descriptions database
  const nodeDatabase = {
    species: {
      title: "Layer 1: Species Discovery Nodes",
      text: "Secured through global biodiversity access networks (e.g., wild farms in Madagascar). Hosts environmental traits, phenotypic adaptations, local ecologies, and evolutionary lineage codes.",
      highlight: ['conn-1', 'conn-2']
    },
    gene: {
      title: "Layer 2: Genomic Library Assets",
      text: "The digital DNA registry storing codon-optimized plasmids, regulatory promoters, transcription factors, and homology-based sequences harvested from specialized organisms.",
      highlight: ['conn-1', 'conn-3']
    },
    habitat: {
      title: "Layer 1: Ecological Adaptation Indexes",
      text: "Databases mapping extreme temperature resilience, pH adaptability, toxic defenses, and circadian cycles of target organisms in their original wild habitats.",
      highlight: ['conn-2', 'conn-4']
    },
    protein: {
      title: "Layer 2: Structural Proteomic Library",
      text: "Predicts folding coordinates (via structure estimators), binding dock dynamics, enzyme substrate targets, and thermal stability variables.",
      highlight: ['conn-3', 'conn-5']
    },
    pathway: {
      title: "Layer 2: biosynthetic Pathway Circuit Design",
      text: "Combines functional enzyme sequences from multiple host species to engineer optimized metabolic pipelines producing targeted complex metabolites.",
      highlight: ['conn-4', 'conn-6']
    },
    phenotype: {
      title: "Layer 3: Target Programmable Products",
      text: "Physical validation outcomes: self-sustaining bioluminescent foliage (VITRAYA), structural organic colors, metal-binding catalysts, and biological therapeutics.",
      highlight: ['conn-5', 'conn-6']
    }
  };

  if (nodes.length > 0 && infoTitle && infoText) {
    nodes.forEach(node => {
      node.addEventListener('mouseenter', () => {
        const nodeType = node.getAttribute('data-node');
        const data = nodeDatabase[nodeType];
        
        if (data) {
          // Update text description
          infoTitle.textContent = data.title;
          infoText.textContent = data.text;
          
          // Accent coloring
          if (nodeType === 'gene' || nodeType === 'protein') {
            infoTitle.style.color = 'var(--accent-blue)';
          } else {
            infoTitle.style.color = 'var(--accent-green)';
          }

          // Reset all connections
          document.querySelectorAll('.graph-connection').forEach(conn => {
            conn.classList.remove('active', 'active-blue');
          });

          // Highlight connected lines
          data.highlight.forEach(connId => {
            const conn = document.getElementById(connId);
            if (conn) {
              if (nodeType === 'gene' || nodeType === 'protein') {
                conn.classList.add('active-blue');
              } else {
                conn.classList.add('active');
              }
            }
          });
        }
      });

      node.addEventListener('mouseleave', () => {
        document.querySelectorAll('.graph-connection').forEach(conn => {
          conn.classList.remove('active', 'active-blue');
        });
      });
    });
  }

  // 7. Team Modal Popup Handlers
  window.openTeamModal = (name, role, imgSrc, desc, linkedinLink) => {
    const modal = document.getElementById('team-modal');
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');
    const modalRole = document.getElementById('modal-role');
    const modalDesc = document.getElementById('modal-desc');
    const modalLinkedin = document.getElementById('modal-linkedin');

    if (modal && modalImg && modalName && modalRole && modalDesc && modalLinkedin) {
      modalImg.src = imgSrc;
      modalImg.alt = name + " Photo";
      modalName.textContent = name;
      modalRole.textContent = role;
      modalDesc.textContent = desc;

      if (linkedinLink) {
        modalLinkedin.href = linkedinLink;
        modalLinkedin.style.display = 'inline-flex';
      } else {
        modalLinkedin.style.display = 'none';
      }

      modal.style.display = 'flex';
      setTimeout(() => {
        modal.classList.add('open');
      }, 10);
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeTeamModal = (event) => {
    const modal = document.getElementById('team-modal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
    }
  };

});
