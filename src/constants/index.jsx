import { Code, Palette, Zap, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const PERSONAL_INFO = {
  name: 'Geoffrey Musau',
  title: 'Full-Stack Developer',
  description: 'Full-Stack Developer crafting digital experiences with modern technologies',
  email: 'musau_geoffrey@yahoo.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com/in/geoffrey-musau-a35700208',
};

export const NAV_ITEMS = ['home', 'about', 'projects', 'contact'];

export const SKILLS = [
  {
    name: 'Frontend',
    icon: Code,
    items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'JavaScript ES6+']
  },
  {
    name: 'Backend',
    icon: Zap,
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express.js', 'REST APIs']
  },
  {
    name: 'Tools',
    icon: Palette,
    items: ['Git', 'Docker', 'AWS', 'Figma', 'Webpack', 'Vite']
  }
];

export const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB featuring user authentication, payment processing, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express.js'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    live: 'https://your-ecommerce-demo.vercel.app',
    gradient: 'from-primary-500 to-purple-600',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration features, and progress tracking.',
    tech: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Vuex'],
    github: 'https://github.com/yourusername/task-manager',
    live: 'https://your-taskmanager-demo.vercel.app',
    gradient: 'from-accent-500 to-primary-500',
    featured: true
  },
  {
    title: 'AI Dashboard',
    description: 'Comprehensive dashboard for data visualization and machine learning model deployment with interactive charts.',
    tech: ['Python', 'Flask', 'D3.js', 'TensorFlow', 'PostgreSQL'],
    github: 'https://github.com/yourusername/ai-dashboard',
    live: 'https://your-dashboard-demo.vercel.app',
    gradient: 'from-purple-500 to-pink-500',
    featured: true
  },
  {
    title: 'Weather App',
    description: 'Modern weather application with location-based forecasts, interactive maps, and detailed weather metrics.',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    github: 'https://github.com/yourusername/weather-app',
    live: 'https://your-weather-demo.vercel.app',
    gradient: 'from-blue-500 to-cyan-500',
    featured: false
  },
  {
    title: 'Blog Platform',
    description: 'Content management system with markdown support, user authentication, and responsive design.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js'],
    github: 'https://github.com/yourusername/blog-platform',
    live: 'https://your-blog-demo.vercel.app',
    gradient: 'from-green-500 to-teal-500',
    featured: false
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with modern technologies and smooth animations.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://your-portfolio.vercel.app',
    gradient: 'from-indigo-500 to-purple-500',
    featured: false
  }
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    href: PERSONAL_INFO.github,
    label: 'GitHub',
    color: 'hover:text-slate-300'
  },
  {
    icon: Linkedin,
    href: PERSONAL_INFO.linkedin,
    label: 'LinkedIn',
    color: 'hover:text-primary-400'
  },
  {
    icon: Mail,
    href: `mailto:${PERSONAL_INFO.email}`,
    label: 'Email',
    color: 'hover:text-accent-400'
  }
];

export const STATS = [
  {
    number: '50+',
    label: 'Projects Completed',
    color: 'text-primary-400'
  },
  {
    number: '5+',
    label: 'Years Experience',
    color: 'text-accent-400'
  },
  {
    number: '100%',
    label: 'Client Satisfaction',
    color: 'text-green-400'
  },
  {
    number: '24/7',
    label: 'Support Available',
    color: 'text-purple-400'
  }
];