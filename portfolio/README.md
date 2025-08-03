# Lekhana A L - Portfolio

A modern, responsive portfolio website showcasing my projects and skills in Full-Stack Development, AI/ML, and Backend Engineering.

## 🚀 Live Demo

Visit my portfolio: [https://lekhanaal1.github.io/Portfolio](https://lekhanaal1.github.io/Portfolio)

## ✨ Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Projects**: Showcase of my diverse projects with detailed information
- **Smooth Animations**: Beautiful hover effects and transitions
- **SEO Optimized**: Built with best practices for search engine optimization

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Icons**: Heroicons
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles
│   └── assets/          # Images and static assets
├── public/              # Public assets
├── .github/workflows/   # GitHub Actions for deployment
└── package.json         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lekhanaal1/Portfolio.git
cd Portfolio/portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages.

#### Automatic Deployment (GitHub Actions)

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at: `https://lekhanaal1.github.io/Portfolio`

#### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Other Deployment Options

#### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

## 🔧 Configuration

### Customizing the Base Path

If your repository name is different, update the base path in `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Update this line
})
```

### Updating Project Information

Edit the project data in `src/App.tsx`:

```typescript
const projects = [
  {
    id: 'your-project',
    title: 'Your Project Name',
    role: 'Your Role',
    // ... other project details
  }
];
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- **Email**: lekhanaal@gmail.com
- **LinkedIn**: [lekhana-a-1-6161b722a](https://linkedin.com/in/lekhana-a-1-6161b722a)
- **GitHub**: [Lekhanaal1](https://github.com/Lekhanaal1)
- **Portfolio**: [g.dev/Lekhana](https://g.dev/Lekhana)

---

Built with ❤️ by Lekhana A L
