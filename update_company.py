import re

with open('company.html', 'r') as f:
    html = f.read()

# 1. Extract Careers and Press sections
careers_match = re.search(r'(<!-- Careers Section -->.*?</section>)', html, re.DOTALL)
press_match = re.search(r'(<!-- Press & Publications Section -->.*?</section>)', html, re.DOTALL)

careers_sec = careers_match.group(1)
press_sec = press_match.group(1)

# Remove them from html
html = html.replace(careers_sec, '')
html = html.replace(press_sec, '')

# Prepare new Press section with JS filter logic
new_press_sec = press_sec.replace(
    'Application Blueprints', 'Publication'
).replace(
    '<input type="text" placeholder="Search"', 
    '<input type="text" id="press-search" placeholder="Search"'
).replace(
    '<ul style="list-style: none;', 
    '<ul id="press-categories" style="list-style: none;'
).replace(
    '<input type="radio" name="press-cat" style=', 
    '<input type="radio" name="press-cat" value="All Resources" style='
).replace(
    '<input type="radio" name="press-cat" style=', 
    '<input type="radio" name="press-cat" value="Application Notes" style='
).replace(
    '<input type="radio" name="press-cat" style=', 
    '<input type="radio" name="press-cat" value="Tech Notes" style='
).replace(
    '<input type="radio" name="press-cat" style=', 
    '<input type="radio" name="press-cat" value="Publication" style='
).replace(
    '<input type="radio" name="press-cat" checked style=', 
    '<input type="radio" name="press-cat" value="Press" checked style='
).replace(
    '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">',
    '<div id="press-articles" style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">'
).replace(
    '<!-- Article 1 -->\n            <a href="https://www.dongascience.com/ko/news/64950"',
    '<!-- Article 1 -->\n            <a href="https://www.dongascience.com/ko/news/64950" class="press-article" data-category="Press"'
)

js_script = """
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById('press-search');
      const radios = document.querySelectorAll('input[name="press-cat"]');
      const articles = document.querySelectorAll('.press-article');

      function filterArticles() {
        const searchTerm = searchInput.value.toLowerCase();
        const checkedRadio = document.querySelector('input[name="press-cat"]:checked');
        const selectedCat = checkedRadio ? checkedRadio.value : 'All Resources';

        articles.forEach(article => {
          const title = article.querySelector('h3').innerText.toLowerCase();
          const category = article.getAttribute('data-category');

          const matchesSearch = title.includes(searchTerm);
          const matchesCat = (selectedCat === 'All Resources') || (category === selectedCat);

          if (matchesSearch && matchesCat) {
            article.style.display = 'block';
          } else {
            article.style.display = 'none';
          }
        });
      }

      if (searchInput) searchInput.addEventListener('input', filterArticles);
      radios.forEach(r => r.addEventListener('change', filterArticles));
      
      // Initial filter
      if (radios.length > 0) filterArticles();
    });
  </script>
</section>"""

new_press_sec = new_press_sec.replace('</section>', js_script)

# Insert back into html but swap order: Careers then Press
# We look for the closing tag of the section before them (which is Advisory section)
insert_target = '    </div>\n  </section>'

# The closing tag of Team section is exactly `    </div>\n  </section>`
# We will split and insert there.
parts = html.split(insert_target)

# parts[0] is up to Advisory. parts[1] is the rest (footer etc).
new_html = parts[0] + insert_target + '\n\n' + careers_sec + '\n\n' + new_press_sec + parts[1]

with open('company.html', 'w') as f:
    f.write(new_html)
