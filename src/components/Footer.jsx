export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6 border-t-2 border-green-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Event Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white mb-2 flex items-center justify-center md:justify-start">
            <span className="mr-2">🏃‍♂️</span>
            <span>LSoM</span>
          </h2>
          <p className="text-sm text-gray-300">Pune, India • Every Last Sunday</p>

          <p className="text-sm text-gray-400 mt-4">
            Any corrections or suggestions for this website? <br></br> Drop an email:
          </p>
          <p className="text-sm mt-1">
            <a href="mailto:nikhil2201@gmail.com" className="text-green-400 hover:underline">
              nikhil2201@gmail.com
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-green-400 transition-colors">Registration</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Route Map</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Results Archive</a></li>
          </ul>
        </div>

        {/* Credits */}
        <div className="text-center md:text-right">
          <p className="text-sm mb-2">
            Built with <span className="text-red-500">❤️</span> by Abhinav for LSoM
          </p>
          <p className="text-xs text-gray-400 mb-1">
            Powered by <a href="https://www.therunnersclub.in/" target="_blank" rel="noopener noreferrer" className="text-green-400 font-medium hover:underline">
              Pune Runners Club
            </a>
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
