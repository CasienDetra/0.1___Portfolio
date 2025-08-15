
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Showcase from '../components/Showcase';
export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <Showcase />
      <ContactSection />
    </main>
  );
}
