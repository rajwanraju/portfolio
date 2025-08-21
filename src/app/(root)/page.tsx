import MainLayout from '@components/layout/MainLayout';
import HeroSection from '@components/sections/HeroSection';
import StatisticsSection from '@components/sections/StatisticsSection';
import AboutSection from '@components/sections/AboutSection';
import SkillsSection from '@components/sections/SkillsSection';
import ServicesSection from '@components/sections/ServicesSection';
import PortfolioSection from '@components/sections/PortfolioSection';
import ContactSection from '@components/sections/ContactSection';

export const metadata = {
  title: 'Rajwan Raju - Senior Full Stack Software Engineer',
  description: 'Portfolio of Rajwan Raju - Senior Full Stack Software Engineer specializing in Laravel, React.js, Node.js, Golang, and modern web technologies.',
};

export default function Home() {
  return (
    <MainLayout containerClassName='!min-h-screen'>
      <HeroSection />
      <StatisticsSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </MainLayout>
  );
}
