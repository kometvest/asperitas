import glob
from bs4 import BeautifulSoup

html_files = glob.glob('*.html')

for filepath in html_files:
    with open(filepath, 'r') as f:
        html = f.read()

    soup = BeautifulSoup(html, 'html.parser')
    head = soup.find('head')
    
    if head:
        # Check if favicon already exists
        existing_favicon = head.find('link', rel='icon')
        if not existing_favicon:
            # Create new link tag
            favicon_tag = soup.new_tag('link', rel='icon', type='image/png', href='assets/logo-square-white.png')
            head.append(favicon_tag)
            
            with open(filepath, 'w') as f:
                f.write(str(soup))
                
print("Favicon added to all HTML files.")
