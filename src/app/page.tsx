import Image from 'next/image';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full bg-[#142E29]">
      <HeroSection />
    </main>
  );
}
