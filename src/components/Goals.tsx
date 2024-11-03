import { Button } from '@/components/ui/button';

export function Goals() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SET GOALS.
              <br />
              LOG WORKOUTS.
              <br />
              STAY ON TRACK.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Track your runs effectively with Freddy's Pace, and discover new routes. Practice Progress to craft your goals.
            </p>
            <Button size="lg">GET STARTED</Button>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1974"
              alt="Runner"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}