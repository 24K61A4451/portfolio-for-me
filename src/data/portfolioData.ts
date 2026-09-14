import { SkillItem, ProjectItem, AchievementItem, JourneyTrack, ValuePropItem } from '../types';

export const PERSONAL_INFO = {
  name: 'S. Charan Teja',
  shortName: 'Charan Teja',
  role: 'Frontend Developer',
  secondaryFocus: 'Data Analytics & Power BI',
  location: 'Bhimavaram, Andhra Pradesh, India',
  subtitle: 'Building responsive, modern and user-focused web experiences with React, JavaScript and modern frontend technologies.',
  secondaryLine: 'Also exploring Data Analytics, Power BI and data-driven solutions.',
  email: 'charantejasarika32@gmail.com',
  githubUrl: 'https://github.com/charantejasarika32-crypto',
  linkedinUrl: 'https://www.linkedin.com/in/charanteja-sarika-89b681390',
  aboutText1: 'I am S. Charan Teja, a passionate Frontend Developer focused on building responsive, interactive and user-friendly web applications. I work with HTML, CSS, JavaScript and React, and I enjoy turning ideas into clean and functional digital experiences.',
  aboutText2: 'Alongside frontend development, I have developed skills in Python, SQL, data cleaning, Power BI, DAX and data visualization. I also enjoy participating in hackathons where I work on real-world technology problems and build practical solutions.',
  year: '2026',
};

export const HIGHLIGHT_CARDS = [
  {
    title: 'Frontend Development',
    tags: ['React', 'JavaScript', 'CSS', 'Responsive Design'],
    icon: 'code-2',
    accent: 'from-cyan-500/20 to-blue-500/10',
    border: 'hover:border-cyan-500/40',
  },
  {
    title: 'Data Analytics',
    tags: ['Power BI', 'DAX', 'Data Cleaning', 'Data Visualization'],
    icon: 'bar-chart-3',
    accent: 'from-emerald-500/20 to-teal-500/10',
    border: 'hover:border-emerald-500/40',
  },
  {
    title: 'Problem Solving',
    tags: ['Hackathons', 'Projects', 'Team Collaboration'],
    icon: 'trophy',
    accent: 'from-amber-500/20 to-orange-500/10',
    border: 'hover:border-amber-500/40',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // Frontend Development
  { name: 'HTML', category: 'Frontend Development', iconKey: 'html', highlight: true },
  { name: 'CSS', category: 'Frontend Development', iconKey: 'css', highlight: true },
  { name: 'JavaScript', category: 'Frontend Development', iconKey: 'javascript', highlight: true },
  { name: 'Bootstrap', category: 'Frontend Development', iconKey: 'bootstrap' },
  { name: 'React', category: 'Frontend Development', iconKey: 'react', highlight: true },
  { name: 'CSS Flexbox', category: 'Frontend Development', iconKey: 'layout' },
  { name: 'CSS Grid Layout', category: 'Frontend Development', iconKey: 'grid' },
  { name: 'Responsive Web Design', category: 'Frontend Development', iconKey: 'smartphone' },
  { name: 'DOM', category: 'Frontend Development', iconKey: 'layers' },

  // Programming & Database
  { name: 'Python', category: 'Programming & Database', iconKey: 'python', highlight: true },
  { name: 'SQL', category: 'Programming & Database', iconKey: 'database', highlight: true },

  // Data Analytics
  { name: 'Microsoft Power BI', category: 'Data Analytics', iconKey: 'powerbi', highlight: true },
  { name: 'Data Cleaning', category: 'Data Analytics', iconKey: 'sparkles' },
  { name: 'DAX', category: 'Data Analytics', iconKey: 'calculator' },
  { name: 'Data Visualization', category: 'Data Analytics', iconKey: 'pie-chart' },
  { name: 'Dashboard Building', category: 'Data Analytics', iconKey: 'layout-dashboard' },

  // Tools
  { name: 'Git', category: 'Tools', iconKey: 'git-branch' },
  { name: 'GitHub', category: 'Tools', iconKey: 'github', highlight: true },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'rural-healthcare',
    title: 'Rural Healthcare Referral & Supply Network',
    description:
      'A technology-driven solution designed to improve rural healthcare referrals and supply coordination by connecting healthcare stakeholders and supporting better access to essential healthcare services.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'SQL'],
    githubUrl: 'https://github.com/charantejasarika32-crypto/Rural-Healthcare-Referral-Supply-Network',
    category: 'Web Application',
    featured: true,
    badge: 'Hackathon Project',
  },
  {
    id: 'sales-shipment',
    title: 'Sales Shipment Performance Analysis',
    description:
      'An interactive Power BI dashboard designed to analyze sales, shipments, products, boxes, regions and salesperson performance. The dashboard helps transform business data into clear and actionable visual insights.',
    technologies: ['Microsoft Power BI', 'DAX', 'Data Cleaning', 'Data Visualization', 'Dashboard Building'],
    githubUrl: 'https://github.com/charantejasarika32-crypto/sales-shipment-performance-analysis',
    category: 'Data Analytics',
    featured: false,
    badge: 'Business Intelligence',
  },
  {
    id: 'safeher',
    title: 'SafeHer',
    description:
      'A women safety web application focused on providing quick access to emergency support through an SOS feature and emergency contact information.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    featured: false,
    badge: 'Safety Utility',
    hasInteractivePreview: true,
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'sih-2026',
    title: 'Selected – Smart India Hackathon Internal Hackathon 2026',
    badge: 'SIH 2026 Internal Round',
    description: 'Selected for the SIH 2026 internal hackathon with a real-world technology solution.',
    iconType: 'trophy',
    tag: 'National Level Hackathon Selection',
  },
  {
    id: 'college-hackathon',
    title: '2nd Prize – College Hackathon',
    badge: 'Podium Winner',
    description:
      'Won 2nd prize in a college-level hackathon as part of a team, demonstrating teamwork, problem-solving and rapid solution development.',
    iconType: 'medal',
    tag: 'Team Hackathon Award',
  },
];

export const JOURNEY_TRACKS: JourneyTrack[] = [
  {
    title: 'Frontend Development',
    category: 'Core Discipline',
    description: 'Mastery of web foundations leading to modern component architectures and responsive systems.',
    steps: ['HTML', 'CSS', 'JavaScript', 'DOM', 'Flexbox', 'Grid', 'Responsive Design', 'React'],
  },
  {
    title: 'Data Analytics',
    category: 'Analytical Focus',
    description: 'Transforming raw data pipelines into actionable business intelligence visualizations.',
    steps: ['Data Cleaning', 'Power BI', 'DAX', 'Data Visualization', 'Dashboard Building'],
  },
  {
    title: 'Projects & Hackathons',
    category: 'Real-world Execution',
    description: 'Applying technical knowledge under pressure to solve practical community and enterprise challenges.',
    steps: ['Personal Projects', 'Team Projects', 'College Hackathon', 'SIH Internal Hackathon 2026'],
  },
];

export const WHY_WORK_WITH_ME: ValuePropItem[] = [
  {
    title: 'Responsive Development',
    description: 'Build websites that work smoothly across desktop, tablet and mobile devices.',
    iconName: 'monitor-smartphone',
  },
  {
    title: 'Modern UI',
    description: 'Focus on clean layouts, intuitive interfaces and modern user experiences.',
    iconName: 'palette',
  },
  {
    title: 'Problem Solving',
    description: 'Enjoy solving practical problems through technology and project development.',
    iconName: 'lightbulb',
  },
  {
    title: 'Continuous Learning',
    description: 'Continuously improving frontend development, React and data analytics skills.',
    iconName: 'trending-up',
  },
];
