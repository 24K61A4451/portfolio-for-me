export interface SkillItem {
  name: string;
  category: 'Frontend Development' | 'Programming & Database' | 'Data Analytics' | 'Tools';
  iconKey: string;
  highlight?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  hasInteractivePreview?: boolean;
  featured?: boolean;
  badge?: string;
  category: 'Frontend' | 'Data Analytics' | 'Web Application';
}

export interface AchievementItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  iconType: 'trophy' | 'medal';
  tag: string;
}

export interface JourneyTrack {
  title: string;
  category: string;
  description: string;
  steps: string[];
}

export interface ValuePropItem {
  title: string;
  description: string;
  iconName: string;
}
