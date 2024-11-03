import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function Navbar() {
  const { toast } = useToast();

  const handleSignUp = () => {
    toast({
      title: "Sign Up",
      description: "Registration will be available soon!",
    });
  };

  const handleLogin = () => {
    toast({
      title: "Log In",
      description: "Login functionality coming soon!",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0 font-bold text-xl"
          >
            Freddy's Runners
          </motion.div>
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="ml-10 flex items-center space-x-8"
            >
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                Workouts
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                Routes
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                Community
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center space-x-4"
          >
            <Button variant="ghost" onClick={handleLogin}>Log In</Button>
            <Button variant="default" onClick={handleSignUp}>Sign Up</Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}