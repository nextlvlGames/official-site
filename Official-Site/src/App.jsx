import { useState } from 'react';

function App() {
  const [secretCode, setSecretCode] = useState('');
  const [verificationStatus, setVerificationStatus] = useState(null);

  const verifyEmployee = async () => {
    try {
      const response = await fetch('/api/verify-employee', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secretCode }),
      });
      const data = await response.json();
      if (data.verified) {
        setVerificationStatus('Verified');
      } else {
        setVerificationStatus('Not Verified');
      }
    } catch (error) {
      setVerificationStatus('Error verifying employee');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-soulblue-700 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="NextLvlGames" className="h-10 w-auto" />
            <span className="ml-3 text-xl font-bold">NextLvlGames</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-soulblue-400">Home</a>
            <a href="#about" className="text-white hover:text-soulblue-400">About</a>
            <a href="#products" className="text-white hover:text-soulblue-400">Products</a>
            <a href="#future" className="text-white hover:text-soulblue-400">Future</a>
            <a href="#contact" className="text-white hover:text-soulblue-400">Contact</a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="bg-soulblue-800 py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Welcome to <span className="text-soulblue-400">NextLvlGames</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Revolutionizing gaming with our proprietary eSports platform and future game development.
            </p>
            <a
              href="https://esports.nextlvlgames.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-soulblue-500 hover:bg-soulblue-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition"
            >
              Explore Our eSports Platform
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-soulblue-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-soulblue-400">About Us</h2>
            <p className="mt-4 text-gray-300">
              At NextLvlGames, we aim to create immersive gaming experiences and foster a thriving eSports community.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="bg-soulblue-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-soulblue-400">Our Product</h2>
            <p className="mt-4 text-gray-300">
              Our proprietary eSports platform offers tournament management, performance analytics, and more.
            </p>
          </div>
        </section>

        {/* Future Plans Section */}
        <section id="future" className="bg-soulblue-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-soulblue-400">Future Plans</h2>
            <p className="mt-4 text-gray-300">
              We're expanding into game development, with plans to release games on mobile and PC platforms.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-soulblue-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-soulblue-400">Contact Us</h2>
            <p className="mt-4 text-gray-300">Have questions? Reach out to us!</p>
            <form className="mt-8 max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-soulblue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-soulblue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-soulblue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-soulblue-400"
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 bg-soulblue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-soulblue-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-soulblue-500 hover:bg-soulblue-400 text-white font-bold py-2 rounded-lg shadow-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Employee Verification Section */}
        <section id="employee-verification" className="bg-soulblue-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-soulblue-400">Employee Verification</h2>
            <p className="mt-4 text-gray-300">Enter your secret code to verify your employee status.</p>
            <div className="mt-8 max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Enter Secret Code"
                value={secretCode}
                onChange={(e) => setSecretCode(e.target.value)}
                className="w-full px-4 py-2 bg-soulblue-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-soulblue-400"
              />
              <button
                onClick={verifyEmployee}
                className="w-full bg-soulblue-500 hover:bg-soulblue-400 text-white font-bold py-2 rounded-lg shadow-lg transition"
              >
                Verify
              </button>
              {verificationStatus && (
                <p className={`mt-4 font-bold ${verificationStatus === 'Verified' ? 'text-green-400' : 'text-red-400'}`}>
                  {verificationStatus}
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-soulblue-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400">&copy; 2024 NextLvlGames. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
