import { researchInterests } from '../data/siteData';
import { Lightbulb, Target, ArrowRight } from 'lucide-react';

export default function ResearchInterests() {
  return (
    <section id="research" className="py-16 md:py-24 bg-navy-50/50 dark:bg-navy-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-navy-900 dark:text-navy-50 mb-4">
            Research Interests
          </h2>
          <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
            My research addresses fundamental challenges in video understanding — from detecting
            anomalous events under weak supervision to building interpretable and generalizable
            AI systems for security applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchInterests.map((interest) => (
            <article key={interest.id} className="research-card p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={16} className="text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="text-base font-semibold text-navy-900 dark:text-navy-100 leading-snug">
                  {interest.title}
                </h3>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="flex items-center gap-1.5 text-navy-500 dark:text-navy-400 mb-1">
                    <span className="font-medium">Research Question</span>
                  </div>
                  <p className="text-navy-700 dark:text-navy-300 italic">"{interest.question}"</p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-navy-500 dark:text-navy-400 mb-1">
                    <Target size={12} />
                    <span className="font-medium">Core Challenge</span>
                  </div>
                  <p className="text-navy-600 dark:text-navy-400 leading-relaxed">{interest.challenge}</p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-accent-600 dark:text-accent-400 mb-1">
                    <ArrowRight size={12} />
                    <span className="font-medium">Current Direction</span>
                  </div>
                  <p className="text-navy-600 dark:text-navy-400 leading-relaxed">{interest.direction}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
