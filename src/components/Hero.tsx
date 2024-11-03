import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function Hero() {
  const { toast } = useToast();

  const handleGetStarted = () => {
    toast({
      title: "Welcome to Freddy's Runners!",
      description: "Let's start your running journey together.",
    });
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl font-bold mb-6"
          >
            REACH YOUR BEST
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl mb-8 text-gray-200"
          >
            Whether you're training for a marathon or your biggest season yet, we're here to help you make serious progress.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4"
          >
            <Button 
              size="lg" 
              className="text-lg px-8 bg-white text-black hover:bg-gray-200 transition-colors"
              onClick={handleGetStarted}
            >
              START YOUR JOURNEY
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 text-white border-white hover:bg-white hover:text-black transition-colors"
            >
              LEARN MORE
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex items-center gap-4"
          >
            <img src="/app-store.svg" alt="App Store" className="h-10 cursor-pointer hover:opacity-80 transition-opacity" />
            <img src="/play-store.svg" alt="Play Store" className="h-10 cursor-pointer hover:opacity-80 transition-opacity" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}