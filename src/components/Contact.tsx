import { profile } from '../data/siteData';
import { Mail, Github, BookOpen, UserCircle, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-navy-900 dark:text-navy-50 mb-4">
            Contact
          </h2>
          <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
            I'm always interested in hearing from researchers working on related problems.
            Feel free to reach out for collaboration, discussion, or questions about my work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 p-4 bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 rounded-xl hover:border-accent-200 dark:hover:border-accent-800 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center group-hover:bg-accent-200 dark:group-hover:bg-accent-900/50 transition-colors">
              <Mail size={18} className="text-accent-600 dark:text-accent-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-navy-800 dark:text-navy-200">Email</p>
              <p className="text-xs text-navy-500 dark:text-navy-400">{profile.email}</p>
            </div>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 rounded-xl hover:border-accent-200 dark:hover:border-accent-800 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center group-hover:bg-accent-200 dark:group-hover:bg-accent-900/50 transition-colors">
              <Github size={18} className="text-accent-600 dark:text-accent-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-navy-800 dark:text-navy-200">GitHub</p>
              <p className="text-xs text-navy-500 dark:text-navy-400">Research code & tools</p>
            </div>
          </a>

          <a
            href={profile.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 rounded-xl hover:border-accent-200 dark:hover:border-accent-800 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center group-hover:bg-accent-200 dark:group-hover:bg-accent-900/50 transition-colors">
              <BookOpen size={18} className="text-accent-600 dark:text-accent-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-navy-800 dark:text-navy-200">Google Scholar</p>
              <p className="text-xs text-navy-500 dark:text-navy-400">Publication profile</p>
            </div>
          </a>

          <a
            href={profile.orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 rounded-xl hover:border-accent-200 dark:hover:border-accent-800 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center group-hover:bg-accent-200 dark:group-hover:bg-accent-900/50 transition-colors">
              <UserCircle size={18} className="text-accent-600 dark:text-accent-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-navy-800 dark:text-navy-200">ORCID</p>
              <p className="text-xs text-navy-500 dark:text-navy-400">Researcher identifier</p>
            </div>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 rounded-xl hover:border-accent-200 dark:hover:border-accent-800 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center group-hover:bg-accent-200 dark:group-hover:bg-accent-900/50 transition-colors">
              <Linkedin size={18} className="text-accent-600 dark:text-accent-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-navy-800 dark:text-navy-200">LinkedIn</p>
              <p className="text-xs text-navy-500 dark:text-navy-400">Professional profile</p>
            </div>
          </a>
{profile.cvUrl && (

          <a
            href={profile.cvUrl}
            className="flex items-center gap-3 p-4 bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 rounded-xl hover:border-accent-200 dark:hover:border-accent-800 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center group-hover:bg-accent-200 dark:group-hover:bg-accent-900/50 transition-colors">
              <Download size={18} className="text-accent-600 dark:text-accent-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-navy-800 dark:text-navy-200">Download CV</p>
              <p className="text-xs text-navy-500 dark:text-navy-400">Full academic CV (PDF)</p>
            </div>
          </a>
          )}
        </div>

      </div>
    </section>
  );
}
