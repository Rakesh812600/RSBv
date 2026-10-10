import { useState } from 'react';
import { researchNotes } from '../data/siteData';
import { Calendar, Tag, Search } from 'lucide-react';

export default function ResearchNotesSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(researchNotes.flatMap((n) => n.tags)));

  const filtered = researchNotes.filter((note) => {
    const matchesSearch =
      searchQuery === '' ||
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || note.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section id="notes" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-navy-900 dark:text-navy-50 mb-4">
            Research Notes
          </h2>
          <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
            Technical notes on reproducing methods, evaluation pitfalls, and lessons learned
            from video anomaly detection research.
          </p>
        </div>

        {/* Search and filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-sm text-navy-800 dark:text-navy-200 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-accent-500 text-white'
                    : 'bg-navy-100 dark:bg-navy-800 text-navy-600 dark:text-navy-400 hover:bg-navy-200 dark:hover:bg-navy-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Notes list */}
        <div className="space-y-4">
          {filtered.map((note) => (
            <article key={note.id} className="bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 rounded-xl p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-base font-semibold text-navy-900 dark:text-navy-100">
                  {note.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-navy-500 dark:text-navy-400 flex-shrink-0">
                  <Calendar size={12} />
                  {new Date(note.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
              </div>

              <p className="text-sm text-navy-600 dark:text-navy-400 leading-relaxed mb-3">
                {note.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-navy-100 dark:bg-navy-800 text-navy-600 dark:text-navy-400"
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Full content (expandable) */}
              <details className="mt-4">
                <summary className="text-sm font-medium text-accent-600 dark:text-accent-400 cursor-pointer hover:underline">
                  Read full note
                </summary>
                <div className="mt-3 text-sm text-navy-600 dark:text-navy-400 leading-relaxed whitespace-pre-line">
                  {note.content}
                </div>
              </details>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-navy-500 dark:text-navy-400 py-8">
            No notes found matching your search.
          </p>
        )}
      </div>
    </section>
  );
}
