'use client';

import { Button, Row, Col } from 'antd';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <Row gutter={[48, 32]} align="middle">
          <Col xs={24} lg={10}>
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/img/rajwan.png"
                alt="Rajwan Raju - Senior Full Stack Engineer"
                width={400}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </Col>
          <Col xs={24} lg={14}>
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2">
                <span className="text-blue-600 font-semibold">About me</span>
                <div className="w-8 h-0.5 bg-blue-600"></div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Senior Full Stack <br />
                Software Engineer
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                I am a passionate and experienced Full Stack Software Engineer with over 5 years of expertise 
                in building scalable web applications and microservices. I specialize in modern web technologies 
                and have a proven track record of delivering high-quality, performant solutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                My expertise spans across the entire development stack - from designing robust backend APIs 
                and microservices to creating intuitive user interfaces. I'm passionate about clean code, 
                best practices, and staying up-to-date with the latest technologies and industry trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="primary" 
                  size="large" 
                  className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 h-12 px-8 text-lg"
                  href="/resume.pdf"
                  target="_blank"
                >
                  Download Resume
                </Button>
                <Button 
                  size="large" 
                  className="h-12 px-8 text-lg border-blue-600 text-blue-600 hover:bg-blue-50"
                  href="#skills"
                >
                  View Skills
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
