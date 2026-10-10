import { useState } from 'react';
import { projects } from '../data/siteData';
import { ChevronDown, ChevronUp, ExternalLink, Code, Play, Tag } from 'lucide-react';

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const statusColors: Record<string, string> = {
    published: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    ongoing: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    preliminary: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    planned: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-navy-50/50 dark:bg-navy-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-navy-900 dark:text-navy-50 mb-4">
            Research Projects
          </h2>
          <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
            Detailed descriptions of my research projects, including problem statements, methods,
            contributions, and current status. Each project represents a distinct research direction
            within my broader focus on video understanding.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <article
                key={project.id}
                className="bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 rounded-xl overflow-hidden transition-shadow hover:shadow-md"
              >
                {/* Header */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4"
                  aria-expanded={isExpanded}
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-navy-900 dark:text-navy-100">
                        {project.title}
                      </h3>
                      <span className={`tag ${statusColors[project.status]}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-navy-500 dark:text-navy-400">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-navy-100 dark:bg-navy-800 text-navy-600 dark:text-navy-400"
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-navy-400">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-navy-100 dark:border-navy-800 pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-navy-800 dark:text-navy-200 mb-1">
                            Problem Statement
                          </h4>
                          <p className="text-sm text-navy-600 dark:text-navy-400 leading-relaxed">
                            {project.problemStatement}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-navy-800 dark:text-navy-200 mb-1">
                            Motivation & Research Gap
                          </h4>
                          <p className="text-sm text-navy-600 dark:text-navy-400 leading-relaxed">
                            {project.motivation}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-navy-800 dark:text-navy-200 mb-1">
                            Proposed Method
                          </h4>
                          <p className="text-sm text-navy-600 dark:text-navy-400 leading-relaxed">
                            {project.method}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-navy-800 dark:text-navy-200 mb-2">
                            Technical Contributions
                          </h4>
                          <ul className="space-y-1.5">
                            {project.contributions.map((c, i) => (
                              <li key={i} className="text-sm text-navy-600 dark:text-navy-400 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 flex-shrink-0" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-navy-800 dark:text-navy-200 mb-1">
                            Datasets
                          </h4>
                          <p className="text-sm text-navy-600 dark:text-navy-400">
                            {project.datasets.join(', ')}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-navy-800 dark:text-navy-200 mb-1">
                            Results
                          </h4>
                          <p className="text-sm text-navy-600 dark:text-navy-400 leading-relaxed">
                            {project.results}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-navy-800 dark:text-navy-200 mb-1">
                            Limitations
                          </h4>
                          <p className="text-sm text-navy-600 dark:text-navy-400 leading-relaxed">
                            {project.limitations}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-navy-800 dark:text-navy-200 mb-1">
                            Future Work
                          </h4>
                          <p className="text-sm text-navy-600 dark:text-navy-400 leading-relaxed">
                            {project.futureWork}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-navy-100 dark:border-navy-800">
                      {project.paperUrl && (
                        <a
                          href={project.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-accent-600 dark:text-accent-400 hover:underline"
                        >
                          <ExternalLink size={14} />
                          Paper
                        </a>
                      )}
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-accent-600 dark:text-accent-400 hover:underline"
                        >
                          <Code size={14} />
                          Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-accent-600 dark:text-accent-400 hover:underline"
                        >
                          <Play size={14} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
