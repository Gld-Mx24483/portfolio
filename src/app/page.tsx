// src/app/page.jsx
import Hero from '../app/components/Hero';
import Navbar from '../app/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <section id="home">
          <Hero />
        </section>
      </div>
    </main>
  );
}