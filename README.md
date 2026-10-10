# Rakesh Kumar — Research Portfolio

A professional academic research portfolio website for Rakesh Kumar, PhD Researcher at AcSIR, CSIR-CEERI, Pilani, India.

## Overview

This website presents research in:
- Weakly Supervised Video Anomaly Detection (WS-VAD)
- Vision-Language Models (CLIP and related VLMs)
- Temporal Representation Learning
- Multimodal Learning and Semantic-Visual Alignment
- Explainable AI for Video Surveillance

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast builds
- **Tailwind CSS v4** for styling
- **Lucide React** for icons
- Deployed via **GitHub Pages**

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck
```

## Project Structure

```
src/
├── App.tsx                    # Main application component
├── main.tsx                   # Entry point
├── index.css                  # Global styles and Tailwind config
├── data/
│   └── siteData.ts            # Central data file (publications, projects, profile)
└── components/
    ├── Navigation.tsx         # Responsive nav with dark mode toggle
    ├── Hero.tsx               # Hero section with research overview
    ├── ResearchInterests.tsx  # Research interest cards
    ├── Publications.tsx       # Filterable publication list
    ├── Projects.tsx           # Expandable project cards
    ├── Collaboration.tsx      # Collaboration opportunities and guide
    ├── OpenSource.tsx         # Repository details
    ├── ResearchNotes.tsx      # Searchable research notes
    ├── About.tsx              # Bio, goals, and timeline
    ├── Contact.tsx            # Contact information and links
    └── Footer.tsx             # Site footer
```

## Updating Content

All website content is managed through `src/data/siteData.ts`. Edit this file to:

- Add/update publications
- Modify project descriptions
- Update profile information and links
- Add research notes
- Modify collaboration opportunities
- Update the academic timeline

### Important Notes

- **Do not fabricate** publication titles, DOIs, citation counts, or benchmark results
- Clearly distinguish between published results, ongoing work, and preliminary findings
- Update placeholder URLs (GitHub, Scholar, ORCID, LinkedIn, CV) with actual links
- Update the email address with your actual professional email

## GitHub Pages Deployment

### Manual Deployment

```bash
npm run build
# Upload the contents of dist/ to gh-pages branch
```

### Automated Deployment (GitHub Actions)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages on every push to the `main` branch.

To enable:
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch

## Configuration

For GitHub Pages deployment, you may need to set the `base` path in `vite.config.js`:

```js
export default defineConfig({
  base: '/your-repo-name/',  // Uncomment and set for GitHub Pages
  plugins: [react(), tailwindcss()],
});
```

## Accessibility

- Semantic HTML throughout
- Keyboard navigation support
- Focus indicators for interactive elements
- Reduced motion support via `prefers-reduced-motion`
- ARIA labels on navigation and interactive elements
- Sufficient color contrast ratios

## License

Content © Rakesh Kumar. Code is available for reference.
