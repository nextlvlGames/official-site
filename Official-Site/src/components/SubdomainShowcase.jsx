import React from 'react';

function SubdomainShowcase() {
  const subdomains = [
    {
      name: "ai.nextlvlgames.site",
      description: "AI-powered gaming tools, analytics, and experimental features",
      icon: "🤖",
      image: "/images/ai-domain.jpg",
      fallbackImage: "https://via.placeholder.com/600x300/1a4b84/ffffff?text=AI+Gaming+Tools",
      features: ["Performance analytics", "Custom AI opponents", "Strategy assistants", "Content generation"],
      launchDate: "Q3 2025",
      priority: "High",
      status: "First Priority after eSports Platform"
    },
    {
      name: "learn.nextlvlgames.site",
      description: "Educational platform focusing on game development, design, and eSports skills",
      icon: "🧠",
      image: "/images/learn-domain.jpg", 
      fallbackImage: "https://via.placeholder.com/600x300/1a4b84/ffffff?text=Learning+Platform",
      features: ["Interactive tutorials", "Expert masterclasses", "Project-based learning", "Community challenges"],
      launchDate: "Q1 2026"
    },
    {
      name: "freetoplay.nextlvlgames.site",
      description: "Hub for browser-based games and demos of our premium titles",
      icon: "🎯",
      image: "/images/freetoplay-domain.jpg",
      fallbackImage: "https://via.placeholder.com/600x300/1a4b84/ffffff?text=Free+To+Play+Hub",
      features: ["Instant-play browser games", "Exclusive demos", "Seasonal events", "Community tournaments"],
      launchDate: "Q2 2026"
    },
    {
      name: "news.nextlvlgames.site",
      description: "Gaming industry news, updates on our products, and eSports coverage",
      icon: "📰",
      image: "/images/news-domain.jpg",
      fallbackImage: "https://via.placeholder.com/600x300/1a4b84/ffffff?text=Gaming+News",
      features: ["Daily updates", "Event coverage", "Developer interviews", "Community spotlights"],
      launchDate: "Q3 2026"
    },
    {
      name: "films.nextlvlgames.site",
      description: "Original animated films and shorts set in our game universes",
      icon: "🎬",
      image: "/images/films-domain.jpg",
      fallbackImage: "https://via.placeholder.com/600x300/1a4b84/ffffff?text=Animated+Films",
      features: ["Original series", "Behind-the-scenes", "Character spotlights", "Universe lore"],
      launchDate: "Q1 2027"
    }
  ];

  // Sort subdomains by launch date to ensure AI appears first
  const sortedSubdomains = [...subdomains].sort((a, b) => {
    // Extract year and quarter for comparison
    const getYearQuarter = (date) => {
      const year = parseInt(date.split(' ')[1]);
      const quarter = parseInt(date.split('Q')[1].split(' ')[0]);
      return year * 10 + quarter;
    };
    
    return getYearQuarter(a.launchDate) - getYearQuarter(b.launchDate);
  });

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-soulblue-400 mb-4">Planned Subdomains</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedSubdomains.map((subdomain, index) => (
          <div key={index} className={`bg-soulblue-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${subdomain.name.includes('ai.') ? 'border-2 border-soulblue-400' : ''}`}>
            <div className="h-40 relative overflow-hidden">
              <img 
                src={subdomain.image} 
                alt={subdomain.name}
                className="w-full h-full object-cover"
                onError={(e) => {e.target.onerror = null; e.target.src = subdomain.fallbackImage}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-soulblue-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">{subdomain.icon}</span>
                  <h4 className="text-lg font-bold text-white">{subdomain.name}</h4>
                </div>
                <div className="mt-1 flex flex-wrap gap-2">
                  <div className={`inline-block ${subdomain.name.includes('ai.') ? 'bg-soulblue-400 text-soulblue-900' : 'bg-soulblue-500 text-white'} text-xs py-1 px-2 rounded`}>
                    Launch: {subdomain.launchDate}
                  </div>
                  {subdomain.priority && (
                    <div className="inline-block bg-yellow-500 text-black text-xs py-1 px-2 rounded">
                      {subdomain.priority} Priority
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <p className="text-gray-300 text-sm">{subdomain.description}</p>
              
              {subdomain.status && (
                <div className="mt-2 p-1 bg-soulblue-700 rounded text-center">
                  <span className="text-yellow-400 text-xs font-medium">{subdomain.status}</span>
                </div>
              )}
              
              <div className="mt-3">
                <h5 className="text-soulblue-400 text-sm font-medium mb-2">Key Features:</h5>
                <div className="flex flex-wrap gap-2">
                  {subdomain.features.map((feature, idx) => (
                    <span key={idx} className="bg-soulblue-800 text-gray-300 text-xs py-1 px-2 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubdomainShowcase;
