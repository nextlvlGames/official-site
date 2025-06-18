import React from 'react';

function Timeline() {
  const timelineData = [
    {
      year: 2025,
      title: "Launch Phase",
      items: [
        { 
          title: "eSports Platform", 
          description: "Release of our competitive gaming platform",
          icon: "🎮",
          quarter: "Q1-Q2" 
        },
        { 
          title: "AI Gaming Tools", 
          description: "Launch of AI-powered analytics and features",
          icon: "🤖",
          quarter: "Q3" 
        },
        { 
          title: "Community Building", 
          description: "Growing our core user base across platforms",
          icon: "👥",
          quarter: "Q1-Q4" 
        }
      ],
      color: "from-soulblue-500 to-soulblue-600"
    },
    {
      year: 2026,
      title: "Expansion Phase",
      items: [
        { 
          title: "Game Development", 
          description: "First NextLvlGames original titles",
          icon: "🎲",
          quarter: "Q1-Q2"
        },
        { 
          title: "Mobile Launch", 
          description: "Expansion to iOS and Android platforms",
          icon: "📱",
          quarter: "Q2"
        },
        { 
          title: "Animation Studio", 
          description: "First animated shorts based on our games",
          icon: "🎬",
          quarter: "Q3-Q4"
        }
      ],
      color: "from-soulblue-400 to-soulblue-500"
    },
    {
      year: 2027,
      title: "Integration Phase",
      items: [
        { 
          title: "Web Content Ecosystem", 
          description: "Full deployment of all specialized subdomains",
          icon: "🌐",
          quarter: "Q1-Q2"
        },
        { 
          title: "Animated Film Series", 
          description: "First full-length animated production",
          icon: "🎭",
          quarter: "Q3"
        },
        { 
          title: "Cross-Platform Integration", 
          description: "Seamless experience across all products",
          icon: "🔄",
          quarter: "Q2-Q4"
        }
      ],
      color: "from-soulblue-300 to-soulblue-400"
    }
  ];

  return (
    <div className="relative">
      {/* Horizontal line that connects all timeline points */}
      <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-soulblue-700 via-soulblue-500 to-soulblue-300"></div>
      
      <div className="flex justify-between">
        {timelineData.map((phase, index) => (
          <div key={phase.year} className="relative flex flex-col items-center">
            {/* Year bubble */}
            <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center z-10 shadow-lg transform transition-transform hover:scale-110`}>
              <div className="text-center">
                <div className="font-bold text-2xl text-white">{phase.year}</div>
                <div className="text-xs text-white opacity-80">{phase.title}</div>
              </div>
            </div>
            
            {/* Content */}
            <div className={`mt-6 bg-soulblue-800 rounded-lg p-4 shadow-lg w-full max-w-xs mx-auto transform transition-transform hover:scale-105 border-t-4 border-soulblue-500`}>
              <h3 className="text-lg font-bold text-soulblue-400 mb-3">{phase.title}</h3>
              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-xl mr-2">{item.icon}</span>
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium text-white">{item.title}</span>
                        {item.quarter && (
                          <span className="ml-2 text-xs bg-soulblue-600 text-gray-200 px-1.5 py-0.5 rounded">
                            {item.quarter}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-300">{item.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
