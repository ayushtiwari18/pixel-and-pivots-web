
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  category: 'basketball' | 'web-dev' | 'machine-learning';
  image: string;
  coverImage?: string; // Adding coverImage property
  readingTime?: number; // Adding readingTime property
  author?: string; // Adding author property
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'basketball-improvement-data-driven',
    title: 'How Data Analytics Improved My Basketball Game',
    excerpt: 'Leveraging machine learning and performance tracking to enhance on-court decision making and shooting efficiency.',
    date: '2025-03-15',
    category: 'basketball',
    image: '/placeholder.svg',
    coverImage: '/placeholder.svg',
    readingTime: 8,
    author: 'Jake Davis',
    tags: ['Basketball', 'Data Analytics', 'Performance'],
    featured: true,
  },
  {
    id: 'neural-networks-explained-basketball',
    title: 'Neural Networks Explained Through Basketball Analogies',
    excerpt: 'Making deep learning concepts accessible by comparing them to basketball strategies and team dynamics.',
    date: '2025-02-28',
    category: 'machine-learning',
    image: '/placeholder.svg',
    coverImage: '/placeholder.svg',
    readingTime: 12,
    author: 'Jake Davis',
    tags: ['ML', 'Neural Networks', 'Basketball', 'Education'],
    featured: true,
  },
  {
    id: 'react-performance-techniques',
    title: 'Advanced React Performance Optimization Techniques',
    excerpt: 'In-depth look at memoization, virtualization, and code-splitting to create lightning-fast React applications.',
    date: '2025-01-20',
    category: 'web-dev',
    image: '/placeholder.svg',
    coverImage: '/placeholder.svg',
    readingTime: 10,
    author: 'Jake Davis',
    tags: ['React', 'Performance', 'JavaScript', 'Optimization'],
    featured: true,
  },
  {
    id: 'transfer-learning-computer-vision',
    title: 'Transfer Learning for Basketball Movement Analysis',
    excerpt: 'How to apply pre-trained computer vision models to analyze basketball movement patterns and improve training regimens.',
    date: '2024-12-10',
    category: 'machine-learning',
    image: '/placeholder.svg',
    coverImage: '/placeholder.svg',
    readingTime: 15,
    author: 'Jake Davis',
    tags: ['Computer Vision', 'Transfer Learning', 'Sports Analytics'],
    featured: false,
  },
  {
    id: 'leadership-lessons-basketball',
    title: 'Leadership Lessons from the Basketball Court to Tech Teams',
    excerpt: 'Drawing parallels between basketball team dynamics and leading engineering teams in the tech industry.',
    date: '2024-11-05',
    category: 'basketball',
    image: '/placeholder.svg',
    coverImage: '/placeholder.svg',
    readingTime: 7,
    author: 'Jake Davis',
    tags: ['Leadership', 'Team Building', 'Basketball', 'Tech Culture'],
    featured: false,
  },
  {
    id: 'modern-web-architecture',
    title: 'Modern Web Architecture: Beyond the SPA',
    excerpt: 'Exploring server components, islands architecture, and the future of web application development.',
    date: '2024-10-22',
    category: 'web-dev',
    image: '/placeholder.svg',
    coverImage: '/placeholder.svg',
    readingTime: 9,
    author: 'Jake Davis',
    tags: ['Web Development', 'Architecture', 'Performance', 'Next.js'],
    featured: false,
  },
];
