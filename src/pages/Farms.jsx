import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Globe, Info, Lock } from 'lucide-react';
import * as d3 from 'd3-geo';
import { feature } from 'topojson-client';
import './Farms.css';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const CONFIDENTIAL_LOCATIONS = [
  {
    id: 'st-martin',
    name: 'Antilles Ecological Research Station & Breeding Preserve',
    region: 'Saint Martin, Caribbean',
    coordinates: [-63.0548, 18.0708],
    scope: 'Insular reptile genetics & localized flora bio-banking',
    status: 'Classified / Proprietary (Research In Progress)',
    compliance: 'Nagoya Compliant & CITES Permitted'
  }
];

const FlatWorldMap = ({ hoverLoc, setHoverLoc }) => {
  const [geographies, setGeographies] = useState([]);

  useEffect(() => {
    fetch(geoUrl)
      .then(response => response.json())
      .then(data => {
        const countries = feature(data, data.objects.countries).features;
        setGeographies(countries);
      })
      .catch(err => console.error("Error loading map data:", err));
  }, []);

  // Equirectangular or Mercator projection matching the globe's aesthetic
  const projection = d3.geoMercator()
    .scale(145)
    .translate([480, 275]);

  const path = d3.geoPath().projection(projection);

  return (
    <div className="fm-map-wrapper">
      {geographies.length === 0 ? (
        <div className="fm-map-loading">Loading vector atlas data...</div>
      ) : (
        <svg viewBox="0 0 960 500" className="fm-map-svg">
          {/* Graticule grid */}
          <path d={path(d3.geoGraticule10())} fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.5" />
          
          {/* Land paths */}
          <g>
            {geographies.map((geo, i) => (
              <path
                key={`land-${i}`}
                d={path(geo)}
                className="fm-land-path"
              />
            ))}
          </g>

          {/* Coordinate Markers */}
          {CONFIDENTIAL_LOCATIONS.map(loc => {
            const projected = projection(loc.coordinates);
            if (!projected) return null;

            const isHovered = hoverLoc && hoverLoc.id === loc.id;

            return (
              <g key={loc.id} 
                 onMouseEnter={() => setHoverLoc(loc)}
                 onMouseLeave={() => setHoverLoc(null)}
                 style={{ cursor: 'pointer' }}
              >
                {/* Outer pulsing ring */}
                <circle
                  cx={projected[0]}
                  cy={projected[1]}
                  r="12"
                  className={`fm-map-pulse-ring${isHovered ? ' fm-ring-hover' : ''}`}
                />
                {/* Main dot */}
                <circle
                  cx={projected[0]}
                  cy={projected[1]}
                  r="6"
                  className="fm-map-dot"
                />
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
};

const Farms = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [hoverLoc, setHoverLoc] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fm-page">
      <div className="fm-hero-bg" />
      
      <div className="container fm-container">
        {/* Back navigation */}
        <button className="fm-back-btn" onClick={() => navigate('/conservation')}>
          <ArrowLeft size={16} />
          <span>Back to Conservation</span>
        </button>

        {/* Hero Header */}
        <header className="fm-header">
          <h1 className={`fm-title text-gradient${visible ? ' fm-visible' : ''}`}>
            Global In-Situ Network
          </h1>
          <p className={`fm-subtitle${visible ? ' fm-visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            Establishing regional research stations to study and propagate biodiversity.
          </p>
        </header>

        {/* CITES info banner */}
        <section className="fm-banner">
          <div className="fm-banner-icon">
            <Shield size={24} className="grad-green" />
          </div>
          <div className="fm-banner-text">
            <h3>Strict CITES & Nagoya Protocol Compliance</h3>
            <p>
              Asperitas operates under the highest standards of international biodiversity law. All research organisms, living materials, and genetic samples are imported with fully transparent permits, preserving global ecosystems while enabling advanced biotechnological discovery.
            </p>
          </div>
        </section>

        {/* In-Situ Preserve Scope Text */}
        <section className="fm-scope-section">
          <div className="fm-scope-content">
            <div className="fm-scope-label">OPERATIONAL PHILOSOPHY</div>
            <h2 className="fm-scope-heading">In-Situ Laboratories &amp; Species Restoration</h2>
            <p className="fm-scope-desc">
              We establish local farms and advanced research laboratories directly within the native habitats of under-researched organisms to study ecology in its natural environment. These on-site centers carry out ecological profiling, provide international specimen leasing for non-invasive academic study, and actively propagate endangered species under rigorous husbandry protocols, breeding and releasing them back into the wild to restore native ecosystems.
            </p>
          </div>
        </section>

        {/* Flat World Map Section */}
        <section className="fm-map-section">
          <div className="fm-map-header">
            <h2 className="fm-map-heading">Interactive Facilities Map</h2>
            <p className="fm-map-sub">Explore active coordinate markers to inspect localized scopes and compliance statuses.</p>
          </div>
          
          <div className="fm-map-layout">
            {/* Map Column */}
            <div className="fm-map-col">
              <FlatWorldMap hoverLoc={hoverLoc} setHoverLoc={setHoverLoc} />
            </div>
            
            {/* Tooltip Details Column */}
            <div className="fm-details-col">
              <div className="fm-details-card">
                {hoverLoc ? (
                  <div className="fm-details-content fm-details-active">
                    <div className="fm-details-header">
                      <div className="fm-details-badge">CONFIDENTIAL FACILITY</div>
                      <span className="fm-details-glow-dot" />
                    </div>
                    <h3 className="fm-details-title">{hoverLoc.name}</h3>
                    <div className="fm-details-meta">
                      <span className="fm-details-meta-item">
                        <Globe size={13} style={{ marginRight: '6px' }} />
                        {hoverLoc.region}
                      </span>
                    </div>
                    <div className="fm-details-divider" />
                    <div className="fm-details-info">
                      <div className="fm-details-info-label">Active Research Scope:</div>
                      <div className="fm-details-info-val">{hoverLoc.scope}</div>
                    </div>
                    <div className="fm-details-info">
                      <div className="fm-details-info-label">Operational Status:</div>
                      <div className="fm-details-info-val" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>
                        {hoverLoc.status}
                      </div>
                    </div>
                    <div className="fm-details-info">
                      <div className="fm-details-info-label">Regulatory Compliance:</div>
                      <div className="fm-details-info-val" style={{ color: 'var(--accent-green)', fontWeight: '600' }}>
                        {hoverLoc.compliance}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="fm-details-content fm-details-idle">
                    <div className="fm-details-lock-icon">
                      <Lock size={32} />
                    </div>
                    <h3>Proprietary Network</h3>
                    <p>
                      Hover over map markers to view regional research station details. Operation locations are strictly protected under Nagoya Protocol genetic data compliance.
                    </p>
                    <div className="fm-details-footnote">
                      <Info size={12} style={{ marginRight: '6px' }} />
                      Specific coordinate data restricted.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Farms;
