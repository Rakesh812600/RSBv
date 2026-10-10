import { collaborationOpportunities } from '../data/siteData';
import { Link2, MessageCircle, Bug, FilePlus, Users, ArrowRight } from 'lucide-react';

export default function Collaboration() {
  const statusColors: Record<string, string> = {
    open: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    'in-progress': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    completed: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
    planned: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  };

  return (
    <section id="collaboration" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-navy-900 dark:text-navy-50 mb-4">
            Let's Build More Reliable Video Understanding Systems Together
          </h2>
          <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
            I welcome meaningful collaboration with researchers working on video anomaly detection,
            vision-language models, weakly supervised learning, multimodal reasoning, and reproducible
            computer vision research. Whether you're an international professor, a PhD student exploring
            related problems, or an industry researcher — let's connect.
          </p>
        </div>

        {/* Collaboration areas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[
            { icon: <Users size={18} />, title: 'Video Anomaly Detection', desc: 'Weakly supervised and open-world detection methods' },
            { icon: <MessageCircle size={18} />, title: 'Vision-Language Models', desc: 'Temporal reasoning and semantic alignment' },
            { icon: <FilePlus size={18} />, title: 'Weak Supervision', desc: 'Learning from limited or noisy annotations' },
            { icon: <Link2 size={18} />, title: 'Multimodal Learning', desc: 'Semantic-visual alignment and fusion' },
            { icon: <Bug size={18} />, title: 'Explainable AI', desc: 'Trustworthy and interpretable surveillance systems' },
            { icon: <ArrowRight size={18} />, title: 'Reproducible Research', desc: 'Open-source tools and standardized benchmarks' },
          ].map((area, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-navy-50 dark:bg-navy-900/50 border border-navy-100 dark:border-navy-800">
              <div className="w-8 h-8 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center flex-shrink-0 text-accent-600 dark:text-accent-400">
                {area.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-navy-800 dark:text-navy-200">{area.title}</p>
                <p className="text-xs text-navy-500 dark:text-navy-400 mt-0.5">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Current opportunities */}
        <h3 className="text-xl font-semibold text-navy-900 dark:text-navy-100 mb-6">
          Current Collaboration Opportunities
        </h3>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {collaborationOpportunities.map((opp) => (
            <div key={opp.id} className="research-card p-5">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h4 className="text-sm font-semibold text-navy-900 dark:text-navy-100">
                  {opp.title}
                </h4>
                <span className={`tag flex-shrink-0 ${statusColors[opp.status]}`}>
                  {opp.status}
                </span>
              </div>
              <p className="text-sm text-navy-600 dark:text-navy-400 mb-2">
                <span className="font-medium text-navy-700 dark:text-navy-300">Objective:</span>{' '}
                {opp.objective}
              </p>
              <p className="text-sm text-navy-600 dark:text-navy-400 mb-3">
                <span className="font-medium text-navy-700 dark:text-navy-300">Expected contribution:</span>{' '}
                {opp.expectedContribution}
              </p>
              <p className="text-xs text-navy-500 dark:text-navy-500">
                📬 {opp.contactMethod}
              </p>
            </div>
          ))}
        </div>

        {/* How to collaborate */}
        <div className="bg-accent-50 dark:bg-accent-900/10 border border-accent-200 dark:border-accent-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-navy-900 dark:text-navy-100 mb-4">
            How to Collaborate
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-navy-700 dark:text-navy-300">
            <div className="flex items-start gap-2">
              <span className="text-accent-500 font-bold">1.</span>
              <p><strong>Propose an idea:</strong> Send an email with a brief description of your research interest and how it aligns with my work.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent-500 font-bold">2.</span>
              <p><strong>Report a reproducibility issue:</strong> Open a GitHub issue with details about the experiment, environment, and observed behavior.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent-500 font-bold">3.</span>
              <p><strong>Submit an improvement:</strong> Fork a repository, make changes, and submit a pull request with a clear description.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent-500 font-bold">4.</span>
              <p><strong>Start a discussion:</strong> Reach out via email or GitHub Discussions for research questions, benchmark proposals, or joint paper ideas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
