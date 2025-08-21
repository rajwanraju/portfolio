'use client';

import { Card, Row, Col, Progress, Tag } from 'antd';
import { 
  CodeOutlined, 
  DatabaseOutlined, 
  CloudOutlined, 
  ToolOutlined,
  ApiOutlined,
  MobileOutlined
} from '@ant-design/icons';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <CodeOutlined className="text-3xl text-blue-600" />,
      skills: [
        { name: 'PHP (Laravel, CodeIgniter, YII)', level: 95 },
        { name: 'Node.js (Express)', level: 90 },
        { name: 'Golang (Microservices)', level: 85 },
        { name: 'Python (Django, Flask)', level: 80 }
      ]
    },
    {
      title: 'Frontend Development',
      icon: <MobileOutlined className="text-3xl text-blue-600" />,
      skills: [
        { name: 'React.js & Next.js', level: 95 },
        { name: 'Vue.js & Nuxt.js', level: 90 },
        { name: 'Redux & Vuex', level: 88 },
        { name: 'TypeScript', level: 85 }
      ]
    },
    {
      title: 'Web Technologies',
      icon: <ApiOutlined className="text-3xl text-blue-600" />,
      skills: [
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'Bootstrap & Tailwind CSS', level: 88 },
        { name: 'Ant Design & Material-UI', level: 85 }
      ]
    },
    {
      title: 'Databases',
      icon: <DatabaseOutlined className="text-3xl text-blue-600" />,
      skills: [
        { name: 'MySQL & MariaDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB (NoSQL)', level: 80 },
        { name: 'Redis', level: 85 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <ToolOutlined className="text-3xl text-blue-600" />,
      skills: [
        { name: 'Docker & Kubernetes', level: 85 },
        { name: 'Git & CI/CD', level: 90 },
        { name: 'Linux Shell Scripting', level: 80 },
        { name: 'AWS & Cloud Services', level: 75 }
      ]
    },
    {
      title: 'Other Technologies',
      icon: <CloudOutlined className="text-3xl text-blue-600" />,
      skills: [
        { name: 'RESTful APIs', level: 95 },
        { name: 'Socket.IO & Real-time', level: 85 },
        { name: 'Payment Gateway Integration', level: 90 },
        { name: 'Microservice Architecture', level: 88 }
      ]
    }
  ];

  const technologies = [
    'Laravel', 'CodeIgniter', 'YII', 'Node.js', 'Express', 'Golang',
    'React.js', 'Next.js', 'Vue.js', 'Nuxt.js', 'Redux', 'Vuex',
    'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS',
    'Ant Design', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis',
    'Docker', 'Git', 'AWS', 'Socket.IO', 'REST APIs'
  ];

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-blue-600 font-semibold">My Skills</span>
            <div className="w-8 h-0.5 bg-blue-600"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Technical Expertise <br />
            & Technologies
          </h2>
        </div>

        {/* Skill Categories */}
        <Row gutter={[32, 32]} className="mb-16">
          {skillCategories.map((category, index) => (
            <Col xs={24} lg={12} key={index}>
              <Card 
                hoverable 
                className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow"
                style={{ padding: '2rem' }}
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-blue-600 font-semibold">{skill.level}%</span>
                      </div>
                      <Progress 
                        percent={skill.level} 
                        strokeColor="#2563eb"
                        trailColor="#e5e7eb"
                        showInfo={false}
                        size="small"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Tag
                key={index}
                className="px-4 py-2 text-base border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                {tech}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
