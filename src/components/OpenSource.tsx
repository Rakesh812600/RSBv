import { repositories } from '../data/siteData';
import { Github, Terminal, Database, AlertCircle, Heart } from 'lucide-react';

export default function OpenSource() {
  return (
    <section id="opensource" className="py-16 md:py-24 bg-navy-50/50 dark:bg-navy-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-navy-900 dark:text-navy-50 mb-4">
            Open-Source Contributions
          </h2>
          <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
            Public research code and tools to support reproducible computer vision research.
            Each repository includes installation instructions, dataset requirements, and
            reproducibility notes.
          </p>
        </div>

        <div className="space-y-6">
          {repositories.map((repo) => (
            <article key={repo.id} className="bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 dark:text-navy-100 mb-1">
                    {repo.name}
                  </h3>
                  <p className="text-sm text-navy-600 dark:text-navy-400">{repo.description}</p>
                </div>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-navy-100 dark:bg-navy-800 hover:bg-navy-200 dark:hover:bg-navy-700 rounded-lg text-sm font-medium text-navy-700 dark:text-navy-300 transition-colors flex-shrink-0"
                >
                  <Github size={14} />
                  Repository
                </a>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {repo.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-0.5 rounded text-xs font-medium bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400"
                  >
                    {topic}
                  </span>
                ))}
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-navy-100 dark:bg-navy-800 text-navy-600 dark:text-navy-400">
                  {repo.language}
                </span>
              </div>

              {/* Details grid */}
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="flex items-center gap-1.5 text-navy-700 dark:text-navy-300 font-medium mb-1">
                    <Terminal size={14} />
                    Installation
                  </div>
                  <pre className="text-xs text-navy-600 dark:text-navy-400 bg-navy-50 dark:bg-navy-800/50 rounded-lg p-3 overflow-x-auto">
                    {repo.installation}
                  </pre>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-navy-700 dark:text-navy-300 font-medium mb-1">
                    <Database size={14} />
                    Dataset Requirements
                  </div>
                  <p className="text-xs text-navy-600 dark:text-navy-400 leading-relaxed">
                    {repo.datasets}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-navy-700 dark:text-navy-300 font-medium mb-1">
                    <Terminal size={14} />
                    Usage
                  </div>
                  <pre className="text-xs text-navy-600 dark:text-navy-400 bg-navy-50 dark:bg-navy-800/50 rounded-lg p-3 overflow-x-auto">
                    {repo.usage}
                  </pre>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-navy-700 dark:text-navy-300 font-medium mb-1">
                    <AlertCircle size={14} />
                    Known Limitations
                  </div>
                  <p className="text-xs text-navy-600 dark:text-navy-400 leading-relaxed">
                    {repo.limitations}
                  </p>
                </div>
              </div>

              {/* Contributing */}
              <div className="mt-4 pt-4 border-t border-navy-100 dark:border-navy-800">
                <div className="flex items-center gap-1.5 text-navy-700 dark:text-navy-300 font-medium text-sm mb-1">
                  <Heart size={14} />
                  Contributing
                </div>
                <p className="text-xs text-navy-600 dark:text-navy-400 leading-relaxed">
                  {repo.contributing}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
