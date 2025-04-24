
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'web' | 'ml' | 'hybrid';
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'neural-shot-predictor',
    title: 'Neural Shot Predictor',
    description: 'A machine learning model that analyzes basketball shooting form and predicts shot success probability. Built using computer vision techniques and deployed as a mobile app.',
    image: '/placeholder.svg',
    tags: ['PyTorch', 'Computer Vision', 'React Native', 'TensorFlow.js'],
    category: 'hybrid',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    id: 'team-analytics-dashboard',
    title: 'Team Analytics Dashboard',
    description: 'Interactive dashboard for basketball teams to visualize performance metrics, player statistics, and game strategies.',
    image: '/placeholder.svg',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    category: 'web',
    github: 'https://github.com',
    featured: true,
  },
  {
    id: 'court-vision-ai',
    title: 'Court Vision AI',
    description: 'AI system that analyzes game footage to identify optimal player positioning, defensive weaknesses, and strategic opportunities.',
    image: '/placeholder.svg',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'FastAPI'],
    category: 'ml',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    id: 'training-regimen-generator',
    title: 'Training Regimen Generator',
    description: 'Web application that generates personalized basketball training programs based on player position, strengths, and areas for improvement.',
    image: '/placeholder.svg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    category: 'web',
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 'player-potential-predictor',
    title: 'Player Potential Predictor',
    description: 'Machine learning model that analyzes player statistics, physical attributes, and game footage to predict future potential and development curve.',
    image: '/placeholder.svg',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Flask'],
    category: 'ml',
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 'basketball-social-platform',
    title: 'HoopConnect',
    description: 'Social platform for basketball players to find local games, connect with teams, and share highlights.',
    image: '/placeholder.svg',
    tags: ['React', 'Firebase', 'Node.js', 'Express'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
];
