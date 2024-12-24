import Companies from '@/components/sections/Companies';
import Features from '@/components/sections/Features';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Pricing from '@/components/sections/Pricing';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className='container h-full'>
        <Companies />
        <Features />
        <Pricing/>
      </main>
      <footer>Footer</footer>
    </>
  );
}
