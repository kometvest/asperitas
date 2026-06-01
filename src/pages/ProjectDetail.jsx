import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Beaker, Shield, Cpu, Zap, Activity, Binary, Layers } from "lucide-react";
import "./ProjectDetail.css";

const PROJECT_DATA = {
  vitraya: {
    title: "Project VITRAYA™ — Autoluminescent Plant",
    subtitle: "World-First Multicolor Autoluminescent plant Using Synthetic Ciruits.",
    tagline: "Tunable multicolor bioluminescent platform using machine-learning optimized fungal pathways.",
    image: "/glow.jpeg",
    category: "Synthetic Biology",
    accent: "var(--accent-violet)",
    icon: <Zap size={24} />,
    stats: [
      { label: "Spectral Tuning", value: "450nm / 520nm / BRET" },
      { label: "Luminance Increase", value: "55-Fold Higher Flux" },
      { label: "Physiological Impact", value: "100% Growth Parity" },
      { label: "Species Portability", value: "10+ Diverse Species" }
    ],
    overview: "Autonomous plant bioluminescence has been limited by single color outputs and narrow species applicability. Here, we present VITRAYA, a universal synthetic platform enabling substrate-free, multispectral light emission across the entire plant kingdom, from primitive bryophytes to complex angiosperms. By coupling a machine-learning-optimized fungal pathway with endogenous plant pigments via Bioluminescence Resonance Energy Transfer (BRET), we achieved tunable color outputs—including blue, green, and purple—without exogenous chemical supply. Our standardized architecture ensures functional portability across evolutionary boundaries, complemented by a circadian-gated metabolic valve that maximizes nighttime brightness while preserving plant fitness. These results transform plants into programmable living photonic systems, offering a scalable framework for sustainable design and real-time environmental biosensing.",
    sections: [
      {
        title: "Key Achievements & Technical Milestones",
        content: "Our synthetic platform has successfully realized several critical benchmarks in plant bioluminescence: (1) Achieved up to 55-fold higher photon flux compared to first-generation fungal bioluminescent systems. (2) Successfully engineered stable Blue (450nm), Green (520nm), and Purple-like (BRET-shifted) emissions. (3) Maintained 100% growth rate parity with wild-type plants through circadian-gated expression. (4) Validated functional portability in over 10+ diverse species, ranging from Physcomitrium to Gerbera hybrida."
      },
      {
        title: "2-Year Longitudinal Safety & Fitness Parity",
        content: "Over a rigorous two-year continuous cultivation study, we evaluated the long-term physiological impact of the synthetic bioluminescence pathway. The results showed that the introduction of the circadian-gated metabolic valve successfully eliminated any metabolic drain. The engineered plants exhibited 100% parity with wild-type specimens in growth rates, morphology, reproductive viability, and seed germination, with absolutely no detrimental effects on plant fitness or long-term vigor."
      }
    ],
    technicalSpecs: [
      { name: "Luciferase Engine", value: "Machine-Learning Optimized Fungal Pathway" },
      { name: "Bioluminescence Resonance", value: "BRET-Enabled Multispectral Shift" },
      { name: "Spectral Peaks", value: "Blue (450nm), Green (520nm), Purple" },
      { name: "Photon Flux Enhancement", value: "55-Fold vs. 1st-Gen Systems" },
      { name: "Circadian Control", value: "Circadian-Gated Metabolic Valve" },
      { name: "Species Validation", value: "10+ Diverse Species (Physcomitrium to Gerbera)" },
      { name: "Long-term Fitness", value: "100% Growth Parity (2-Year Continuous Study)" },
      { name: "Regulatory Compliance", value: "Still working." }
    ],
    gallery: [
      "/glow.jpeg",
      "/flower.jpeg",
      "/1.jpeg",
      "/2.jpeg"
    ]
  },
  "bio-patch": {
    title: "Alginate-Based Eco-Friendly Hydrogel Patch Development",
    subtitle: "Biodegradable skin patch platform",
    tagline: "Replacing synthetic single-use plastics through E. coli alginate upcycling.",
    image: "/biopatch.png",
    category: "Therapeutics",
    accent: "var(--accent-rose)",
    icon: <Activity size={24} />,
    stats: [
      { label: "Moisture Retention", value: "50-Fold Increase" },
      { label: "Biodegradability", value: "100% Soil & Water" },
      { label: "Active Compounds", value: "Natural Antioxidants" }
    ],
    overview: "Every year, over 60 billion plastic sheet masks and medical patches accumulate as microplastics in global ecosystems. To address this crisis, Asperitas developed the EcoPatch: a 100% biodegradable, active hydrogel patch utilizing sodium alginate extracted from marine algae and upcycled invasive water hyacinth (Eichhornia crassipes). By employing a synthetic biology-driven microbial system expressing E. coli alginate lyase, we replace harsh chemical extractions with an eco-friendly biological cycle, protecting both human health and ecological systems.",
    sections: [
      {
        title: "Enzymatic Extraction & Upcycling",
        content: "Traditional chemical extraction of alginate uses strong acids and bases, degrading polymer backbones and generating toxic waste. We developed a clean biological cycle using E. coli engineered to express highly active alginate lyases. Simultaneously, upcycling invasive water hyacinth from freshwater bodies restores local biomes and sources natural active compounds for the patch matrix."
      },
      {
        title: "Cross-Linking & Active Release",
        content: "Sodium alginate cross-links with calcium ions to form a stable hydrogel via the 'egg-box' model. We precisely control cross-linking density to optimize elasticity, skin adhesion, and moisture retention. Active flavonoids extracted from water hyacinth are encapsulated in this matrix, creating a temperature-responsive release system that mitigates dermal oxidative stress."
      },
      {
        title: "DBTL Validation & Biodegradability",
        content: "Using the standard Design-Build-Test-Learn cycle, we optimize enzyme kinetics, hydrogel tensile strength, and swelling properties. Biological safety is validated on human keratinocytes (HaCaT) and CaCo2 cell lines. Nanoparticle Tracking Analysis (NTA) confirms complete biodegradability within days, releasing zero microplastics into aquatic or soil environments."
      }
    ],
    technicalSpecs: [
      { name: "Alginate Extraction Method", value: "Enzymatic Lyase Cycle (E. coli)" },
      { name: "Core Structural Material", value: "Calcium Alginate Cross-linked Matrix" },
      { name: "Bioactive Ingredient", value: "Eichhornia crassipes Flavonoids & Phenolics" },
      { name: "Cytocompatibility Safety", value: "Verified via HaCaT & CaCo2 Cell Lines" },
      { name: "Moisture Swelling Ratio", value: ">50-Fold Retention vs. Synthetic Sheets" },
      { name: "Biodegradability Index", value: "100% Soil & Water Dissolution (Days)" },
      { name: "Regulatory Status", value: "Compliant with Nagoya Protocol & CITES" }
    ],
    gallery: [
      "/biopatch.png"
    ]
  },
  epigenome: {
    title: "Enhancing the precision of targeted epigenetic engineering through a degron system",
    subtitle: "Pepper RNA-tDeg Conditional Epigenome Editor Platform",
    tagline: "Achieving transient, zero-off-target gene regulation via target-restricted protein stabilization.",
    image: "/epigenome.png",
    category: "Gene Editing",
    accent: "var(--accent-cyan)",
    icon: <Cpu size={24} />,
    stats: [
      { label: "Target Specificity", value: "High Precision" },
      { label: "Off-Target Events", value: "Minimally Detected" },
      { label: "Stabilization Mechanism", value: "Pepper RNA-tDeg Tag" },
      { label: "Joint Partner", value: "KAIST Lab" }
    ],
    overview: "CRISPR/dCas9-based epigenome editors regulate gene expression by recruiting chromatin-modifying enzymes (e.g., p300, KRAB) to specific loci. However, continuous editor expression increases the risk of off-target epigenetic modifications. In collaboration with KAIST, we developed a conditional epigenome editor platform incorporating the Pepper RNA-tDeg (tagged Degron) system. The editor is stabilized exclusively when bound to its specific Pepper-sgRNA hairpin at the target site; otherwise, it is rapidly degraded by cellular proteasomes, reducing background accumulation and minimizing off-target chromatin edits.",
    sections: [
      {
        title: "Degron-Mediated Conditional Control",
        content: "We fused chromatin-modifying effectors to a codon-optimized tDeg tag. The editor is stabilized only when bound to the sgRNA featuring a Pepper RNA hairpin structure at the target site. In the absence of target recognition, the exposed degron recruits proteasomes to degrade the editor within 30 minutes, preventing off-target locus remodeling and non-specific accumulation."
      },
      {
        title: "High-Throughput Safety & Validation",
        content: "Using transient and stable transfections in human keratinocytes (HaCaT) and reporter cell lines, we validated conditional transcriptional activity via qRT-PCR. Localized histone modification deposition is mapped by ChIP-qPCR. Transcriptome-wide safety is confirmed via RNA-seq, demonstrating minimal off-target effects and perfect compatibility with cellular viability."
      }
    ],
    technicalSpecs: [
      { name: "Targeting Mechanism", value: "dCas9 (Streptococcus pyogenes)" },
      { name: "Degron Stabilization", value: "tDeg Tag (Pepper RNA-dependent)" },
      { name: "Epigenetic Effectors", value: "p300 (Activation) / KRAB & DNMT3A (Silencing)" },
      { name: "Locus Specificity", value: "ChIP-qPCR & Western Blot Confirmed" },
      { name: "Off-Target Reduction", value: "Transcriptome-Wide RNA-Seq Validated" },
      { name: "Cell Lines Tested", value: "HaCaT, CaCo2, & HEK293T Cells" },
      { name: "Collaborating Partner", value: "KAIST Synthetic Biology Laboratory" }
    ],
    gallery: [
      "/epigenome.png"
    ]
  },
  "dart-frog": {
    title: "Poison Dart Frog Therapeutics Project",
    subtitle: "Biodiversity-derived neurotoxin research for non-addictive therapeutics",
    tagline: "Unlocking next-generation analgesics, anesthetics, and antimicrobial peptides from amphibian alkaloids.",
    image: "/frog.png",
    category: "Therapeutics",
    accent: "var(--accent-cyan)",
    icon: <Beaker size={24} />,
    stats: [
      { label: "Analgesic Efficacy", value: "200x Morphine" },
      { label: "Alkaloids Cataloged", value: "800+ Compounds" },
      { label: "Target Specificity", value: "Opioid-Free nAChR" },
      { label: "Therapeutic Pipeline", value: "4 Key Programs" }
    ],
    overview: "Amphibian skin secretions contain highly potent alkaloids evolved over millions of years as defensive neurotoxins. Asperitas is studying these bioactive compounds to develop next-generation non-addictive therapeutics. By modeling and chemically modifying poison dart frog toxins at the molecular level, we developed safe clinical candidates for chronic pain management, local anesthesia, antiarrhythmic agents, and broad-spectrum antimicrobial peptides. By leveraging biomimetic organic synthesis, we successfully scale up production without capturing wild specimens, establishing a secure and sustainable pharmaceutical supply chain.",
    sections: [
      {
        title: "DendroAlleviate: Non-Addictive Analgesics",
        content: "The epibatidine alkaloid found in the Phantasmal poison frog exhibits an analgesic potency 200 times greater than morphine, but its high toxicity historically prevented clinical use. We designed 'ASP-101', a novel derivative that targets nicotinic acetylcholine receptors (nAChR) to selectively block chronic pain signals. By modifying its molecular structure, ASP-101 bypasses blood pressure-altering pathways and opioid addiction receptors, offering a safe, non-addictive chronic pain management alternative."
      },
      {
        title: "IonLock: Sodium Channel Local Anesthetics",
        content: "The golden poison frog's batrachotoxin forces cellular sodium ion channels to remain open, causing fatal muscle paralysis. We modeled the molecular binding interface between this toxin and human Na+ channels in nerves and muscles. Project IonLock exploits this mechanism to develop ultra-long-lasting local anesthetics and antiarrhythmics that reversibly block sodium channels for a precise duration, significantly extending post-operative pain relief windows safely."
      },
      {
        title: "SynTox: Digital Toxin Library & Biomimetic Synthesis",
        content: "Because dart frog toxins are diet-dependent and accumulated from wild insects, capturing wild frogs is both unsustainable and logistically prohibitive. Project SynTox created the 'Asperitas Toxin Library', a digital database cataloging over 800 dart frog alkaloids. We developed biomimetic total organic synthesis pathways to manufacture active pharmaceutical ingredients in-vitro, bypassing animal harvesting and accelerating drug screening workflows."
      },
      {
        title: "DermAmphib: Antibacterial Peptides against Superbugs",
        content: "Poison dart frogs protect their skin from pathogenic invasion in damp, bacteria-rich habitats using specialized antimicrobial peptides (AMPs) and symbiotic microbial secretions. Project DermAmphib isolates these active molecules. By physically disrupting cellular membranes rather than targeting specific proteins, these broad-spectrum agents target superbugs like MRSA with near-zero likelihood of drug-resistance development, offering vital solutions for pneumonia and sepsis."
      }
    ],
    technicalSpecs: [
      { name: "Lead Compound (Pain)", value: "ASP-101 Epibatidine Derivative" },
      { name: "Anesthetic Target", value: "Voltage-Gated Na+ Ion Channels" },
      { name: "Toxin Library Scope", value: "800+ Digitalized Amphibian Alkaloids" },
      { name: "Synthesis Pathway", value: "Biomimetic Total Organic Synthesis" },
      { name: "Antimicrobial Target", value: "Drug-Resistant MRSA and Sepsis Strains" },
      { name: "Cytocompatibility", value: "Proven Safe on Nerve & Muscle Cells" },
      { name: "Compliance", value: "Strict Nagoya Protocol & CITES Compliant" }
    ],
    gallery: [
      "/frog.png",
      "/epibatidine.png",
      "/batrachotoxin.png"
    ]
  },
  "lunar-soil": {
    title: "Plant the Moon — Lunar Regolith Cultivation",
    subtitle: "Engineered rhizosphere microbiomes for space farming and extreme environments",
    tagline: "Unlocking lunar crop growth through synthetic rhizobacteria consortia.",
    image: "/lunar.png",
    category: "Space Biology",
    accent: "var(--accent-green)",
    icon: <Layers size={24} />,
    stats: [
      { label: "Biomass Increase", value: ">150% Target" },
      { label: "Soil Toxicity", value: "pH & Metal Shield" },
      { label: "Core Approach", value: "Microbiome Engineering" },
      { label: "Spin-Off Potential", value: "Desert Agriculture" }
    ],
    overview: "The Asperitas 'Plant the Moon' initiative utilizes synthetic biology to enable sustainable crop cultivation in resource-depleted lunar regolith. Lunar soil lacks essential organic nutrients, possesses extremely high alkalinity, and presents heavy metal toxicity. Rather than directly modifying the crops, we engineer synthetic rhizosphere microbial consortia (rhizobacteria) that physically interact with plant roots. These smart microflora unlock insoluble nutrients, chelate toxic heavy metals, and mitigate root stress, establishing a highly scalable, chemical-free foundation for future space colonies and extreme terrestrial soils.",
    sections: [
      {
        title: "Smart Rhizosphere Microbiome Engineering",
        content: "We design synthetic metabolic pathways in native soil bacterial chassis (such as Pseudomonas and Bacillus species). By overexpressing organic acid secretion pathways and phytase enzymes, these engineered rhizobacteria convert insoluble phosphates bound within lunar regolith simulant into soluble forms that plants can readily absorb, satisfying critical nutrient requirements without heavy chemical fertilizer payloads."
      },
      {
        title: "Heavy Metal Chelation & Stress Mitigation",
        content: "Lunar regolith particles cause severe physical root damage and oxidative stress. We engineered genetic circuits in host microbes to express ACC deaminase, effectively reducing excess ethylene stress hormones in plants. Concurrently, the engineered bacteria synthesize specialized biopolymers that physically chelate and trap heavy metals, preventing their systemic absorption by crops."
      },
      {
        title: "Astroagriculture & Terrestrial Spin-offs",
        content: "By validating this engineered bio-fertilizer, we establish a robust database for planetary farming (astroagriculture) using lightweight microbial capsules rather than massive soil shipments. Crucially, this platform has direct spin-off applications on Earth, enabling high-yield agriculture in highly saline coastal lands, heavily polluted soils, and desertified regions suffering from global warming."
      }
    ],
    technicalSpecs: [
      { name: "Chassis Species", value: "Pseudomonas putida, Bacillus subtilis" },
      { name: "Enzymatic Enhancements", value: "Phytase, ACC Deaminase, Organic Acids" },
      { name: "Target Biomass Gain", value: ">150% compared to untreated simulant" },
      { name: "Stress Reduction", value: "Ethylene Suppression & Heavy Metal Chelation" },
      { name: "Application Scope", value: "Lunar Habitats & Saline/Desert Terrestrial Soils" }
    ],
    gallery: [
      "/lunar.png"
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECT_DATA[id];

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="pd-error container">
        <h2>Project Not Found</h2>
        <p>The requested research project does not exist.</p>
        <Link to="/research" className="pd-back-link">
          <ArrowLeft size={18} /> Back to Research
        </Link>
      </div>
    );
  }

  return (
    <div className="pd-page" style={{ "--project-accent": project.accent }}>
      
      {/* ── HEADER NAVIGATION ── */}
      <div className="pd-nav-wrap">
        <div className="container">
          <button onClick={() => navigate("/research")} className="pd-back-btn">
            <ArrowLeft size={18} /> Back to Research
          </button>
        </div>
      </div>

      {/* ── HERO HEADER ── */}
      <header className="pd-hero section">
        <div className="container pd-hero-container">
          <div className="pd-hero-content">
            <div className="pd-category-wrap">
              <span className="pd-icon-badge">{project.icon}</span>
              <span className="pd-category">{project.category}</span>
            </div>
            <h1 className="pd-title">{project.title}</h1>
            <p className="pd-subtitle">{project.subtitle}</p>
            <p className="pd-tagline">{project.tagline}</p>
          </div>
          <div className="pd-hero-visual">
            <img src={project.image} alt={project.title} />
            <div className="pd-hero-visual-glow" />
          </div>
        </div>
      </header>

      {/* ── STATS GRID ── */}
      <section className="pd-stats-section">
        <div className="container">
          <div className="pd-stats-grid">
            {project.stats.map((stat, i) => (
              <div key={i} className="pd-stat-card">
                <span className="pd-stat-label">{stat.label}</span>
                <span className="pd-stat-value">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH SUMMARY ── */}
      <section className="section pd-body-section">
        <div className="container pd-body-grid">
          
          {/* Left Column: Research Content */}
          <div className="pd-left-col">
            <div className="pd-overview-card">
              <h3>Overview</h3>
              <p>{project.overview}</p>
            </div>

            {project.sections.map((section, idx) => (
              <div key={idx} className="pd-section-card">
                <h4>{section.title}</h4>
                <p>{section.content}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Technical Specs & Collations */}
          <div className="pd-right-col">
            <div className="pd-specs-card">
              <h3>Technical Specifications</h3>
              <div className="pd-specs-table">
                {project.technicalSpecs.map((spec, i) => (
                  <div key={i} className="pd-specs-row">
                    <span className="pd-spec-name">{spec.name}</span>
                    <span className="pd-spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="pd-contact-cta">
              <h4>Collaborate with Asperitas</h4>
              <p>Interested in our Research Platforms or Licensing Opportunities?</p>
              <Link to="/contact" className="pd-contact-btn">
                Inquire Bio-Licensing
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section className="section pd-gallery-section">
        <div className="container">
          <h3 className="pd-gallery-heading">Visual Evidence & Data Collections</h3>
          <div className="pd-gallery-grid">
            {project.gallery.map((img, i) => (
              <div key={i} className="pd-gallery-item">
                <img src={img} alt={`Scientific Visualization ${i + 1}`} />
                <div className="pd-gallery-item-glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;
