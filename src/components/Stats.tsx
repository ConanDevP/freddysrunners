import { motion } from 'framer-motion';
import { Activity, MapPin, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-3 gap-8 text-center"
        >
          <StatItem
            icon={<Activity className="w-12 h-12 mx-auto mb-4 text-red-500" />}
            value="9.42"
            label="MILES LOGGED"
            inView={inView}
            delay={0}
          />
          <StatItem
            icon={<MapPin className="w-12 h-12 mx-auto mb-4 text-red-500" />}
            value="1.85"
            label="ROUTES CREATED"
            inView={inView}
            delay={0.2}
          />
          <StatItem
            icon={<Users className="w-12 h-12 mx-auto mb-4 text-red-500" />}
            value="2.44"
            label="WORKOUTS LOGGED"
            inView={inView}
            delay={0.4}
          />
        </motion.div>
      </div>
    </div>
  );
}

function StatItem({ 
  icon, 
  value, 
  label,
  inView,
  delay 
}: { 
  icon: React.ReactNode; 
  value: string; 
  label: string;
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      {icon}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-5xl font-bold mb-2"
      >
        {value}
      </motion.div>
      <div className="text-sm uppercase">Million</div>
      <div className="text-gray-400">{label}</div>
    </motion.div>
  );
}