'use client';

import { Button, Row, Col } from 'antd';
import { 
  TwitterOutlined, 
  SkypeOutlined, 
  LinkedinOutlined,
  GithubOutlined
} from '@ant-design/icons';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <Row gutter={[48, 24]} align="middle" justify="space-between">
          <Col xs={24} lg={12}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-600">Hey There!</h3>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                I am <span className="text-blue-600">RAJWAN</span>
              </h1>
              <h5 className="text-xl lg:text-2xl font-medium text-gray-700 uppercase tracking-wide">
                Senior Full Stack Software Engineer
              </h5>
              <p className="text-lg text-gray-600 leading-relaxed">
                Passionate about building scalable web applications and microservices. 
                Expert in modern web technologies with 5+ years of experience in full-stack development.
              </p>
              
              <div className="flex space-x-4 my-8">
                <Button 
                  type="text" 
                  icon={<LinkedinOutlined />} 
                  className="text-2xl hover:text-blue-500 transition-colors"
                  href="https://linkedin.com"
                  target="_blank"
                />
                <Button 
                  type="text" 
                  icon={<GithubOutlined />} 
                  className="text-2xl hover:text-blue-500 transition-colors"
                  href="https://github.com"
                  target="_blank"
                />
                <Button 
                  type="text" 
                  icon={<TwitterOutlined />} 
                  className="text-2xl hover:text-blue-500 transition-colors"
                  href="https://twitter.com"
                  target="_blank"
                />
                <Button 
                  type="text" 
                  icon={<SkypeOutlined />} 
                  className="text-2xl hover:text-blue-500 transition-colors"
                  href="skype:rajwan?chat"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="primary" 
                  size="large" 
                  className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 h-12 px-8 text-lg"
                  href="#portfolio"
                >
                  View My Work
                </Button>
                <Button 
                  size="large" 
                  className="h-12 px-8 text-lg border-blue-600 text-blue-600 hover:bg-blue-50"
                  href="#contact"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={10}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/img/rajwan.jpg"
                  alt="Rajwan Raju - Senior Full Stack Engineer"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
