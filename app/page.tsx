'use client';

import { Hero } from '../components/Hero';
import UnlockPotentialSection from '@/components/UnlockPotentialSection';
import HowItWorksSection from '@/components/HowItWorkSection';
import MissionSection from '@/components/MissionSection';
import ChooseYourRoleSection from '@/components/ChooseYourRoleSection';
import TaskToCashSection from '@/components/TaskToCashSection';
import VerifiedForTrustSection from '@/components/VerifiedForTrustSection';
import TestimonialsSection from '@/components/TestimonialsSectiont';
import FAQSection from '@/components/FAQSection';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <UnlockPotentialSection />
      <HowItWorksSection />
      <MissionSection />
      <ChooseYourRoleSection />
      <TaskToCashSection />
      <VerifiedForTrustSection />
      <TestimonialsSection />
      <FAQSection />
      <CallToAction />
    </div>
  );
}
