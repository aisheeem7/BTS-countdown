import { useState } from 'react';
import IntroAnimation from '@/components/IntroAnimation';
import ComebackHero from '@/components/ComebackHero';
import DiscographyCarousel from '@/components/DiscographyCarousel';
import MemberProfiles from '@/components/MemberProfiles';
import FixedHeader from '@/components/FixedHeader';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showMain, setShowMain] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowMain(true);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      {showMain && (
        <>
          <FixedHeader />
          <main>
            <ComebackHero />
            <DiscographyCarousel />
            <MemberProfiles />
            
            <footer className="py-8 sm:py-12 text-center border-t border-border/30">
              <p className="text-sm text-muted-foreground">
                ୨ৎ‪ made with ‪♡ by ash ୨ৎ
              </p>
            </footer>
          </main>
        </>
      )}
    </div>
  );
};

export default Index;
