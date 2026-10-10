import { useState } from 'react';
import { publications } from '../data/siteData';
import { FileText, Code, ExternalLink, Filter } from 'lucide-react';

type FilterType = 'all' | 'conference' | 'journal' | 'preprint';

export default function Publications() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filtered = filter === 'all'
    ? publications
    : publications.filter((p) => p.type === filter);

  const statusColors: Record<string, string> = {
    published: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    accepted: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    preprint: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    'in-preparation': 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  };

  return (
    <section id="publications" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-navy-900 dark:text-navy-50 mb-4">
            Publications
          </h2>
          <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
            Peer-reviewed research contributions in computer vision and video anomaly detection.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <Filter size={16} className="text-navy-400" />
          {(['all', 'conference', 'journal', 'preprint'] as FilterType[]).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === type
                  ? 'bg-accent-500 text-white'
                  : 'bg-navy-100 dark:bg-navy-800 text-navy-600 dark:text-navy-300 hover:bg-navy-200 dark:hover:bg-navy-700'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Publication list */}
        <div className="space-y-4">
          {filtered.map((pub) => (
            <article key={pub.id} className="pub-card bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  {/* Title and status */}
                  <div className="flex flex-wrap items-start gap-2 mb-2">
                    <h3 className="text-base font-semibold text-navy-900 dark:text-navy-100 leading-snug">
                      {pub.title}
                    </h3>
                    <span className={`tag ${statusColors[pub.status]}`}>
                      {pub.status}
                    </span>
                  </div>

                  {/* Authors */}
                  <p className="text-sm text-navy-600 dark:text-navy-400 mb-1">
                    {pub.authors.join(', ')}
                  </p>

                  {/* Venue and year */}
                  <p className="text-sm text-navy-500 dark:text-navy-500 mb-3">
                    <span className="font-medium">{pub.venue}</span> · {pub.year}
                  </p>

                  {/* Summary */}
                  <p className="text-sm text-navy-600 dark:text-navy-400 leading-relaxed mb-4">
                    {pub.summary}
                  </p>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {pub.paperUrl && (
                      <a
                        href={pub.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-accent-600 dark:text-accent-400 hover:underline"
                      >
                        <ExternalLink size={14} />
                        Paper
                      </a>
                    )}
                    {pub.pdfUrl && (
                      <a
                        href={pub.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-accent-600 dark:text-accent-400 hover:underline"
                      >
                        <FileText size={14} />
                        PDF
                      </a>
                    )}
                    {pub.codeUrl && (
                      <a
                        href={pub.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-accent-600 dark:text-accent-400 hover:underline"
                      >
                        <Code size={14} />
                        Code
                      </a>
                    )}
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-navy-500 dark:text-navy-400 hover:underline"
                      >
                        DOI: {pub.doi}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-navy-500 dark:text-navy-400 py-8">
            No publications found for this filter.
          </p>
        )}
      </div>
    </section>
  );
}
