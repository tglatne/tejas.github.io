import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      {/* <ExperienceSection /> */}
    </main>
  );
}
