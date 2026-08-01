'use client';

import { portfolioData } from '@data/portfolio';
import {
  CodeOutlined,
  MobileOutlined,
  CloudOutlined,
  ApiOutlined,
  DatabaseOutlined,
  SettingOutlined,
  RobotOutlined,
} from '@ant-design/icons';

export default function ServicesSection() {
  const services = [
    {
      icon: <CodeOutlined className='text-4xl text-emerald-400' />,
      title: 'Backend Development',
      description:
        'Building robust, scalable backend systems using PHP (Laravel, CodeIgniter), Node.js, Python (FastAPI), and Golang. Creating RESTful APIs, microservices, and server-side applications.',
      features: ['API Development', 'Microservices', 'Database Design', 'Performance Optimization'],
    },
    {
      icon: <MobileOutlined className='text-4xl text-emerald-400' />,
      title: 'Frontend Development',
      description:
        'Creating modern, responsive user interfaces using React.js, Next.js, Vue.js, and Nuxt.js. Implementing state management with Redux, Vuex, and TypeScript.',
      features: ['React.js & Next.js', 'Vue.js & Nuxt.js', 'TypeScript', 'Responsive Design'],
    },
    {
      icon: <RobotOutlined className='text-4xl text-emerald-400' />,
      title: 'AI & Workflow Automation',
      description:
        'Designing AI-powered workflow automation systems, integrating OpenAI APIs, and building intelligent tools using n8n, Cursor, and modern AI-assisted development practices.',
      features: ['OpenAI API Integration', 'Workflow Automation (n8n)', 'Prompt Engineering', 'AI-assisted Development'],
    },
    {
      icon: <ApiOutlined className='text-4xl text-emerald-400' />,
      title: 'API Development',
      description:
        'Designing and implementing RESTful APIs, real-time communication using Socket.IO and Pusher. Integration with third-party services and payment gateways.',
      features: ['RESTful APIs', 'Real-Time (Socket.IO)', 'Payment Gateways', 'Third-party Integration'],
    },
    {
      icon: <DatabaseOutlined className='text-4xl text-emerald-400' />,
      title: 'Database Design',
      description:
        'Designing and optimizing database schemas across MySQL, PostgreSQL, MongoDB, and Supabase. Implementing ORMs like Prisma and ensuring data integrity.',
      features: ['MySQL & PostgreSQL', 'MongoDB & Supabase', 'Prisma ORM', 'Query Optimization'],
    },
    {
      icon: <CloudOutlined className='text-4xl text-emerald-400' />,
      title: 'DevOps & Deployment',
      description:
        'Setting up CI/CD pipelines, containerization with Docker, cloud deployment on AWS (EC2, S3, RDS), and infrastructure management for scalable applications.',
      features: ['Docker', 'CI/CD Pipelines', 'AWS (EC2, S3, RDS)', 'Nginx & Linux'],
    },
    {
      icon: <SettingOutlined className='text-4xl text-emerald-400' />,
      title: 'System Architecture',
      description:
        'Designing scalable system architectures, implementing microservices patterns, event-driven systems, and ensuring high availability and performance.',
      features: ['Microservices', 'Event-Driven Systems', 'System Design', 'Security'],
    },
  ];

  return (
    <section className='section-padding' id='services'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <div className='mb-3 text-xs font-semibold tracking-[0.25em] text-white/60 uppercase'>
            Services
          </div>
          <h2 className='text-balance text-3xl font-semibold text-white sm:text-4xl'>
            What I Can Do For Your Business
          </h2>
        </div>

        <div className='mx-auto grid max-w-5xl gap-6 lg:grid-cols-3'>
          {services.map((service, index) => (
            <article
              key={index}
              className='rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur'
            >
              <div className='mb-6 text-center'>{service.icon}</div>
              <h3 className='text-xl font-bold text-white text-center'>{service.title}</h3>
              <p className='mt-4 text-center text-sm leading-relaxed text-white/70'>
                {service.description}
              </p>
              <div className='mt-6 space-y-2'>
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className='flex items-center text-sm text-white/70'
                  >
                    <div className='mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400' />
                    {feature}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
