import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import EmployeeVerification from './components/EmployeeVerification';
import BusinessCanvas from './components/BusinessCanvas';
import { verifyEmployeeByCode } from './utils/employeeVerification';

function HomePage() {
  const [secretCode, setSecretCode] = useState('');
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const verifyEmployee = async () => {
    try {
      // Use the utility function for verification
      const result = verifyEmployeeByCode(secretCode);
      
      // Update the UI with the verification result
      setVerificationStatus(result.message);
      
      // If verification was successful, redirect to the employee page
      if (result.success && result.redirectUrl) {
        window.location.href = result.redirectUrl;
      }
    } catch (error) {
      console.error('Error verifying employee:', error);
      setVerificationStatus('Error verifying employee');
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-soulblue-700 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/images/logo.png" alt="NextLvlGames" className="h-8 sm:h-10 w-auto" />
              <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold">NextLvlGames</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            <a href="#home" className="text-white hover:text-soulblue-400 text-sm lg:text-base">Home</a>
            <a href="#about" className="text-white hover:text-soulblue-400 text-sm lg:text-base">About</a>
            <a href="#products" className="text-white hover:text-soulblue-400 text-sm lg:text-base">Products</a>
            <a href="#future" className="text-white hover:text-soulblue-400 text-sm lg:text-base">Future</a>
            <a href="#contact" className="text-white hover:text-soulblue-400 text-sm lg:text-base">Contact</a>
            <Link to="/business-canvas" className="text-white hover:text-soulblue-400 text-sm lg:text-base">Business Plan</Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-soulblue-800">
              <a 
                href="#home" 
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-soulblue-400 hover:bg-soulblue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-soulblue-400 hover:bg-soulblue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#products" 
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-soulblue-400 hover:bg-soulblue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#future" 
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-soulblue-400 hover:bg-soulblue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Future
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-soulblue-400 hover:bg-soulblue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Link 
                to="/business-canvas"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-soulblue-400 hover:bg-soulblue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Business Plan
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="bg-soulblue-800 py-12 sm:py-16 md:py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Welcome to <span className="text-soulblue-400">NextLvlGames</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 px-2">
              Revolutionizing gaming with our proprietary eSports platform and future game development.
            </p>
            <a
              href="https://esports.nextlvlgames.site"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-6 inline-block bg-soulblue-500 hover:bg-soulblue-400 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg transition text-sm sm:text-base"
            >
              Explore Our eSports Platform
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-soulblue-700 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-soulblue-400 text-center">About Us</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-soulblue-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-soulblue-400 mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  At NextLvlGames, our mission is to dominate the gaming industry and visual entertainment space 
                  through innovative eSports platforms and captivating animated content. We aim to create immersive 
                  gaming experiences while expanding into animated films and shorts that redefine visual storytelling.
                </p>
              </div>
              <div className="bg-soulblue-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-soulblue-400 mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  We envision a future where NextLvlGames is recognized as a leader in both competitive gaming and 
                  visual entertainment. By leveraging our creative expertise across gaming and animation, we aim to 
                  build worlds and stories that captivate audiences across multiple mediums.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="bg-soulblue-800 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-soulblue-400">Our Product</h2>
            <p className="mt-4 text-gray-300">
              Our proprietary eSports platform offers tournament management, performance analytics, and more.
            </p>
          </div>
        </section>

        {/* Future Plans Section */}
        <section id="future" className="bg-soulblue-700 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-soulblue-400 text-center">Future Plans</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-soulblue-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-soulblue-400 mb-4">Game Development</h3>
                <p className="text-gray-300">
                  We're expanding into game development, with plans to release games on mobile and PC platforms that 
                  integrate seamlessly with our eSports ecosystem.
                </p>
              </div>
              <div className="bg-soulblue-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-soulblue-400 mb-4">Animation Studio</h3>
                <p className="text-gray-300">
                  We're building an in-house animation studio focused on creating stunning animated films and shorts. 
                  Unlike traditional streaming platforms, we're focusing on original animated content that complements 
                  our gaming worlds and expands our storytelling capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-soulblue-800 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-soulblue-400">Contact Us</h2>
            <p className="mt-3 sm:mt-4 text-gray-300">Have questions? Reach out to us!</p>
            <form className="mt-6 sm:mt-8 max-w-md mx-auto space-y-3 sm:space-y-4 px-3 sm:px-0">
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
        <section id="employee-verification" className="bg-soulblue-700 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-soulblue-400">Employee Verification</h2>
            <p className="mt-3 sm:mt-4 text-gray-300">Enter your secret code to verify your employee status.</p>
            <div className="mt-6 sm:mt-8 max-w-md mx-auto space-y-3 sm:space-y-4 px-3 sm:px-0">
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
                <p className={`mt-3 sm:mt-4 font-bold ${verificationStatus === 'Verified' ? 'text-green-400' : 'text-red-400'}`}>
                  {verificationStatus}
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-soulblue-900 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm sm:text-base">&copy; 2024 NextLvlGames. All rights reserved.</p>
            
            <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              <a 
                href="https://esports.nextlvlgames.site/contact.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-soulblue-400 text-sm sm:text-base"
              >
                Contact
              </a>
              <a 
                href="https://esports.nextlvlgames.site/terms-and-conditions.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-soulblue-400 text-sm sm:text-base"
              >
                Terms &amp; Conditions
              </a>
              <a 
                href="https://esports.nextlvlgames.site/privacy-policy.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-soulblue-400 text-sm sm:text-base"
              >
                Privacy Policy
              </a>
              <a 
                href="https://esports.nextlvlgames.site/blog.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-soulblue-400 text-sm sm:text-base"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Add a NavBar component for shared navigation across pages
function NavBar({ transparent = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`${transparent ? 'bg-transparent' : 'bg-soulblue-700'} shadow-lg sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="NextLvlGames" className="h-8 sm:h-10 w-auto" />
            <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold">NextLvlGames</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          <Link to="/" className="text-white hover:text-soulblue-400 text-sm lg:text-base">Home</Link>
          <Link to="/business-canvas" className="text-white hover:text-soulblue-400 text-sm lg:text-base">Business Plan</Link>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-soulblue-800">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-soulblue-400 hover:bg-soulblue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/business-canvas"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-soulblue-400 hover:bg-soulblue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Business Plan
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// Update the BusinessCanvas component wrapper
function BusinessCanvasWrapper() {
  return (
    <div className="min-h-screen flex flex-col bg-soulblue-800">
      <NavBar />
      <BusinessCanvas />
    </div>
  );
}

// Update the EmployeeVerification component wrapper
function EmployeeVerificationWrapper() {
  return (
    <div className="min-h-screen flex flex-col bg-soulblue-800">
      <NavBar />
      <div className="flex-grow">
        <EmployeeVerification />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/verify" element={<EmployeeVerificationWrapper />} />
        <Route path="/business-canvas" element={<BusinessCanvasWrapper />} />
        {/* Add a catch-all route that redirects to the home page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
