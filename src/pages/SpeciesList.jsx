import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SPECIES_DATA } from '../data/speciesData';
import './SpeciesList.css';

const IUCN_COLOR = {
  EW: '#5C2D91',
  CR: '#D7191C',
  EN: '#F17C20',
  VU: '#FECC02',
  NT: '#A4C96A',
  LC: '#4CAF50',
};

const CATEGORY_FILTERS = ['All', 'Amphibian', 'Reptile', 'Others'];
const IUCN_FILTERS = ['All', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC'];

export default function SpeciesList() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [iucnFilter, setIucnFilter] = useState('All');

  const displayed = useMemo(() => {
    return SPECIES_DATA.filter((s) => {
      const matchCategory =
        categoryFilter === 'All' || s.category === categoryFilter.toLowerCase();
      const matchIucn =
        iucnFilter === 'All' || s.iucn === iucnFilter;
      const matchSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.scientific.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchIucn && matchSearch;
    });
  }, [search, categoryFilter, iucnFilter]);

  return (
    <div className="sl-page">
      {/* Header */}
      <div className="sl-header">
        <Link to="/conservation" className="sl-back">
          ← Conservation
        </Link>
        <h1 className="sl-title text-gradient">Species Database</h1>
        <p className="sl-subtitle">Comprehensive registry of breeding and conservation inventory</p>

        {/* Search + Dual Filtering Panel */}
        <div className="sl-controls">
          <div className="sl-search-wrap">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sl-search-icon">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              className="sl-search"
              type="text"
              placeholder="Search species by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="sl-filter-panel">
            {/* Category Filter */}
            <div className="sl-filter-row">
              <span className="sl-filter-label">TAXON:</span>
              <div className="sl-filters">
                {CATEGORY_FILTERS.map((f) => (
                  <button
                    key={f}
                    className={`sl-filter-btn${categoryFilter === f ? ' sl-filter-active' : ''}`}
                    onClick={() => setCategoryFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* IUCN Filter */}
            <div className="sl-filter-row">
              <span className="sl-filter-label">IUCN STATUS:</span>
              <div className="sl-filters">
                {IUCN_FILTERS.map((f) => (
                  <button
                    key={f}
                    className={`sl-filter-btn${iucnFilter === f ? ' sl-filter-active-iucn' : ''}`}
                    style={iucnFilter === f && f !== 'All' ? { 
                      backgroundColor: `${IUCN_COLOR[f]}25`, 
                      color: IUCN_COLOR[f],
                      borderColor: IUCN_COLOR[f] 
                    } : {}}
                    onClick={() => setIucnFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="sl-gallery container">
        {displayed.length === 0 ? (
          <div className="sl-empty">No species match the selected criteria.</div>
        ) : (
          displayed.map((s, i) => (
            <div key={i} className="sl-card">
              <div className="sl-card-img">
                {s.image === 'preparing' ? (
                  <div className="sl-card-img-placeholder">
                    <div className="sl-card-placeholder-text">Preparing</div>
                  </div>
                ) : (
                  <img src={s.image} alt={s.name} />
                )}
                <span
                  className="sl-iucn-badge"
                  style={{ background: IUCN_COLOR[s.iucn] || '#666' }}
                >
                  {s.iucn}
                </span>
              </div>
              <div className="sl-card-body">
                <h3 className="sl-card-name">{s.name}</h3>
                <p className="sl-card-sci">{s.scientific}</p>
                <span className="sl-card-cat">{s.category}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
