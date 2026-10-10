import { profile, timeline } from '../data/siteData';
import { GraduationCap, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-navy-50/50 dark:bg-navy-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-navy-900 dark:text-navy-50 mb-4">
            About & Research Journey
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div>
            <div className="bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-navy-900 dark:text-navy-100 mb-4">
                Academic Biography
              </h3>
              <div className="text-sm text-navy-600 dark:text-navy-400 leading-relaxed whitespace-pre-line">
                {profile.bio}
              </div>
            </div>

            {/* Research goals */}
            <div className="bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target size={18} className="text-accent-500" />
                <h3 className="text-lg font-semibold text-navy-900 dark:text-navy-100">
                  Research Goals
                </h3>
              </div>
              <ul className="space-y-3">
                {profile.researchGoals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-navy-600 dark:text-navy-400">
                    <span className="w-5 h-5 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center flex-shrink-0 text-xs font-medium text-accent-600 dark:text-accent-400 mt-0.5">
                      {i + 1}
                    </span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div className="bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={18} className="text-accent-500" />
                <h3 className="text-lg font-semibold text-navy-900 dark:text-navy-100">
                  Timeline
                </h3>
              </div>
              <div className="space-y-6">
                {timeline.map((entry, i) => (
                  <div key={i} className="timeline-item pb-4">
                    <p className="text-xs font-medium text-accent-600 dark:text-accent-400 mb-1">
                      {entry.year}
                    </p>
                    <h4 className="text-sm font-semibold text-navy-900 dark:text-navy-100 mb-0.5">
                      {entry.title}
                    </h4>
                    <p className="text-xs text-navy-500 dark:text-navy-400 mb-1">
                      {entry.institution}
                    </p>
                    <p className="text-xs text-navy-600 dark:text-navy-400 leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Note about placeholders */}
            <div className="mt-4 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800">
              <p className="text-xs text-amber-700 dark:text-amber-400">
                <strong>Note:</strong> This timeline contains placeholder entries. Update the{' '}
                <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">src/data/siteData.ts</code>{' '}
                file with actual academic history, achievements, and milestones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
