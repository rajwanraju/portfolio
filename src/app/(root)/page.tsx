import MainLayout from '@components/layout/MainLayout';
import HeroSection from '@components/sections/HeroSection';
import AboutSection from '@components/sections/AboutSection';
import SkillsSection from '@components/sections/SkillsSection';
import PortfolioSection from '@components/sections/PortfolioSection';
import ContactSection from '@components/sections/ContactSection';
import ExperienceSection from '@components/sections/ExperienceSection';

export const metadata = {
  title: 'Md Rajwan Ullah - Senior Software Engineer',
  description:
    'Portfolio of Md Rajwan Ullah — Senior Software Engineer specializing in Laravel, Node.js, Next.js, Vue/Nuxt, and scalable system architecture.',
};

export default function Home() {
  return (
    <MainLayout containerClassName='!min-h-screen'>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </MainLayout>
  );
}
