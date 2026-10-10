import { profile } from '../data/siteData';
import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-navy-100 dark:border-navy-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-navy-500 dark:text-navy-400">
            <p>© {new Date().getFullYear()} {profile.name}. {profile.institution}.</p>
            <p className="mt-1 text-xs">
              Built with React, TypeScript & Tailwind CSS. Hosted on GitHub Pages.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-400 hover:text-navy-600 dark:hover:text-navy-300 transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-navy-400 hover:text-navy-600 dark:hover:text-navy-300 transition-colors"
              aria-label="Send email"
            >
              <Mail size={18} />
            </a>
            <a
              href={profile.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-navy-400 hover:text-navy-600 dark:hover:text-navy-300 transition-colors"
            >
              Google Scholar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
