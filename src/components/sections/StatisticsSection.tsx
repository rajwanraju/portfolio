'use client';

import { Row, Col } from 'antd';

export default function StatisticsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Row gutter={[32, 24]} justify="start">
          <Col xs={24} sm={8} md={6}>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                <span className="counter">50</span>+
              </h3>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
          </Col>
          <Col xs={24} sm={8} md={6}>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                <span className="counter">5</span>+
              </h3>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
          </Col>
          <Col xs={24} sm={8} md={6}>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                <span className="counter">15</span>+
              </h3>
              <p className="text-gray-600 font-medium">Technologies</p>
            </div>
          </Col>
          <Col xs={24} sm={8} md={6}>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                <span className="counter">100</span>%
              </h3>
              <p className="text-gray-600 font-medium">Client Satisfaction</p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
