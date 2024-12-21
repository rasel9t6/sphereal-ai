import Companies from '@/components/sections/Companies';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className='container'>
        <Companies />
      </main>
      <footer>Footer</footer>
    </>
  );
}
