export const portfolioData = {
  personal: {
    name: 'Md Rajwan Ullah',
    title: 'Senior Software Engineer',
    email: 'rajwan.diu@gmail.com',
    phone: '+8801737909454',
    location: '51/A/1, West-Raza bazar, Dhaka-1215',
    github: 'https://github.com/rajwanraju',
    summary:
      'Senior Software Engineer with 6+ years of experience building scalable web applications, SaaS products, and distributed systems using PHP, Node.js, React, Python (FastAPI), and AWS. Strong experience in backend design & development, REST APIs, real-time systems, and AI-powered workflow automation. Passionate about clean architecture, performance optimization, and delivering end-to-end solutions that drive business impact.',
    interests: [
      'Keeping up with new technologies, languages, and tools',
      'Exploring different architectures and design patterns',
      'System design, performance optimization, and distributed systems',
    ],
  },
  skills: {
    backend: ['PHP (Laravel, CodeIgniter)', 'Node.js (Express, Microservices)', 'Python (FastAPI)', 'Go (Beginner)'],
    frontend: ['React.js', 'Next.js', 'Redux', 'TypeScript', 'Vue.js', 'Nuxt.js', 'Vuex', 'Composition API'],
    databases: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Supabase', 'Prisma', 'Redis (Caching, Pub/Sub, Queue via Bull)'],
    architecture: ['REST APIs', 'Event-Driven Systems', 'Real-Time Systems'],
    devopsCloud: [
      'Docker',
      'CI/CD (GitHub Actions, GitLab CI)',
      'AWS (EC2, S3, RDS)',
      'Nginx',
      'Linux (Ubuntu)',
      'Bash',
      'Load Balancer / Reverse Proxy',
      'Queues & deployment automation',
    ],
    testing: ['Jest', 'PHPUnit', 'Unit Testing', 'Integration Testing'],
    ai: [
      'OpenAI API',
      'AI Workflow Automation (n8n)',
      'AI-assisted Development (Cursor, ChatGPT, Claude, Ollama)',
      'Prompt Engineering',
    ],
  },
   experience: [
     {
       company: 'Pivotly',
       role: 'Senior Software Engineer',
       start: '07/2025',
       end: 'Present',
       highlights: [
         'Developed key components of a node-based AI workflow builder using React Flow, improving usability of automation design.',
         'Co-developed a distributed API execution engine to handle complex, multi-step workflows.',
         'Implemented and optimized Bull-based queue systems for asynchronous job processing and fault tolerance.',
         'Contributed to a modular connector framework for third-party integrations, enabling scalable and reusable connections.',
         'Supported implementation of advanced workflow capabilities including branching logic, retries, and concurrency handling.'
       ],
     },
     {
       company: 'Silicon Orchard LTD',
       role: 'Senior Software Engineer',
       start: '02/2022',
       end: '06/2025',
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
    'Professional Web Dev. With Laravel & Vue.js - BITM',
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
      title: 'AI Workflow Automation Platform',
      description: 'Node-based AI workflow builder with distributed API execution engine, Bull queue processing, and modular connector framework for third-party integrations.',
      tags: ['React Flow', 'Node.js', 'Bull Queues', 'AI/OpenAI', 'Microservices'],
    },
    {
      title: 'Enterprise Video Streaming Platform',
      description: 'End-to-end delivery with scalable APIs, performance tuning, and production deployment.',
      tags: ['Laravel', 'Node.js', 'Redis', 'CI/CD', 'Docker'],
    },
    {
      title: 'IoT Vehicle Tracking System',
      description: 'Real-time IoT tracking and vehicle security platform with 100+ REST API endpoints serving thousands of daily requests.',
      tags: ['Golang', 'Redis', 'Socket.io', 'PostgreSQL', 'Real-Time'],
    },
    {
      title: 'E-commerce Platforms & Payments',
      description: 'Multi-vendor commerce, wallets/refunds, and 6+ payment gateway integrations including bKash, SSLCOMMERZ, Stripe, and PayPal.',
      tags: ['Laravel', 'Vue/Nuxt', 'Stripe', 'SSLCOMMERZ', 'bKash'],
    },
    {
      title: 'CRM & E-learning Platform',
      description: 'Global e-learning platform for UK client with live classes, real-time chat, payments, and attendance tracking.',
      tags: ['Laravel', 'Real-Time Chat', 'Payments', 'Vue.js'],
    },
  ],
} as const;

