import re

# Read current index.html for header and footer
with open("index.html", "r") as f:
    idx_html = f.read()

header = idx_html.split("<!-- Hero Section -->")[0]
footer = "  <!-- Footer -->\n" + idx_html.split("<!-- Footer -->")[1]

# Make sure Company has active nav link
header = header.replace('<a href="index.html" class="nav-link active">Home</a>', '<a href="index.html" class="nav-link">Home</a>')
header = header.replace('<a href="company.html" class="nav-link">Company</a>', '<a href="company.html" class="nav-link active">Company</a>')

# Get current overview from the broken company.html
with open("company.html", "r") as f:
    broken = f.read()

overview = re.search(r'(<!-- Subpage Hero Block.*?</section>)', broken, re.DOTALL).group(1)

# Team Section
team = """
  <!-- Team Section -->
  <section class="team-section section-padding" id="team">
    <div class="container">
      <h2 class="team-section-header">Leadership</h2>
      <div class="team-grid">
        <div class="team-card animate-on-scroll" onclick="openTeamModal('Minseo Kim', 'Founder & CEO', 'assets/minseo.jpeg', 'Senior at Korea Science Academy of KAIST, specializing in synthetic biology.', '')">
          <div class="team-avatar-wrapper"><img src="assets/minseo.jpeg" alt="Minseo Kim" class="team-avatar-img"></div>
          <div class="team-info"><h3 class="team-name">Minseo Kim</h3><p class="team-role">Founder & CEO</p><span class="team-bio-link">Read Bio &rarr;</span></div>
        </div>
        <div class="team-card animate-on-scroll" onclick="openTeamModal('Minjae Kim', 'Co-Founder', 'assets/minjae.jpeg', 'Senior at Seoul Science High School specializing in biology & engineering. President of student community. Korea National Representative, 37th International Biology Olympiad.', '')">
          <div class="team-avatar-wrapper"><img src="assets/minjae.jpeg" alt="Minjae Kim" class="team-avatar-img"></div>
          <div class="team-info"><h3 class="team-name">Minjae Kim</h3><p class="team-role">Co-Founder</p><span class="team-bio-link">Read Bio &rarr;</span></div>
        </div>
        <div class="team-card animate-on-scroll" onclick="openTeamModal('Beomseok Oh', 'AI Lead', 'assets/beomseok.png', 'Freshman at Harbin Institute of Technology specializing in AI, and Electrical & Information Engineering.', '')">
          <div class="team-avatar-wrapper"><img src="assets/beomseok.png" alt="Beomseok Oh" class="team-avatar-img"></div>
          <div class="team-info"><h3 class="team-name">Beomseok Oh</h3><p class="team-role">AI Lead</p><span class="team-bio-link">Read Bio &rarr;</span></div>
        </div>
        <div class="team-card animate-on-scroll" onclick="openTeamModal('Eunseong Lee', 'Lead', 'assets/eunseong.jpeg', 'Senior at Korea Science Academy of KAIST specializing in Numer...', '')">
          <div class="team-avatar-wrapper"><img src="assets/eunseong.jpeg" alt="Eunseong Lee" class="team-avatar-img"></div>
          <div class="team-info"><h3 class="team-name">Eunseong Lee</h3><p class="team-role">Lead</p><span class="team-bio-link">Read Bio &rarr;</span></div>
        </div>
        <div class="team-card animate-on-scroll" onclick="openTeamModal('Juwon Ham', 'Faculty', 'assets/juwon.png', '', '')">
          <div class="team-avatar-wrapper"><img src="assets/juwon.png" alt="Juwon Ham" class="team-avatar-img"></div>
          <div class="team-info"><h3 class="team-name">Juwon Ham</h3><p class="team-role">Faculty</p><span class="team-bio-link">Read Bio &rarr;</span></div>
        </div>
        <div class="team-card animate-on-scroll" onclick="openTeamModal('Junsoo Bae', 'Faculty', 'assets/junsoo.jpeg', 'Senior at Gyeonggi Science High School for the Gifted specializing in biology. Korea National Representative, 37th International Biology Olympiad.', '')">
          <div class="team-avatar-wrapper"><img src="assets/junsoo.jpeg" alt="Junsoo Bae" class="team-avatar-img"></div>
          <div class="team-info"><h3 class="team-name">Junsoo Bae</h3><p class="team-role">Faculty</p><span class="team-bio-link">Read Bio &rarr;</span></div>
        </div>
      </div>
      <h2 class="team-section-header">Advisory</h2>
      <div class="advisory-list animate-on-scroll" style="min-height: 40px;"></div>
    </div>
  </section>
"""

# Extract Careers
careers = re.search(r'(<!-- Careers Section -->.*?</section>)', broken, re.DOTALL).group(1)

# Extract Press
press = re.search(r'(<!-- Press & Publications Section -->.*?</section>)', broken, re.DOTALL).group(1)

# Modal (from index footer script doesn't have it, but it was in recovered_html)
# Let's read recovered_html.txt for modal
with open("recovered_html.txt", "r") as f:
    recovered = f.read()

modal = re.search(r'(<!-- Team Member Detail Modal -->.*?</div>\n  </div>)', recovered, re.DOTALL).group(1)

new_html = header + "\n" + overview + "\n" + team + "\n" + careers + "\n" + press + "\n" + footer + "\n" + modal + "\n\n  <script src=\"js/main.js\"></script>\n</body>\n</html>"

with open("company.html", "w") as f:
    f.write(new_html)

