import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Goals } from '@/components/Goals';
import { Stats } from '@/components/Stats';
import { Features } from '@/components/Features';
import { AppDownload } from '@/components/AppDownload';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Goals />
      <Stats />
      <Features />
      <AppDownload />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;