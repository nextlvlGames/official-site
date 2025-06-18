import { useState } from 'react';

function BusinessCanvas() {
  const [activeSection, setActiveSection] = useState(null);
  
  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };
  
  return (
    <div className="flex-grow">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-4 sm:mb-8">
          NextLvlGames <span className="text-soulblue-400">Business Canvas</span>
        </h1>
        
        <div className="mb-6 sm:mb-8">
          <p className="text-gray-300 text-center max-w-3xl mx-auto text-sm sm:text-base">
            Our strategic roadmap showcasing our current focus, upcoming projects, and future expansion plans in gaming and visual entertainment.
          </p>
        </div>
        
        {/* Visual Business Canvas - More responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {/* Current Focus */}
          <div 
            className={`bg-soulblue-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer ${
              activeSection === 'current' ? 'col-span-1 sm:col-span-2 lg:col-span-3 row-span-auto' : ''
            }`}
            onClick={() => handleSectionClick('current')}
          >
            <div className="bg-soulblue-600 px-4 py-3 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">Current Focus</h3>
              <span className="text-white bg-soulblue-500 px-2 py-1 rounded text-sm">2024</span>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="bg-soulblue-500 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-white">eSports Platform</h4>
              </div>
              <p className="text-gray-300 ml-11">
                Our proprietary tournament management system and performance analytics platform for competitive gaming.
              </p>
              
              {activeSection === 'current' && (
                <div className="mt-6 ml-11 space-y-3">
                  <div className="bg-soulblue-800 p-3 rounded">
                    <h5 className="text-soulblue-400 font-medium">Key Features:</h5>
                    <ul className="list-disc list-inside text-gray-300 mt-2 ml-2">
                      <li>Tournament creation and management</li>
                      <li>Player performance analytics</li>
                      <li>Team management tools</li>
                      <li>Live match tracking</li>
                      <li>Integrated streaming capabilities</li>
                    </ul>
                  </div>
                  
                  <div className="bg-soulblue-800 p-3 rounded">
                    <h5 className="text-soulblue-400 font-medium">Target Market:</h5>
                    <ul className="list-disc list-inside text-gray-300 mt-2 ml-2">
                      <li>Amateur and professional esports teams</li>
                      <li>Tournament organizers</li>
                      <li>Gaming communities</li>
                      <li>Streaming platforms</li>
                    </ul>
                  </div>
                  
                  <div className="bg-soulblue-800 p-3 rounded">
                    <h5 className="text-soulblue-400 font-medium">Revenue Model:</h5>
                    <ul className="list-disc list-inside text-gray-300 mt-2 ml-2">
                      <li>Subscription-based platform access</li>
                      <li>Premium features and analytics</li>
                      <li>Tournament hosting fees</li>
                      <li>Advertising and sponsorships</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Near Future */}
          <div 
            className={`bg-soulblue-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer ${
              activeSection === 'near' ? 'col-span-1 sm:col-span-2 lg:col-span-3 row-span-auto' : ''
            }`}
            onClick={() => handleSectionClick('near')}
          >
            <div className="bg-soulblue-600 px-4 py-3 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">Near Future</h3>
              <span className="text-white bg-soulblue-500 px-2 py-1 rounded text-sm">2024-2025</span>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="bg-soulblue-500 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-white">Game Development & Distribution</h4>
              </div>
              <p className="text-gray-300 ml-11">
                Creating and publishing our own games across multiple platforms including mobile, PC, and WebGL.
              </p>
              
              {activeSection === 'near' && (
                <div className="mt-6 ml-11 space-y-3">
                  <div className="bg-soulblue-800 p-3 rounded">
                    <h5 className="text-soulblue-400 font-medium">Platforms:</h5>
                    <ul className="list-disc list-inside text-gray-300 mt-2 ml-2">
                      <li>Mobile (iOS & Android)</li>
                      <li>PC (Steam, Epic Games Store)</li>
                      <li>Web-based (WebGL)</li>
                      <li>Console (future consideration)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-soulblue-800 p-3 rounded">
                    <h5 className="text-soulblue-400 font-medium">Game Types:</h5>
                    <ul className="list-disc list-inside text-gray-300 mt-2 ml-2">
                      <li>Competitive multiplayer games</li>
                      <li>eSports-ready titles</li>
                      <li>Casual mobile experiences</li>
                      <li>Narrative-driven single-player games</li>
                    </ul>
                  </div>
                  
                  <div className="bg-soulblue-800 p-3 rounded">
                    <h5 className="text-soulblue-400 font-medium">Integration:</h5>
                    <ul className="list-disc list-inside text-gray-300 mt-2 ml-2">
                      <li>Seamless connection with our eSports platform</li>
                      <li>Built-in tournament capabilities</li>
                      <li>Cross-platform play</li>
                      <li>Shared universe across titles</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Future Expansion */}
          <div 
            className={`bg-soulblue-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer ${
              activeSection === 'future' ? 'col-span-1 sm:col-span-2 lg:col-span-3 row-span-auto' : ''
            }`}
            onClick={() => handleSectionClick('future')}
          >
            <div className="bg-soulblue-600 px-4 py-3 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">Future Expansion</h3>
              <span className="text-white bg-soulblue-500 px-2 py-1 rounded text-sm">2025-2027</span>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="bg-soulblue-500 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-white">Web Content Ecosystem</h4>
              </div>
              <p className="text-gray-300 ml-11">
                Expanding our digital presence with specialized subdomains catering to different aspects of gaming and entertainment.
              </p>
              
              {activeSection === 'future' && (
                <div className="mt-6 ml-11 space-y-3">
                  <div className="bg-soulblue-800 p-3 rounded grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <h5 className="text-soulblue-400 font-medium">learn.nextlvlgames.site</h5>
                      <p className="text-gray-300 text-sm mt-1">Educational content focused on game development, design, and eSports skills</p>
                    </div>
                    
                    <div>
                      <h5 className="text-soulblue-400 font-medium">news.nextlvlgames.site</h5>
                      <p className="text-gray-300 text-sm mt-1">Gaming industry news, updates on our products, and eSports coverage</p>
                    </div>
                    
                    <div>
                      <h5 className="text-soulblue-400 font-medium">freetoplay.nextlvlgames.site</h5>
                      <p className="text-gray-300 text-sm mt-1">Portal for free browser-based games and demos of our premium titles</p>
                    </div>
                    
                    <div>
                      <h5 className="text-soulblue-400 font-medium">ai.nextlvlgames.site</h5>
                      <p className="text-gray-300 text-sm mt-1">AI-powered gaming tools, analytics, and experimental features</p>
                    </div>
                    
                    <div>
                      <h5 className="text-soulblue-400 font-medium">films.nextlvlgames.site</h5>
                      <p className="text-gray-300 text-sm mt-1">Original animated films and shorts set in our game universes</p>
                    </div>
                  </div>
                  
                  <div className="bg-soulblue-800 p-3 rounded">
                    <h5 className="text-soulblue-400 font-medium">Content Strategy:</h5>
                    <ul className="list-disc list-inside text-gray-300 mt-2 ml-2">
                      <li>Create interconnected content across platforms</li>
                      <li>Expand our IP through various media formats</li>
                      <li>Build community around specific interests</li>
                      <li>Leverage cross-promotion between platforms</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Business Analysis */}
        <div className="bg-soulblue-700 rounded-lg shadow-lg p-4 sm:p-6 mb-8">
          <h2 className="text-2xl font-bold text-soulblue-400 mb-4">Business Strategy</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Strengths</h3>
              <ul className="list-disc list-inside text-gray-300 ml-4">
                <li>Diversified business model spanning multiple aspects of gaming</li>
                <li>Vertical integration from platform to content creation</li>
                <li>Building a cohesive brand identity across different media</li>
                <li>Focus on both competitive gaming and entertainment content</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Opportunities</h3>
              <ul className="list-disc list-inside text-gray-300 ml-4">
                <li>Growing global eSports market with increasing mainstream acceptance</li>
                <li>Rising demand for cross-media entertainment experiences</li>
                <li>Potential for community-driven content and monetization</li>
                <li>Emerging technologies (AR, VR, AI) opening new gaming frontiers</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Strategic Priorities</h3>
              <ul className="list-disc list-inside text-gray-300 ml-4">
                <li><span className="text-soulblue-400 font-medium">eSports Platform Excellence:</span> Perfecting our eSports platform as our foundation for growth</li>
                <li><span className="text-soulblue-400 font-medium">Community Building:</span> Fostering a strong community around our platforms and content</li>
                <li><span className="text-soulblue-400 font-medium">Strategic Partnerships:</span> Collaborating with game developers to expand our ecosystem</li>
                <li><span className="text-soulblue-400 font-medium">Talent Development:</span> Investing in skilled developers and content creators</li>
                <li><span className="text-soulblue-400 font-medium">Technology Integration:</span> Creating seamless experiences across all our platforms</li>
                <li><span className="text-soulblue-400 font-medium">Data-Driven Growth:</span> Using analytics to improve user experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer - Keep at bottom */}
      <footer className="bg-soulblue-900 py-4 sm:py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center">
            <p className="text-gray-400 mb-2 sm:mb-3 text-xs sm:text-sm">&copy; 2024 NextLvlGames. All rights reserved.</p>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <a 
                href="https://esports.nextlvlgames.site/contact.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-soulblue-400"
              >
                Contact
              </a>
              <a 
                href="https://esports.nextlvlgames.site/terms-and-conditions.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-soulblue-400"
              >
                Terms &amp; Conditions
              </a>
              <a 
                href="https://esports.nextlvlgames.site/privacy-policy.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-soulblue-400"
              >
                Privacy Policy
              </a>
              <a 
                href="https://esports.nextlvlgames.site/blog.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-soulblue-400"
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

export default BusinessCanvas;
