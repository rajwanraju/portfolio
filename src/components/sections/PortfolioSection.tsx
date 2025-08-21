'use client';

import { Row, Col, Tag } from 'antd';
import Image from 'next/image';

export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      image: '/img/portfolio/p1.jpg',
      description: 'Modern e-commerce platform built with Laravel backend and React.js frontend',
      technologies: ['Laravel', 'React.js', 'MySQL', 'Redis', 'Docker'],
      link: '#'
    },
    {
      id: 2,
      title: 'Real-time Chat Application',
      category: 'fullstack',
      image: '/img/portfolio/p2.jpg',
      description: 'Real-time messaging app with Socket.IO and Node.js backend',
      technologies: ['Node.js', 'Socket.IO', 'React.js', 'MongoDB', 'Redis'],
      link: '#'
    },
    {
      id: 3,
      title: 'Microservices API Gateway',
      category: 'backend',
      image: '/img/portfolio/p3.jpg',
      description: 'API gateway for microservices architecture using Golang',
      technologies: ['Golang', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
      link: '#'
    },
    {
      id: 4,
      title: 'Admin Dashboard',
      category: 'frontend',
      image: '/img/portfolio/p4.jpg',
      description: 'Modern admin dashboard with Vue.js and Ant Design',
      technologies: ['Vue.js', 'Ant Design', 'Vuex', 'TypeScript', 'Axios'],
      link: '#'
    },
    {
      id: 5,
      title: 'Payment Integration System',
      category: 'backend',
      image: '/img/portfolio/p5.jpg',
      description: 'Multi-payment gateway integration with Laravel',
      technologies: ['Laravel', 'Stripe', 'PayPal', 'MySQL', 'Redis'],
      link: '#'
    },
    {
      id: 6,
      title: 'Progressive Web App',
      category: 'frontend',
      image: '/img/portfolio/p6.jpg',
      description: 'PWA built with Next.js and service workers',
      technologies: ['Next.js', 'TypeScript', 'PWA', 'Tailwind CSS', 'Vercel'],
      link: '#'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'backend', label: 'Backend' },
    { key: 'frontend', label: 'Frontend' }
  ];

  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-blue-600 font-semibold">My Portfolio</span>
            <div className="w-8 h-0.5 bg-blue-600"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Recent Projects <br />
            & Case Studies
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Tag
              key={category.key}
              className="px-6 py-2 text-base cursor-pointer hover:bg-blue-600 hover:text-white transition-colors"
              color={category.key === 'all' ? 'blue' : 'default'}
            >
              {category.label}
            </Tag>
          ))}
        </div>
        
        <Row gutter={[24, 24]}>
          {portfolioItems.map((item) => (
            <Col xs={24} sm={12} lg={8} key={item.id}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-200 mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.technologies.slice(0, 3).map((tech, index) => (
                        <Tag key={index} className="text-xs bg-blue-600 border-blue-600">
                          {tech}
                        </Tag>
                      ))}
                      {item.technologies.length > 3 && (
                        <Tag className="text-xs bg-gray-600 border-gray-600">
                          +{item.technologies.length - 3} more
                        </Tag>
                      )}
                    </div>
                    <a 
                      href={item.link}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
