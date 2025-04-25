
export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  category: 'basketball' | 'web-dev' | 'machine-learning';
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: "2016",
    title: "Started Basketball Career",
    description: "Joined national-level tournaments and trained as a shooting guard.",
    category: "basketball"
  },
  {
    id: 2,
    date: "2019",
    title: "Started Coding Journey",
    description: "Learned Python during recovery from an injury. Built my first website to help basketball players track stats.",
    category: "web-dev"
  },
  {
    id: 3,
    date: "2021",
    title: "Full Stack Development",
    description: "Worked on real-time dashboards using React and Node.js. Led backend refactor sprint.",
    category: "web-dev"
  },
  {
    id: 4,
    date: "2022",
    title: "ML Research Assistant",
    description: "Researched basketball motion data for pose estimation and predictive modeling.",
    category: "machine-learning"
  },
  {
    id: 5,
    date: "2024",
    title: "Open Source Contributor",
    description: "Contributed to sports analytics tools and full-stack templates in Next.js.",
    category: "web-dev"
  }
];
