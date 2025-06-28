import React from 'react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-soulblue-800 text-white">
      
      {/* Hero Section */}
      <header className="relative">
        <div className="bg-black bg-opacity-70 absolute inset-0 z-0"></div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-soulblue-300 to-soulblue-500">
              NextLvlGames
            </h1>
            <p className="text-xl mb-8">
              Taking gaming to the next level with immersive experiences and cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-soulblue-500 hover:bg-soulblue-600 rounded-full font-medium transition duration-300">
                Explore Games
              </button>
              <button className="px-8 py-3 bg-transparent border border-white hover:bg-white hover:text-soulblue-800 rounded-full font-medium transition duration-300">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Games Section */}
      <section className="py-20 bg-soulblue-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((game) => (
              <div key={game} className="bg-soulblue-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
                <div className="h-48 bg-soulblue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Game Title {game}</h3>
                  <p className="text-soulblue-200 mb-4">Experience the thrill of this amazing game with stunning graphics and immersive gameplay.</p>
                  <button className="px-4 py-2 bg-soulblue-400 hover:bg-soulblue-500 rounded text-sm font-medium transition duration-300">
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="bg-soulblue-700 h-80 rounded-lg"></div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold mb-6">About NextLvlGames</h2>
              <p className="mb-4">
                At NextLvlGames, we are passionate about creating exceptional gaming experiences that push the boundaries of what's possible.
              </p>
              <p className="mb-4">
                Our team of dedicated developers, designers, and storytellers work together to craft immersive worlds and compelling gameplay that keeps players coming back for more.
              </p>
              <p>
                With a focus on innovation and quality, we strive to take gaming to the next level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-soulblue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="max-w-2xl mx-auto mb-8">Subscribe to our newsletter to receive updates about new games, features, and exclusive content.</p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-3 rounded-l text-black focus:outline-none"
            />
            <button className="px-6 py-3 bg-soulblue-500 hover:bg-soulblue-600 rounded-r font-medium transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-soulblue-900 py-12 border-t border-soulblue-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">NextLvlGames</h3>
              <p className="text-soulblue-400">Taking gaming to the next level</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-4">Games</h4>
                <ul className="space-y-2 text-soulblue-400">
                  <li><a href="#" className="hover:text-white transition">All Games</a></li>
                  <li><a href="#" className="hover:text-white transition">New Releases</a></li>
                  <li><a href="#" className="hover:text-white transition">Coming Soon</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Company</h4>
                <ul className="space-y-2 text-soulblue-400">
                  <li><a href="#" className="hover:text-white transition">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Connect</h4>
                <ul className="space-y-2 text-soulblue-400">
                  <li><a href="#" className="hover:text-white transition">Discord</a></li>
                  <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-soulblue-700 text-soulblue-400 text-center">
            <p>&copy; {new Date().getFullYear()} NextLvlGames. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;