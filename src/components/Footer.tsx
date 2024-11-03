export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Freddy's Runners</h3>
            <p className="text-gray-400">
              Your ultimate running companion for tracking, improving, and sharing your running journey.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Route Mapping</li>
              <li>Workout Tracking</li>
              <li>Community Challenges</li>
              <li>Training Plans</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}