# Jae Fisher - Portfolio

A modern, responsive portfolio website built with React, Vite, and Framer Motion. Showcasing my skills, projects, and services as a software developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Fast Performance**: Built with Vite for lightning-fast builds and HMR
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper focus states and ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS-in-JS with inline styles
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Smooth scrolling navigation
│   │   ├── Hero.jsx          # Hero section with intro
│   │   ├── About.jsx         # About section with skills
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── Services.jsx      # Services offered
│   │   └── Contact.jsx       # Contact form and info
│   ├── styles/
│   │   └── globals.css       # Global styles and CSS variables
│   ├── App.jsx               # Main app component
│   └── main.jsx              # App entry point
├── public/
├── index.html                # HTML template
├── vercel.json              # Vercel deployment config
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

The `vercel.json` file includes optimized settings for:

- Build commands
- Output directory
- Security headers
- Asset caching

## 📱 Sections

### Hero Section

- Bold introduction with name and title
- Call-to-action buttons
- Social media links
- Smooth scroll indicator

### About Section

- Personal introduction
- Skills and technologies
- Professional background

### Projects Section

- Featured projects (STGMA Apparel, Bennu)
- Project descriptions and technologies
- Live demo and code links

### Services Section

- Web development
- Mobile development
- Full-stack solutions
- Database design
- Performance optimization
- Security implementation

### Contact Section

- Professional contact form
- Contact information
- Social media links

## 🎨 Customization

### Colors

Update the CSS variables in `src/styles/globals.css`:

```css
:root {
  --primary-color: #222;
  --secondary-color: #444;
  --accent-color: #007acc;
  /* ... other variables */
}
```

### Content

- Update personal information in each component
- Modify project details in `Projects.jsx`
- Adjust services in `Services.jsx`
- Update contact information in `Contact.jsx`

### Styling

- All components use inline styles for easy customization
- Global styles are in `src/styles/globals.css`
- Responsive design uses CSS Grid and Flexbox

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with Vite
- **Loading Speed**: Fast initial load with lazy loading
- **SEO**: Proper meta tags and semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: solarisrex@pm.me
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: github.com/JaellyBean

---

Built with ❤️ by Jae Fisher
