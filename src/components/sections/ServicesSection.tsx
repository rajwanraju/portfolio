'use client';

import { Card, Row, Col, Button } from 'antd';
import { 
  CodeOutlined, 
  MobileOutlined, 
  CloudOutlined, 
  ApiOutlined,
  DatabaseOutlined,
  SettingOutlined
} from '@ant-design/icons';

export default function ServicesSection() {
  const services = [
    {
      icon: <CodeOutlined className="text-4xl text-blue-600" />,
      title: 'Backend Development',
      description: 'Building robust, scalable backend systems using PHP (Laravel, CodeIgniter), Node.js, and Golang. Creating RESTful APIs, microservices, and server-side applications.',
      features: ['API Development', 'Microservices', 'Database Design', 'Performance Optimization']
    },
    {
      icon: <MobileOutlined className="text-4xl text-blue-600" />,
      title: 'Frontend Development',
      description: 'Creating modern, responsive user interfaces using React.js, Next.js, Vue.js, and Nuxt.js. Implementing state management with Redux and Vuex.',
      features: ['React.js & Next.js', 'Vue.js & Nuxt.js', 'State Management', 'Responsive Design']
    },
    {
      icon: <ApiOutlined className="text-4xl text-blue-600" />,
      title: 'API Development',
      description: 'Designing and implementing RESTful APIs, GraphQL endpoints, and real-time communication using Socket.IO. Integration with third-party services.',
      features: ['RESTful APIs', 'GraphQL', 'Socket.IO', 'Third-party Integration']
    },
    {
      icon: <DatabaseOutlined className="text-4xl text-blue-600" />,
      title: 'Database Design',
      description: 'Designing and optimizing database schemas, implementing data models, and ensuring data integrity across MySQL, PostgreSQL, and NoSQL databases.',
      features: ['Database Design', 'Query Optimization', 'Data Migration', 'Backup & Recovery']
    },
    {
      icon: <CloudOutlined className="text-4xl text-blue-600" />,
      title: 'DevOps & Deployment',
      description: 'Setting up CI/CD pipelines, containerization with Docker, cloud deployment on AWS, and infrastructure management for scalable applications.',
      features: ['Docker & Kubernetes', 'CI/CD Pipelines', 'AWS Deployment', 'Monitoring']
    },
    {
      icon: <SettingOutlined className="text-4xl text-blue-600" />,
      title: 'System Architecture',
      description: 'Designing scalable system architectures, implementing microservices patterns, and ensuring high availability and performance of applications.',
      features: ['Microservices', 'System Design', 'Performance Tuning', 'Security']
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-blue-600 font-semibold">My Services</span>
            <div className="w-8 h-0.5 bg-blue-600"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            What I Can Do <br />
            For Your Business
          </h2>
        </div>
        
        <Row gutter={[32, 32]}>
          {services.map((service, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <Card 
                hoverable 
                className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow"
                style={{ padding: '2rem' }}
              >
                <div className="text-center mb-6">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h4>
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Button 
                    type="link" 
                    className="text-blue-600 hover:text-blue-700 font-semibold p-0 h-auto"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
