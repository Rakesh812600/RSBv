import { FileText, Github, FolderOpen, Mail, Download } from 'lucide-react';
import { profile } from '../data/siteData';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Main content */}
          <div className="md:col-span-2">
            <p className="text-sm font-medium text-accent-500 uppercase tracking-wider mb-3">
              {profile.title} · {profile.institution}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-navy-900 dark:text-navy-50 leading-tight mb-6">
              Researching How AI Understands Temporal Events and Detects Anomalies in Videos
            </h1>
            <p className="text-lg text-navy-600 dark:text-navy-300 leading-relaxed mb-8 max-w-2xl">
              I work on computer vision and video understanding, with a focus on weakly supervised
              anomaly detection, vision-language models, and temporal representation learning. My
              research explores how AI systems can identify unusual events, learn meaningful temporal
              representations, and improve the reliability and interpretability of video understanding.
            </p>

            {/* CTA Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#publications"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-white rounded-lg text-sm font-medium transition-colors"
              >
                <FileText size={16} />
                View Publications
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-100 dark:bg-navy-800 hover:bg-navy-200 dark:hover:bg-navy-700 text-navy-800 dark:text-navy-200 rounded-lg text-sm font-medium transition-colors"
              >
                <FolderOpen size={16} />
                Explore Research
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-navy-200 dark:border-navy-700 hover:border-navy-300 dark:hover:border-navy-600 text-navy-700 dark:text-navy-300 rounded-lg text-sm font-medium transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="#collaboration"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent-200 dark:border-accent-800 hover:bg-accent-50 dark:hover:bg-accent-900/20 text-accent-600 dark:text-accent-400 rounded-lg text-sm font-medium transition-colors"
              >
                <Mail size={16} />
                Open to Collaboration
              </a>
              <a
                href={profile.cvUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-navy-200 dark:border-navy-700 hover:border-navy-300 dark:hover:border-navy-600 text-navy-700 dark:text-navy-300 rounded-lg text-sm font-medium transition-colors"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>

          {/* Side visual */}
          <div className="hidden md:block">
            <div className="hero-pattern rounded-2xl p-8 border border-navy-100 dark:border-navy-800 bg-white dark:bg-navy-900">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                    <span className="text-accent-600 dark:text-accent-400 text-lg">🎥</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-800 dark:text-navy-200">Video Anomaly Detection</p>
                    <p className="text-xs text-navy-500 dark:text-navy-400">Weakly supervised learning</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                    <span className="text-accent-600 dark:text-accent-400 text-lg">🧠</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-800 dark:text-navy-200">Vision-Language Models</p>
                    <p className="text-xs text-navy-500 dark:text-navy-400">CLIP & temporal reasoning</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                    <span className="text-accent-600 dark:text-accent-400 text-lg">⏱️</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-800 dark:text-navy-200">Temporal Modeling</p>
                    <p className="text-xs text-navy-500 dark:text-navy-400">Long-range dependencies</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                    <span className="text-accent-600 dark:text-accent-400 text-lg">🔍</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-800 dark:text-navy-200">Explainable AI</p>
                    <p className="text-xs text-navy-500 dark:text-navy-400">Interpretable surveillance</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                    <span className="text-accent-600 dark:text-accent-400 text-lg">🌐</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-800 dark:text-navy-200">Open Research</p>
                    <p className="text-xs text-navy-500 dark:text-navy-400">Reproducible & collaborative</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
