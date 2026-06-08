import os
import glob
from bs4 import BeautifulSoup

header_template = """
  <header class="header">
    <div class="container header-container">
      <a href="index.html" class="logo-link">
        <img src="assets/logo-horizontal-white.png" alt="Asperitas Logo" class="logo-img"/>
      </a>
      
      <button class="mobile-nav-toggle" aria-label="Toggle navigation" id="mobile-toggle">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-menu" id="nav-menu">
        <li class="nav-item-dropdown">
          <a href="company.html" class="nav-link {c_active}">Company</a>
          <ul class="dropdown-menu">
            <li><a href="company.html#overview" class="dropdown-link">Overview</a></li>
            <li><a href="company.html#team" class="dropdown-link">Team</a></li>
            <li><a href="company.html#careers" class="dropdown-link">Careers</a></li>
            <li><a href="company.html#press" class="dropdown-link">Press &amp; Pub.</a></li>
          </ul>
        </li>
        <li class="nav-item-dropdown">
          <a href="technology.html" class="nav-link {t_active}">Technology</a>
          <ul class="dropdown-menu">
            <li><a href="technology.html" class="dropdown-link">Overview</a></li>
            <li><a href="technology-biodiversity.html" class="dropdown-link">Biodiversity</a></li>
            <li><a href="technology-ai.html" class="dropdown-link">Synthetic Bio AI</a></li>
            <li><a href="technology-synthetic-biology.html" class="dropdown-link">Synthetic Biology</a></li>
          </ul>
        </li>
        <li class="nav-item-dropdown">
          <a href="store.html" class="nav-link {s_active}">Store</a>
        </li>
        <li style="display: flex; align-items: center; margin-left: 20px;">
          <a href="mailto:business@asperitas.bio" class="btn-secondary" style="padding: 8px 16px; font-size: 13px;">Contact</a>
        </li>
      </ul>
    </div>
  </header>
"""

footer_template = """
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <img src="assets/logo-horizontal-white.png" alt="Asperitas Logo" class="footer-logo"/>
          <div class="footer-socials">
            <a href="https://www.linkedin.com/company/asperitasbio" target="_blank" rel="noopener noreferrer" class="social-btn">
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/asperitasbio" target="_blank" rel="noopener noreferrer" class="social-btn">
              <span>Instagram</span>
            </a>
            <a href="store.html" class="social-btn">
              <span>Store</span>
            </a>
          </div>
        </div>
        <div></div>
        <div class="footer-links-grid">
          <div class="footer-links-col">
            <span class="footer-col-title">Company</span>
            <ul>
              <li><a href="company.html#overview">Overview</a></li>
              <li><a href="company.html#team">Team</a></li>
              <li><a href="company.html#careers">Careers</a></li>
              <li><a href="company.html#press">Press &amp; Publication</a></li>
            </ul>
          </div>
          <div class="footer-links-col">
            <span class="footer-col-title">Technology</span>
            <ul>
              <li><a href="technology-biodiversity.html">Biodiversity</a></li>
              <li><a href="technology-ai.html">Synthetic Bio AI</a></li>
              <li><a href="technology-synthetic-biology.html">Synthetic Biology</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Asperitas Inc. All rights reserved.</p>
        <div class="footer-legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
"""

html_files = glob.glob('*.html')

for filepath in html_files:
    with open(filepath, 'r') as f:
        html = f.read()

    soup = BeautifulSoup(html, 'html.parser')

    # Find the header
    header = soup.find('header', class_='header')
    if header:
        c_active = 'active' if 'company.html' in filepath else ''
        t_active = 'active' if 'technology' in filepath or 'research' in filepath else ''
        s_active = 'active' if 'store.html' in filepath else ''
        
        new_header_html = header_template.replace('{c_active}', c_active).replace('{t_active}', t_active).replace('{s_active}', s_active)
        new_header_soup = BeautifulSoup(new_header_html, 'html.parser').header
        header.replace_with(new_header_soup)

    # Find the footer
    footer = soup.find('footer', class_='footer')
    if footer:
        new_footer_soup = BeautifulSoup(footer_template, 'html.parser').footer
        footer.replace_with(new_footer_soup)

    # Write back without automatically adding html/body if it wasn't a full document
    # Also formatter='html' to prevent weird escapes, but we can just use str(soup)
    with open(filepath, 'w') as f:
        # Use str(soup) to keep the original structure as much as possible
        f.write(str(soup))

