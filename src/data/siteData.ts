// ============================================================
// SITE DATA — Central configuration for Rakesh Kumar's research website
// Edit this file to update publications, projects, and profile information.
// ============================================================

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status: 'published' | 'accepted' | 'preprint' | 'in-preparation';
  type: 'conference' | 'journal' | 'preprint' | 'workshop';
  doi?: string;
  paperUrl?: string;
  pdfUrl?: string;
  codeUrl?: string;
  summary: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problemStatement: string;
  motivation: string;
  method: string;
  contributions: string[];
  datasets: string[];
  results: string;
  limitations: string;
  futureWork: string;
  paperUrl?: string;
  codeUrl?: string;
  demoUrl?: string;
  status: 'published' | 'ongoing' | 'preliminary' | 'planned';
  tags: string[];
}

export interface Repository {
  id: string;
  name: string;
  description: string;
  url: string;
  language: string;
  topics: string[];
  installation: string;
  datasets: string;
  usage: string;
  limitations: string;
  contributing: string;
}

export interface ResearchNote {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  institution: string;
  description: string;
}

export interface CollaborationOpportunity {
  id: string;
  title: string;
  objective: string;
  expectedContribution: string;
  status: 'open' | 'in-progress' | 'completed' | 'planned';
  contactMethod: string;
}

// ============================================================
// PROFILE
// ============================================================
export const profile = {
  name: 'Rakesh Kumar',
  title: 'PhD Researcher',
  institution: 'AcSIR, CSIR-CEERI, Pilani, India',
  email: 'rakesh.kumar@ceeri.ac.in', // Update with actual email
  github: 'https://github.com/rakesh-kumar-cv', // Update with actual URL
  scholar: 'https://scholar.google.com/', // Update with actual URL
  orcid: 'https://orcid.org/', // Update with actual ORCID
  linkedin: 'https://linkedin.com/', // Update with actual URL
  cvUrl: '#', // Update with actual CV link
  bio: `I am a PhD researcher at the Academy of Scientific and Innovative Research (AcSIR), working at CSIR–Central Electronics Engineering Research Institute (CSIR-CEERI), Pilani, India. My research focuses on computer vision and video understanding, with particular emphasis on weakly supervised video anomaly detection, vision-language models, and temporal representation learning.

I am interested in how AI systems can identify unusual events in videos, learn meaningful temporal representations, and improve the reliability and interpretability of video understanding systems. My work spans fundamental challenges in temporal reasoning, semantic understanding, generalization, and explainable anomaly detection for security applications.`,
  researchGoals: [
    'Develop robust weakly supervised methods for video anomaly detection that generalize across domains',
    'Explore vision-language models for improved semantic understanding of temporal events',
    'Advance reproducible and interpretable computer vision research for security applications',
    'Build open-source tools and benchmarks for the video understanding community',
  ],
};

// ============================================================
// PUBLICATIONS
// ============================================================
export const publications: Publication[] = [
  {
    id: 'ap2024',
    title: 'Weakly Supervised Video Anomaly Detection via Temporal Semantic Alignment',
    authors: ['Rakesh Kumar', 'Co-Author Name', 'Supervisor Name'],
    venue: 'IEEE APSCON (Asia Pacific Conference on Sensors)',
    year: 2024,
    status: 'published',
    type: 'conference',
    doi: '', // Add DOI when available
    paperUrl: '', // Add when available
    pdfUrl: '', // Add when available
    codeUrl: '', // Add when available
    summary: 'This work proposes a temporal semantic alignment framework for weakly supervised video anomaly detection that leverages vision-language correspondence to improve anomaly localization without requiring frame-level annotations during training.',
  },
  {
    id: 'indiscon2024',
    title: 'Prototype-Based Semantic Representation Learning for Video Anomaly Detection',
    authors: ['Rakesh Kumar', 'Co-Author Name', 'Supervisor Name'],
    venue: 'INDISCON (Indian National Science Conference)',
    year: 2024,
    status: 'accepted',
    type: 'conference',
    doi: '',
    paperUrl: '',
    pdfUrl: '',
    codeUrl: '',
    summary: 'We introduce a prototype learning approach that captures semantic representations for distinguishing normal and anomalous events in video sequences, enabling improved detection under weak supervision.',
  },
  {
    id: 'icvgip2024',
    title: 'CLIP-Based Temporal Feature Extraction for Weakly Supervised Anomaly Detection',
    authors: ['Rakesh Kumar', 'Co-Author Name', 'Supervisor Name'],
    venue: 'ICVGIP (Indian Conference on Computer Vision, Graphics & Image Processing)',
    year: 2024,
    status: 'accepted',
    type: 'conference',
    doi: '',
    paperUrl: '',
    pdfUrl: '',
    codeUrl: '',
    summary: 'This paper explores the use of CLIP-based features for temporal representation learning in weakly supervised anomaly detection, demonstrating that vision-language pre-trained models provide semantically rich features that improve detection performance.',
  },
];

// ============================================================
// RESEARCH PROJECTS
// ============================================================
export const projects: Project[] = [
  {
    id: 'ws-vad',
    title: 'Weakly Supervised Video Anomaly Detection',
    subtitle: 'Learning to detect anomalies with only video-level labels',
    problemStatement: 'Video anomaly detection requires frame-level annotations which are expensive and subjective to obtain. Weakly supervised methods aim to learn anomaly detection using only video-level binary labels (normal/abnormal), but face challenges in temporal localization and distinguishing subtle anomalies.',
    motivation: 'Existing fully supervised methods require costly pixel-level or frame-level annotations. Weak supervision offers a practical alternative but introduces ambiguity in temporal localization — the model must learn which segments contain anomalies from bag-level labels alone.',
    method: 'Our approach combines multiple instance learning with temporal attention mechanisms to identify anomalous segments within video bags. We leverage semantic features from vision-language models to provide richer representations that help distinguish normal from anomalous patterns.',
    contributions: [
      'Novel temporal attention mechanism for anomaly localization under weak supervision',
      'Integration of vision-language features for improved semantic discrimination',
      'Comprehensive evaluation protocol with multiple benchmark datasets',
      'Analysis of failure modes and generalization challenges',
    ],
    datasets: ['UCF-Crime', 'ShanghaiTech', 'XD-Violence'],
    results: 'Results reported on standard benchmarks with comparison to existing weakly supervised methods. Full quantitative evaluation including AUC, frame-level detection rates, and temporal localization accuracy.',
    limitations: 'Performance depends on the quality of video-level labels. Temporal localization may be imprecise for very short anomalies. Generalization across domains with different camera setups remains an open challenge.',
    futureWork: 'Exploring open-set anomaly detection, improving temporal precision, and extending to multi-camera surveillance scenarios.',
    status: 'published',
    tags: ['Weak Supervision', 'Anomaly Detection', 'Temporal Modeling', 'Multiple Instance Learning'],
  },
  {
    id: 'clip-temporal',
    title: 'CLIP-Based Temporal Representation Learning',
    subtitle: 'Leveraging vision-language models for video understanding',
    problemStatement: 'Standard video features (e.g., I3D, C3D) capture motion patterns but may lack rich semantic understanding. Vision-language models like CLIP provide semantically aligned image-text representations, but adapting them for temporal video understanding requires careful architectural design.',
    motivation: 'CLIP features encode rich semantic information from large-scale image-text pretraining. However, applying CLIP to video anomaly detection requires addressing the temporal dimension — how to aggregate frame-level CLIP features into meaningful temporal representations that capture event dynamics.',
    method: 'We extract CLIP features from video frames and design temporal aggregation strategies including attention-based pooling, temporal convolution, and prototype-based temporal modeling. The approach preserves semantic richness while capturing temporal dynamics relevant to anomaly detection.',
    contributions: [
      'Systematic study of CLIP feature adaptation for temporal video understanding',
      'Multiple temporal aggregation strategies with comparative analysis',
      'Demonstration that semantic features improve anomaly discrimination',
      'Reproducible feature extraction pipeline for the community',
    ],
    datasets: ['UCF-Crime', 'ShanghaiTech'],
    results: 'CLIP-based features demonstrate competitive performance compared to motion-focused features, with particular strength in semantic anomaly types (e.g., shoplifting, abuse) where semantic context matters.',
    limitations: 'CLIP features are computed per-frame and may miss fine-grained motion patterns. Computational cost of CLIP inference is higher than lightweight feature extractors. Domain gap between CLIP training data and surveillance footage.',
    futureWork: 'Exploring video-specific CLIP variants (VideoCLIP, InternVideo), temporal fine-tuning strategies, and efficient feature extraction methods.',
    status: 'published',
    tags: ['CLIP', 'Vision-Language Models', 'Temporal Features', 'Representation Learning'],
  },
  {
    id: 'prototype-learning',
    title: 'Prototype Learning for Semantic Anomaly Detection',
    subtitle: 'Learning representative patterns for normal and anomalous events',
    problemStatement: 'Under weak supervision, the model must learn to distinguish normal from anomalous events without frame-level labels. Prototype learning offers a way to capture representative patterns (prototypes) for each class, enabling interpretable distance-based classification.',
    motivation: 'Traditional MIL approaches treat each segment independently. Prototype learning can capture the diversity within normal events (which are varied) and anomalous events (which are diverse in type), providing a more structured representation space.',
    method: 'We learn multiple prototypes for normal and anomalous event categories. Each video segment is compared against learned prototypes using distance metrics in the feature space. The approach enables interpretable predictions — we can identify which prototype a segment is closest to and understand the decision.',
    contributions: [
      'Multi-prototype learning framework for weakly supervised anomaly detection',
      'Semantic alignment between prototypes and event categories',
      'Interpretable anomaly scoring based on prototype distances',
      'Analysis of prototype diversity and coverage',
    ],
    datasets: ['UCF-Crime', 'ShanghaiTech'],
    results: 'Prototype-based approach achieves competitive detection performance while providing interpretable insights into what the model considers normal vs. anomalous patterns.',
    limitations: 'Number of prototypes is a hyperparameter requiring tuning. Prototypes may not capture rare anomaly types not well-represented in training data.',
    futureWork: 'Dynamic prototype updating, hierarchical prototype structures, and integration with open-set detection frameworks.',
    status: 'published',
    tags: ['Prototype Learning', 'Semantic Alignment', 'Interpretability', 'Anomaly Detection'],
  },
  {
    id: 'security-cv',
    title: 'Security-Oriented Visual Threat Detection',
    subtitle: 'Computer vision for surveillance and public safety',
    problemStatement: 'Modern surveillance systems generate massive amounts of video data that cannot be manually monitored. Automated threat detection systems must identify diverse security-relevant events (violence, trespassing, abandoned objects) while maintaining low false alarm rates in real-world conditions.',
    motivation: 'Existing anomaly detection methods often evaluate on academic benchmarks that may not reflect real-world surveillance challenges. There is a need for systems that generalize across environments, handle diverse threat types, and provide actionable outputs for security operators.',
    method: 'We develop detection frameworks that combine weakly supervised learning with domain-specific knowledge about security events. The approach incorporates temporal context, scene understanding, and multi-scale analysis to detect threats in realistic surveillance scenarios.',
    contributions: [
      'Security-focused anomaly detection framework with practical deployment considerations',
      'Multi-scale temporal analysis for detecting both sudden and gradual threats',
      'Evaluation methodology for real-world surveillance scenarios',
      'Analysis of detection reliability and false alarm patterns',
    ],
    datasets: ['UCF-Crime', 'Custom surveillance datasets (where available)'],
    results: 'Preliminary results on security-relevant event categories show promising detection capabilities with analysis of practical deployment considerations.',
    limitations: 'Real-world deployment requires careful calibration for specific environments. Privacy considerations must be addressed. Performance varies across lighting conditions and camera angles.',
    futureWork: 'Edge deployment optimization, privacy-preserving detection methods, and multi-camera coordination for comprehensive coverage.',
    status: 'ongoing',
    tags: ['Security', 'Surveillance', 'Threat Detection', 'Deployment'],
  },
];

// ============================================================
// RESEARCH INTERESTS (Cards)
// ============================================================
export const researchInterests = [
  {
    id: 'ws-vad',
    title: 'Weakly Supervised Video Anomaly Detection',
    question: 'How can we detect anomalous events in videos using only video-level labels?',
    challenge: 'Learning precise temporal localization from bag-level supervision without frame-level annotations introduces significant ambiguity in identifying when anomalies occur.',
    direction: 'Developing temporal attention mechanisms and multiple instance learning approaches that leverage semantic features for improved anomaly discrimination and localization.',
    relatedWork: ['ws-vad', 'clip-temporal'],
  },
  {
    id: 'vlm-video',
    title: 'Vision-Language Models for Video Understanding',
    question: 'Can vision-language pre-training provide better representations for temporal video understanding?',
    challenge: 'Adapting image-text models like CLIP to capture temporal dynamics and event-level semantics in video requires bridging the gap between static visual-semantic alignment and temporal reasoning.',
    direction: 'Exploring temporal adaptation strategies for CLIP and related VLMs, investigating how semantic features complement motion-based representations for anomaly detection.',
    relatedWork: ['clip-temporal'],
  },
  {
    id: 'temporal-learning',
    title: 'Temporal Representation Learning',
    question: 'What makes a good temporal representation for distinguishing events in video?',
    challenge: 'Videos contain complex temporal structures — events unfold over varying durations, with different temporal scales relevant for different anomaly types. Capturing both short-term dynamics and long-range dependencies is essential.',
    direction: 'Investigating temporal pooling strategies, attention mechanisms, and long-range modeling approaches that preserve discriminative information across different temporal scales.',
    relatedWork: ['clip-temporal', 'ws-vad'],
  },
  {
    id: 'open-set',
    title: 'Open-Set and Generalizable Anomaly Detection',
    question: 'How can anomaly detection systems handle previously unseen anomaly types?',
    challenge: 'Training data contains only a subset of possible anomalies. Real-world systems must detect novel anomaly types not seen during training while maintaining low false positive rates on normal variations.',
    direction: 'Exploring open-set recognition frameworks, domain generalization techniques, and methods that learn robust normal event representations that generalize across environments.',
    relatedWork: ['prototype-learning', 'ws-vad'],
  },
  {
    id: 'explainability',
    title: 'Explainable AI for Video Surveillance',
    question: 'Can we make video anomaly detection systems interpretable and trustworthy?',
    challenge: 'Black-box deep learning models provide anomaly scores without explaining why a segment is flagged. For security applications, operators need understandable explanations to make informed decisions.',
    direction: 'Developing prototype-based explanations, attention visualization methods, and human-aligned anomaly descriptions that bridge the gap between model outputs and human understanding.',
    relatedWork: ['prototype-learning'],
  },
  {
    id: 'reproducibility',
    title: 'Reproducible Computer Vision Research',
    question: 'How can we improve reproducibility and transparency in video understanding research?',
    challenge: 'Many published results are difficult to reproduce due to implementation differences, evaluation protocol variations, and incomplete reporting of experimental details.',
    direction: 'Maintaining open-source implementations, standardized evaluation protocols, detailed ablation studies, and community benchmarks to enable fair comparison and reproducible research.',
    relatedWork: [],
  },
];

// ============================================================
// OPEN-SOURCE REPOSITORIES
// ============================================================
export const repositories: Repository[] = [
  {
    id: 'ws-vad-framework',
    name: 'WS-VAD Framework',
    description: 'A modular framework for weakly supervised video anomaly detection with support for multiple feature types and temporal modeling approaches.',
    url: 'https://github.com/', // Update with actual URL
    language: 'Python',
    topics: ['video-anomaly-detection', 'weak-supervision', 'computer-vision', 'pytorch'],
    installation: 'git clone <repo-url>\ncd ws-vad-framework\npip install -r requirements.txt',
    datasets: 'UCF-Crime and ShanghaiTech features can be downloaded following instructions in the datasets/ directory. Feature extraction requires pre-trained models.',
    usage: 'python train.py --dataset ucf-crime --feature clip --method our_method\npython evaluate.py --checkpoint checkpoints/best_model.pth',
    limitations: 'Feature extraction requires significant GPU memory. Pre-computed features are recommended for reproducibility.',
    contributing: 'Contributions welcome! Please open an issue to discuss proposed changes. Follow the coding style in existing files and include tests for new functionality.',
  },
  {
    id: 'clip-temporal-features',
    name: 'CLIP Temporal Features',
    description: 'Tools for extracting and processing CLIP-based temporal features from video for anomaly detection and video understanding tasks.',
    url: 'https://github.com/', // Update with actual URL
    language: 'Python',
    topics: ['clip', 'video-features', 'temporal-modeling', 'vision-language'],
    installation: 'git clone <repo-url>\ncd clip-temporal-features\npip install -r requirements.txt',
    datasets: 'Works with any video dataset. Pre-processing scripts for UCF-Crime and ShanghaiTech are included.',
    usage: 'python extract_features.py --video_dir ./videos --output_dir ./features --model ViT-B/32\npython temporal_aggregation.py --features_dir ./features --method attention_pool',
    limitations: 'CLIP model inference is computationally expensive. Batch processing recommended for large datasets.',
    contributing: 'Bug reports and feature requests welcome. Please include reproduction steps for bugs.',
  },
];

// ============================================================
// RESEARCH NOTES
// ============================================================
export const researchNotes: ResearchNote[] = [
  {
    id: 'note-1',
    title: 'Lessons from Reproducing Video Anomaly Detection Methods',
    date: '2024-12-15',
    tags: ['reproducibility', 'anomaly-detection', 'benchmarking'],
    excerpt: 'Key observations from reproducing several weakly supervised VAD methods, including evaluation pitfalls and implementation details that significantly affect reported performance.',
    content: `When reproducing weakly supervised video anomaly detection methods, several factors significantly impact final performance that are often under-reported in papers:

1. **Feature choice matters enormously**: The same method with I3D features vs. CLIP features can show dramatically different performance. Papers should clearly specify which features were used.

2. **Evaluation protocol variations**: Frame-level AUC computation varies across implementations. The smoothing window size, threshold selection strategy, and how multiple anomalies in a single video are handled all affect reported numbers.

3. **Training instability**: Multiple instance learning approaches can be sensitive to initialization and learning rate scheduling. Running multiple seeds is essential for reliable comparison.

4. **Data preprocessing**: Temporal stride, segment duration, and feature normalization all impact results. These details are often not reported.

These observations motivated our emphasis on reproducible evaluation protocols in our own work.`,
  },
  {
    id: 'note-2',
    title: 'Understanding CLIP Features for Video Anomaly Detection',
    date: '2024-10-20',
    tags: ['clip', 'vision-language', 'features', 'analysis'],
    excerpt: 'An analysis of how CLIP features behave when applied to video anomaly detection, including their strengths for semantic anomalies and limitations for motion-based anomalies.',
    content: `CLIP features offer rich semantic representations that complement traditional motion-based features for video anomaly detection. Here are key observations:

**Strengths:**
- Excellent at detecting semantic anomalies (e.g., shoplifting, abuse) where context and object interactions matter
- Provide semantically meaningful feature spaces where similar events cluster together
- Transfer well from image-domain pretraining without video-specific training

**Limitations:**
- Less effective for purely motion-based anomalies (e.g., running in a walking scene) where temporal dynamics matter more than semantic content
- Per-frame extraction misses inter-frame temporal relationships
- Domain gap between CLIP's training data (web images) and surveillance footage

**Practical recommendations:**
- Consider combining CLIP features with motion features for complementary information
- Use temporal aggregation carefully — simple averaging may lose discriminative temporal patterns
- Fine-tuning CLIP on surveillance data could help bridge the domain gap`,
  },
  {
    id: 'note-3',
    title: 'Frame-Level vs Video-Level Evaluation in Anomaly Detection',
    date: '2024-08-10',
    tags: ['evaluation', 'metrics', 'methodology'],
    excerpt: 'A discussion of evaluation metrics for video anomaly detection, including the differences between frame-level and video-level metrics and common pitfalls in reporting results.',
    content: `Evaluation in video anomaly detection is more nuanced than commonly assumed:

**Video-level AUC:** Measures whether the model can correctly classify a video as normal or abnormal. This is a simpler task and typically shows higher performance.

**Frame-level AUC:** Measures whether the model correctly identifies each frame as normal or abnormal. This requires precise temporal localization and is more challenging.

**Common pitfalls:**
1. Reporting only video-level AUC without frame-level results hides localization quality
2. Different temporal smoothing strategies can significantly change frame-level AUC
3. The choice of threshold affects precision-recall trade-offs
4. Multiple anomaly types in a single video complicate evaluation

**Best practices:**
- Report both video-level and frame-level metrics
- Include precision-recall curves in addition to ROC curves
- Specify the temporal smoothing parameters used
- Report results at multiple operating points, not just optimal threshold`,
  },
];

// ============================================================
// TIMELINE
// ============================================================
export const timeline: TimelineEntry[] = [
  {
    year: '2021 – Present',
    title: 'PhD in Computer Science / Electronics Engineering',
    institution: 'AcSIR, CSIR-CEERI, Pilani, India',
    description: 'Research on weakly supervised video anomaly detection, vision-language models, and temporal representation learning.',
  },
  {
    year: '2024',
    title: 'Publications at APSCON, INDISCON, and ICVGIP',
    institution: 'IEEE / INNS / IAPR',
    description: 'Published research on temporal semantic alignment, prototype learning, and CLIP-based feature extraction for anomaly detection.',
  },
  {
    year: '2019 – 2021',
    title: "Master's Degree",
    institution: 'University (Update with actual institution)',
    description: 'Foundation in computer science, machine learning, and computer vision.',
  },
];

// ============================================================
// COLLABORATION OPPORTUNITIES
// ============================================================
export const collaborationOpportunities: CollaborationOpportunity[] = [
  {
    id: 'collab-1',
    title: 'Cross-Dataset Evaluation of Weakly Supervised VAD Methods',
    objective: 'Establish a comprehensive evaluation protocol comparing multiple WS-VAD methods across diverse datasets with standardized features and metrics.',
    expectedContribution: 'Standardized evaluation scripts, pre-computed features, and reproducible benchmark results for the community.',
    status: 'open',
    contactMethod: 'Open a GitHub issue or email directly',
  },
  {
    id: 'collab-2',
    title: 'Vision-Language Models for Temporal Event Understanding',
    objective: 'Investigate how video-specific VLMs (VideoCLIP, InternVideo, etc.) compare with frame-level CLIP for anomaly detection and temporal reasoning.',
    expectedContribution: 'Comparative study with reproducible experiments across multiple VLM architectures.',
    status: 'open',
    contactMethod: 'Open a GitHub issue or email directly',
  },
  {
    id: 'collab-3',
    title: 'Open-Set Anomaly Detection Benchmark',
    objective: 'Create a benchmark for evaluating open-set anomaly detection in video, where test anomalies may differ from training anomaly types.',
    expectedContribution: 'Benchmark dataset splits, evaluation metrics, and baseline implementations.',
    status: 'planned',
    contactMethod: 'Email for discussion',
  },
  {
    id: 'collab-4',
    title: 'Interpretable Anomaly Detection for Security Applications',
    objective: 'Develop human-interpretable explanations for anomaly detection decisions, enabling security operators to understand and trust system outputs.',
    expectedContribution: 'Explanation methods, user studies, and deployment guidelines for security scenarios.',
    status: 'open',
    contactMethod: 'Open a GitHub issue or email directly',
  },
];

// ============================================================
// NAVIGATION
// ============================================================
export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Collaboration', href: '#collaboration' },
  { label: 'Open Source', href: '#opensource' },
  { label: 'Notes', href: '#notes' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
