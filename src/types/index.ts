export interface EventClass {
  id: string;
  label: string;
  icon: string;
  description: string;
  color: string;
  cssClass: string;
}

export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  github: string;
  linkedin: string;
  avatarGradient: string;
}

export interface TimelineSegment {
  color: string;
  width: number;
  opacity?: number;
}

export interface LegendItem {
  label: string;
  color: string;
}

export interface ResultBadge {
  label: string;
  color: string;
}

export interface ResultCard {
  id: string;
  clip: string;
  title: string;
  duration: string;
  fps: number;
  image: string;
  imageAlt: string;
  badges: ResultBadge[];
  timeline: TimelineSegment[];
  legend: LegendItem[];
}
