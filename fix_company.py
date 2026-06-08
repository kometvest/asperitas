import sys

def process():
    with open('company.html', 'r') as f:
        lines = f.readlines()
    
    # 1. Remove lines 54 to 255 (index is 53 to 255)
    # Actually let's just find the start and end of the duplicated hero section.
    # It starts with "  <!-- Hero Section (Video background with fallback image) -->"
    # and ends at "  <script src=\"js/main.js\"></script>\n</body>\n</html>" before "<!-- Subpage Hero Block (Palantir style"
    out_lines = []
    skip = False
    for i, line in enumerate(lines):
        if "<!-- Hero Section (Video background with fallback image) -->" in line:
            skip = True
        if skip and "<!-- Subpage Hero Block (Palantir style" in line:
            skip = False
        
        if skip:
            continue
            
        out_lines.append(line)
        
    lines = out_lines
    
    # 2. Delete duplicate ending:
    # 456: <script src="js/main.js"></script>
    # 457: </body>
    # 458: </html>
    # Then there is <!-- Team Member Detail Modal -->
    # Then <script src="js/main.js"></script> </body> </html> at the very end
    out_lines = []
    skip = False
    for line in lines:
        if line.strip() == "<script src=\"js/main.js\"></script>" and "Team Member Detail Modal" not in "".join(out_lines[-5:]):
            # Only skip the first occurrence
            if sum(1 for l in lines if l.strip() == "</html>") > 1:
                skip = True
        
        if skip:
            if "<!-- Team Member Detail Modal -->" in line:
                skip = False
            else:
                continue
                
        out_lines.append(line)
        
    lines = out_lines
    
    with open('company.html', 'w') as f:
        f.writelines(lines)

process()
