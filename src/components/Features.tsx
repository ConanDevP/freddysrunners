import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Activity, Map, Users } from 'lucide-react';

export function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          BUILT TO MAKE YOU BETTER
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<Activity className="w-12 h-12 text-red-500" />}
            title="Smarter Training"
            description="Turn your phone into smartwatch-like precision—track your workouts and get tons of data analysis."
            delay={0}
          />
          <FeatureCard
            icon={<Map className="w-12 h-12 text-red-500" />}
            title="Custom Workouts"
            description="Get personalized training plans where you can get personalized training from local elite runners."
            delay={0.2}
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-red-500" />}
            title="Strong Community"
            description="Create your own custom challenges to push yourself and your friends. Be more motivated with the Freddy's Runners community."
            delay={0.4}
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}