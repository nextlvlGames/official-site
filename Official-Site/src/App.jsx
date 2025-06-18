import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import EmployeeVerification from './components/EmployeeVerification';
import BusinessCanvas from './components/BusinessCanvas';
import ContactForm from './components/ContactForm';
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
            
            {/* Social Media Links - NEW POSITION */}
            <div className="mt-8 flex justify-center gap-5">
              <a 
                href="https://www.youtube.com/nextlvlgames" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-transform hover:scale-110"
                title="YouTube"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true" fill="#FF0000">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/esports.nextlvlgames?igsh=dzZvMmRuaXluNmkx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-transform hover:scale-110"
                title="Instagram"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true" fill="#E1306C">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/nextlevel-games02/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-transform hover:scale-110"
                title="LinkedIn"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://t.me/nextlvlgames" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-transform hover:scale-110"
                title="Telegram"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true" fill="#0088CC">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a 
                href="https://discord.gg/nextlvlgames" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-transform hover:scale-110"
                title="Discord"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true" fill="#5865F2">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
              <a 
                href="https://www.reddit.com/r/nextlvlgames" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-transform hover:scale-110"
                title="Reddit"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true" fill="#FF4500">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/message/NEXTLVLGAMES" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-transform hover:scale-110"
                title="WhatsApp"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
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

        {/* Contact Section - Updated with EmailJS Component */}
        <section id="contact" className="bg-soulblue-800 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-soulblue-400">Contact Us</h2>
            <p className="mt-3 sm:mt-4 text-gray-300 mb-8">Have questions? Reach out to us!</p>
            
            {/* Replace the old form with the new EmailJS form */}
            <ContactForm />
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

// Also update the NavBar component for internal pages
function NavBar({ transparent = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
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
    </>
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
 