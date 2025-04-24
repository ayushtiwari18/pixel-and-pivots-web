
export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  category: 'basketball' | 'web-dev' | 'machine-learning';
  icon?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'started-basketball',
    title: 'Started Playing Basketball',
    date: '2008',
    description: 'Discovered a passion for basketball in middle school, joined the school team and started developing fundamental skills.',
    category: 'basketball',
  },
  {
    id: 'high-school-team',
    title: 'High School Varsity Team Captain',
    date: '2014',
    description: 'Led the high school varsity team to regional championships, developing leadership skills and team coordination.',
    category: 'basketball',
  },
  {
    id: 'first-website',
    title: 'Built My First Website',
    date: '2016',
    description: 'Created my first website using HTML, CSS, and JavaScript during freshman year of college, sparking interest in web development.',
    category: 'web-dev',
  },
  {
    id: 'college-basketball',
    title: 'College Basketball Team',
    date: '2016-2020',
    description: 'Played for the university basketball team while pursuing a Computer Science degree, balancing athletics and academics.',
    category: 'basketball',
  },
  {
    id: 'internship',
    title: 'Web Development Internship',
    date: '2019',
    description: 'Summer internship at a tech startup, working with React and building modern web applications.',
    category: 'web-dev',
  },
  {
    id: 'ml-research',
    title: 'First ML Research Project',
    date: '2020',
    description: 'Conducted research on applying computer vision techniques to analyze basketball shooting mechanics.',
    category: 'machine-learning',
  },
  {
    id: 'full-stack-role',
    title: 'Full Stack Developer Role',
    date: '2021',
    description: 'Started career as a Full Stack Developer at a sports technology company, building applications for athletic performance analysis.',
    category: 'web-dev',
  },
  {
    id: 'ml-grad-studies',
    title: 'Graduate Studies in ML',
    date: '2022',
    description: 'Began part-time graduate studies focusing on machine learning algorithms and their applications in sports analytics.',
    category: 'machine-learning',
  },
  {
    id: 'semi-pro-basketball',
    title: 'Semi-Professional Basketball',
    date: '2022-Present',
    description: 'Playing semi-professional basketball on weekends while continuing to grow in the tech industry.',
    category: 'basketball',
  },
  {
    id: 'research-publication',
    title: 'First Research Publication',
    date: '2024',
    description: 'Published research paper on neural networks for predicting basketball player movements and game outcomes.',
    category: 'machine-learning',
  },
];
