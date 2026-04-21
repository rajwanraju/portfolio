export const portfolioData = {
  personal: {
    name: 'Md Rajwan Ullah',
    title: 'Senior Software Engineer',
    email: 'rajwan.diu@gmail.com',
    phone: '+8801737909454',
    location: '51/A/1, West-Raza bazar, Dhaka-1215',
    github: 'https://github.com/rajwanraju',
    summary:
      'Senior Software Engineer with 6+ years of experience building scalable web applications using Laravel and Node.js on the backend and Next.js/Vue/Nuxt on the frontend. Passionate about clean architecture, performance optimization, and delivering end-to-end solutions that drive business impact.',
    interests: [
      'Keeping up with new technologies, languages, and tools',
      'Exploring different architectures and design patterns',
      'System design, performance optimization, and distributed systems',
    ],
  },
  skills: {
    backend: ['PHP (Laravel, CodeIgniter)', 'Node.js (Express)', 'Go (Beginner)'],
    frontend: ['React.js', 'Next.js', 'Redux', 'Vue.js', 'Nuxt.js', 'Vuex', 'Composition API'],
    databases: ['MySQL', 'PostgreSQL', 'SQL Server', 'Redis (Caching & Pub/Sub)'],
    architecture: ['REST APIs', 'Event-Driven Systems', 'Real-Time Systems'],
    devopsCloud: [
      'Docker',
      'CI/CD (GitHub Actions, GitLab CI)',
      'AWS (EC2, S3)',
      'Nginx',
      'Load Balancer / Reverse Proxy',
      'Queues & deployment automation',
    ],
    testing: ['Jest', 'PHPUnit'],
  },
  experience: [
    {
      company: 'Silicon Orchard LTD',
      role: 'Senior Software Engineer',
      start: '02/2022',
      end: 'Present',
      highlights: [
        'Led end-to-end delivery of enterprise apps (Video Streaming, IoT Vehicle Tracking, CRM, Payroll, E-commerce) serving thousands of active users.',
        'Architected scalable REST APIs and microservices using Laravel, Node.js (Express), and Golang for high availability and performance.',
        'Built Golang services for real-time event processing, parallel API orchestration, and large-scale data ingestion with low latency.',
        'Optimized frontends with React/Next and Vue/Nuxt using SSR, code-splitting, and efficient state management for better performance and SEO.',
        'Delivered real-time features (chat, notifications, tracking) with Redis, Socket.io, and Pusher.',
        'Containerized apps with Docker and built CI/CD pipelines (GitHub Actions, GitLab CI), improving release reliability and reducing deploy time.',
        'Mentored junior developers and reduced technical debt across multiple projects.',
      ],
    },
    {
      company: 'Nanoit World',
      role: 'Senior Software Engineer',
      start: '12/2019',
      end: '01/2022',
      highlights: [
        'Built multi- and single-vendor e-commerce platforms with custom CMS, real-time chat, push notifications, wallet, refunds, and secure payments.',
        'Created scalable REST APIs for web and mobile apps.',
        'Integrated 6+ payment gateways (bKash, SSLCOMMERZ, PayPal, Stripe, and more).',
        'Automated logistics via eCourier API and added live order updates and instant notifications for high-traffic systems.',
      ],
    },
    {
      company: 'GGLINK',
      role: 'Software Engineer',
      start: '06/2018',
      end: '11/2019',
      highlights: [
        'Built CRM and a global e-learning platform for a UK client (live classes, real-time chat, payments, attendance tracking).',
        'Delivered movie portals, inventory systems, news portals, and ERP/POS modules.',
        'Owned full lifecycle of standalone projects including SEO analyzer, listing tools, and property rental platform.',
      ],
    },
  ],
  education: [
    {
      institution: 'Daffodil International University',
      degree: 'Bachelor of Science',
      field: 'Software Engineering (SWE)',
    },
  ],
  certificates: [
    'Web Development With Laravel - BITM',
    'Advance Web development With Laravel and Vue js - Esikhon.com',
  ],
  references: [
    {
      name: 'MD. Eusub Ali, MD',
      company: 'Silicon Orchard LTD',
      email: 'yousuf@siliconorchard.com',
    },
  ],
  selectedWork: [
    {
      title: 'Enterprise Video Streaming Platform',
      description: 'End-to-end delivery with scalable APIs, performance tuning, and production deployment.',
      tags: ['Laravel', 'Node.js', 'Redis', 'CI/CD', 'Docker'],
    },
    {
      title: 'IoT Vehicle Tracking System',
      description: 'Real-time tracking dashboards and event processing with low latency.',
      tags: ['Golang', 'Redis', 'Socket.io', 'PostgreSQL'],
    },
    {
      title: 'E-commerce Platforms & Payments',
      description: 'Multi-vendor commerce, wallets/refunds, and multiple payment gateway integrations.',
      tags: ['Laravel', 'Vue/Nuxt', 'Stripe', 'SSLCOMMERZ', 'bKash'],
    },
  ],
} as const;

