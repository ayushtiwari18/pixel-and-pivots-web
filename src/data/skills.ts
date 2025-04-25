
export interface Skill {
  id: string;
  name: string;
  level: number; // 1-100
  category: 'web' | 'ml' | 'basketball' | 'frontend' | 'backend' | 'tools';
  icon?: string;
  color?: string;
  details?: string[]; // Adding details property
}

export const skills: Skill[] = [
  // Web Development Skills
  {
    id: 'react',
    name: 'React',
    level: 90,
    category: 'web',
    color: '#61DAFB',
    details: ['Component architecture', 'Hooks', 'Context API', 'Redux'],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    level: 85,
    category: 'web',
    color: '#3178C6',
    details: ['Type systems', 'Interfaces', 'Generics', 'Utility types'],
  },
  {
    id: 'node',
    name: 'Node.js',
    level: 80,
    category: 'web',
    color: '#8CC84B',
    details: ['Express', 'API development', 'Middleware', 'Authentication'],
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    level: 85,
    category: 'web',
    color: '#000000',
    details: ['Server components', 'API routes', 'Static generation', 'ISR'],
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    level: 90,
    category: 'web',
    color: '#06B6D4',
    details: ['Responsive design', 'Custom theming', 'Component styling'],
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    level: 75,
    category: 'web',
    color: '#E535AB',
    details: ['Schema design', 'Resolvers', 'Apollo Client', 'Federation'],
  },
  
  // Machine Learning Skills
  {
    id: 'python',
    name: 'Python',
    level: 90,
    category: 'ml',
    color: '#3776AB',
    details: ['NumPy', 'Pandas', 'Data processing', 'OOP'],
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    level: 80,
    category: 'ml',
    color: '#FF6F00',
    details: ['Neural networks', 'Model training', 'TF.js', 'Keras'],
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    level: 85,
    category: 'ml',
    color: '#EE4C2C',
    details: ['Dynamic computation', 'Vision models', 'Transfer learning'],
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision',
    level: 75,
    category: 'ml',
    color: '#8B5CF6',
    details: ['Object detection', 'Pose estimation', 'Motion tracking'],
  },
  {
    id: 'nlp',
    name: 'Natural Language Processing',
    level: 70,
    category: 'ml',
    color: '#8B5CF6',
    details: ['Sentiment analysis', 'Text classification', 'BERT models'],
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    level: 85,
    category: 'ml',
    color: '#1E88E5',
    details: ['Statistical analysis', 'Data visualization', 'Hypothesis testing'],
  },
  
  // Basketball Skills
  {
    id: 'shooting',
    name: 'Shooting',
    level: 85,
    category: 'basketball',
    color: '#FF914D',
    details: ['Three-point range', 'Free throws', 'Mid-range jumper'],
  },
  {
    id: 'dribbling',
    name: 'Ball Handling',
    level: 80,
    category: 'basketball',
    color: '#FF914D',
    details: ['Crossovers', 'Behind the back', 'Change of pace'],
  },
  {
    id: 'defense',
    name: 'Defense',
    level: 75,
    category: 'basketball',
    color: '#FF914D',
    details: ['On-ball defense', 'Help defense', 'Shot blocking'],
  },
  {
    id: 'court-vision',
    name: 'Court Vision',
    level: 90,
    category: 'basketball',
    color: '#FF914D',
    details: ['Passing lanes', 'Anticipation', 'Basketball IQ'],
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    level: 95,
    category: 'basketball',
    color: '#FF914D',
    details: ['Communication', 'Leadership', 'Role acceptance'],
  },
  {
    id: 'conditioning',
    name: 'Physical Conditioning',
    level: 80,
    category: 'basketball',
    color: '#FF914D',
    details: ['Endurance', 'Strength', 'Agility training'],
  },
];
