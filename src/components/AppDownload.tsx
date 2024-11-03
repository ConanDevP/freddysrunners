import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function AppDownload() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">Download Our App</h2>
            <p className="text-lg text-gray-300 mb-8">
              Get the most out of your running experience with our mobile app. Track your progress, join challenges, and connect with runners worldwide.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-black transition-colors"
                onClick={() => window.open('https://apps.apple.com')}
              >
                <img src="/app-store.svg" alt="App Store" className="h-8" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-black transition-colors"
                onClick={() => window.open('https://play.google.com')}
              >
                <img src="/play-store.svg" alt="Play Store" className="h-8" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=1974"
              alt="App Screenshot"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}