import AboutIntro from './AboutIntro';
import AboutContent from './AboutContent';
import AboutGallery from './AboutGallery';

export default function AboutSection({ withId = false }) {
  return (
    <section {...(withId && { id: 'about-preview' })} className="scroll-mt-20">
      <AboutIntro />
      <AboutContent />
      <AboutGallery />
      {}
    </section>
  );
}