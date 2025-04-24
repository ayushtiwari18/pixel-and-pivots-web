
export interface Skill {
  id: string;
  name: string;
  level: number; // 1-100
  category: 'web' | 'ml' | 'basketball';
  icon?: string;
  color?: string;
}

export const skills: Skill[] = [
  // Web Development Skills
  {
    id: 'react',
    name: 'React',
    level: 90,
    category: 'web',
    color: '#61DAFB',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    level: 85,
    category: 'web',
    color: '#3178C6',
  },
  {
    id: 'node',
    name: 'Node.js',
    level: 80,
    category: 'web',
    color: '#8CC84B',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    level: 85,
    category: 'web',
    color: '#000000',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    level: 90,
    category: 'web',
    color: '#06B6D4',
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    level: 75,
    category: 'web',
    color: '#E535AB',
  },
  
  // Machine Learning Skills
  {
    id: 'python',
    name: 'Python',
    level: 90,
    category: 'ml',
    color: '#3776AB',
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    level: 80,
    category: 'ml',
    color: '#FF6F00',
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    level: 85,
    category: 'ml',
    color: '#EE4C2C',
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision',
    level: 75,
    category: 'ml',
    color: '#8B5CF6',
  },
  {
    id: 'nlp',
    name: 'Natural Language Processing',
    level: 70,
    category: 'ml',
    color: '#8B5CF6',
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    level: 85,
    category: 'ml',
    color: '#1E88E5',
  },
  
  // Basketball Skills
  {
    id: 'shooting',
    name: 'Shooting',
    level: 85,
    category: 'basketball',
    color: '#FF914D',
  },
  {
    id: 'dribbling',
    name: 'Ball Handling',
    level: 80,
    category: 'basketball',
    color: '#FF914D',
  },
  {
    id: 'defense',
    name: 'Defense',
    level: 75,
    category: 'basketball',
    color: '#FF914D',
  },
  {
    id: 'court-vision',
    name: 'Court Vision',
    level: 90,
    category: 'basketball',
    color: '#FF914D',
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    level: 95,
    category: 'basketball',
    color: '#FF914D',
  },
  {
    id: 'conditioning',
    name: 'Physical Conditioning',
    level: 80,
    category: 'basketball',
    color: '#FF914D',
  },
];
