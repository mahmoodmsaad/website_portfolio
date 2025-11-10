# M Saad Mahmood - Professional Portfolio

A modern, responsive portfolio website for computational materials scientist showcasing research, publications, and software development projects.

## About

This portfolio website highlights the work of M Saad Mahmood, a PhD candidate specializing in computational chemistry and materials science at the University of Trieste. The site showcases:

- **Research Areas**: Computational chemistry, photovoltaic applications, and drug delivery systems
- **Publications**: Peer-reviewed research papers in sensing applications and novel materials
- **Software Development**: Python applications for chemical analysis and computational workflows
- **Professional Timeline**: Academic and research positions
- **Skills**: Computational methods, programming, characterization techniques

## Features

### 🎨 Professional Design
- Responsive layout that works on desktop, tablet, and mobile
- Dark/Light mode toggle with persistent preference
- Modern UI with smooth animations and transitions
- Professional color scheme optimized for readability

### 📚 Research Showcase
- Three main research areas with detailed descriptions
- Publications section with dynamic loading
- Software development pipeline showcasing completed and ongoing projects
- Interactive timeline of academic and professional milestones

### 🌓 Dark/Light Mode
- Toggle between themes
- Preference saved automatically in browser

### 📱 Responsive Design
- Optimized for all device sizes
- Mobile-friendly navigation
- Touch-friendly interface

## Sections

1. **Home**: Hero section with professional title and tagline
2. **About**: Professional summary with contact links and key statistics
3. **Research**: Three main research focus areas
4. **Publications**: List of published and submitted papers
5. **Software Development**: Python applications and projects with status indicators
6. **Skills**: Technical competencies organized by category
7. **Timeline**: Chronological academic and professional journey

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Custom Properties (CSS Variables) for theming
- **Storage**: LocalStorage for theme and publication data
- **Icons**: Unicode emojis for accessibility

## Quick Start

### Local Development
1. Clone or download the repository
2. Open `index.html` in any modern web browser
3. No build process or server required!

### Customization

#### Update Contact Information
Edit `index.html` lines 48-52:
```html
<a href="mailto:mahmoodmsaad9@gmail.com" class="contact-link">📧 Email</a>
<a href="https://www.linkedin.com/in/m-saad-mahmood-2288b2210" target="_blank" class="contact-link">💼 LinkedIn</a>
<a href="https://github.com/mahmoodmsaad" target="_blank" class="contact-link">💻 GitHub</a>
```

#### Modify Research Areas
Edit the research cards in the Research section (around line 75-95)

#### Add/Update Publications
Publications are pre-loaded in `script.js` (lines 80-105)

#### Update Software Projects
Edit the development timeline in index.html (around lines 130-180)

## Deployment Options

### GitHub Pages (Recommended - Free)
1. Create a GitHub repository
2. Upload all files (`index.html`, `styles.css`, `script.js`)
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Netlify (Free)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Site goes live instantly
4. Get custom subdomain: `yourname.netlify.app`

### Vercel (Free)
1. Sign up at [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

## Data Storage

All dynamic data is stored in browser localStorage:
- Theme preference (dark/light mode)
- Publications list
- Research card edits (if modified)

**Note:** Data is browser-specific. To backup, export localStorage or keep original files.

## Browser Compatibility

- Chrome/Edge 90+ (recommended)
- Firefox 88+
- Safari 14+
- Opera 76+

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # All styling and themes
├── script.js           # Interactive functionality
├── README.md           # This file
└── extract_cv.py       # Utility script for CV processing
```

## License

Personal/academic use. All rights reserved © 2025 M Saad Mahmood

## Contact

- **Email**: mahmoodmsaad9@gmail.com
- **LinkedIn**: [m-saad-mahmood-2288b2210](https://www.linkedin.com/in/m-saad-mahmood-2288b2210)
- **GitHub**: [mahmoodmsaad](https://github.com/mahmoodmsaad)
- **Location**: San Sebastián, Spain

---

Built with ❤️ using vanilla JavaScript, modern CSS, and semantic HTML


## Features

### 🎨 Editable Visualizations
- Click "Edit Data" on any chart to modify values directly
- 4 interactive charts: Time Distribution, Weekly Progress, Research Milestones, Publications Timeline
- Data persists in browser localStorage

### 📊 Daily Activity Tracker
- Log research activities with date, category, hours, and notes
- Categories: Research, Writing, Experiments, Reading, Meetings, Teaching
- Automatic time distribution chart updates
- Delete activities as needed

### 📚 Publications & Projects
- Add publications with title, authors, venue, year, and links
- Automatic counter updates
- Clean, organized display

### 🎯 Research Areas
- 3 editable research cards
- Click any card to edit content directly
- Changes save automatically

### 🌓 Dark/Light Mode
- Toggle between themes
- Preference saved automatically

### 📱 Responsive Design
- Works on desktop, tablet, and mobile devices

## How to Use

### Local Development
1. Open `index.html` in any modern web browser
2. No server required - runs entirely in browser

### Deployment Options

#### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files (index.html, styles.css, script.js)
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repo-name`

#### Netlify (Free)
1. Sign up at netlify.com
2. Drag and drop your folder
3. Site goes live instantly
4. Get custom domain: `yourname.netlify.app`

#### Vercel (Free)
1. Sign up at vercel.com
2. Import your project
3. Deploy with one click

#### AWS S3 + CloudFront
1. Upload files to S3 bucket
2. Enable static website hosting
3. Configure CloudFront for HTTPS
4. Use Route 53 for custom domain

## Customization

### Update Personal Info
Edit `index.html`:
- Line 23: Your name in navbar
- Line 29: Hero title
- Line 30: Hero subtitle
- Line 43: Your name and research area

### Add More Activity Categories
Edit `script.js` line 50-56 to add categories

### Change Colors
Edit `styles.css` root variables (lines 1-10)

### Add More Charts
1. Add canvas in `index.html`
2. Initialize chart in `script.js` initCharts()
3. Add to chartData object

## Data Storage

All data is stored in browser localStorage:
- Activities
- Publications
- Chart data
- Research card content
- Theme preference

**Note:** Data is browser-specific. Export/backup feature can be added if needed.

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Tips

1. **Backup Data**: Use browser dev tools > Application > Local Storage to export data
2. **Reset Data**: Clear localStorage to start fresh
3. **Print CV**: Use browser print function for PDF export
4. **Mobile**: All features work on mobile browsers

## Future Enhancements

- Export data to JSON/CSV
- Import data from files
- More chart types
- Collaboration features
- Cloud sync
- PDF generation

## License

Free to use and modify for personal/academic purposes.

---

Built with vanilla JavaScript, Chart.js, and modern CSS. No frameworks required!
