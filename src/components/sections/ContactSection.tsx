'use client';

import { Button, Card, Row, Col } from 'antd';
import { 
  TwitterOutlined, 
  SkypeOutlined, 
  LinkedinOutlined, 
  GithubOutlined,
  MailOutlined,
  PhoneOutlined
} from '@ant-design/icons';

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-blue-600 font-semibold">Get In Touch</span>
            <div className="w-8 h-0.5 bg-blue-600"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Let's Work Together <br />
            On Your Next Project
          </h2>
        </div>
        
        <Row gutter={[48, 32]} justify="center">
          <Col xs={24} lg={16}>
            <Card className="border-0 shadow-lg">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Ready to Start?</h3>
                <p className="text-gray-600 text-lg">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    type="primary" 
                    size="large" 
                    className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 h-12 px-8 text-lg"
                    href="mailto:rajwan.dinesh@gmail.com"
                    icon={<MailOutlined />}
                  >
                    Send Email
                  </Button>
                  <Button 
                    size="large" 
                    className="h-12 px-8 text-lg border-blue-600 text-blue-600 hover:bg-blue-50"
                    href="tel:+1234567890"
                    icon={<PhoneOutlined />}
                  >
                    Call Now
                  </Button>
                </div>
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-gray-500 mb-4">
                    Or connect with me on social media
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button 
                      type="text" 
                      icon={<LinkedinOutlined />} 
                      className="text-2xl hover:text-blue-500 transition-colors"
                      href="https://www.linkedin.com/in/rajwan-ullah-551129116"
                      target="_blank"
                    />
                    <Button 
                      type="text" 
                      icon={<GithubOutlined />} 
                      className="text-2xl hover:text-blue-500 transition-colors"
                      href="https://github.com/rajwanraju"
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
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
