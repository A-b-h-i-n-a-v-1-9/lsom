import { useState } from 'react';

export default function InfoSection() {
  const [activeTab, setActiveTab] = useState('about');
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleCheck = (index) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter(item => item !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700 mb-8">
          {[
            { id: 'about', label: 'About LSoM' },
            { id: 'expect', label: 'What to Expect' },
            { id: 'know', label: 'What You Should Know' }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-3 font-medium text-sm md:text-base transition-colors ${
                activeTab === tab.id 
                  ? 'text-green-600 dark:text-green-400 border-b-2 border-green-500' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-10">
          {/* About LSoM */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-full">
                  <span className="text-2xl">🏃‍♂️</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What is LSoM?</h2>
              </div>
              
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Every <strong className="text-green-600 dark:text-green-400">"Last Sunday of Month"</strong>, runners across Pune come together for a community run that breaks down barriers. Unlike commercial races with high fees, LSoM keeps running accessible while fostering camaraderie among runners of all levels.
              </p>
              
              <div className="p-6 bg-green-50/50 dark:bg-gray-800 rounded-xl border border-green-100 dark:border-gray-700">
                <h3 className="font-semibold text-lg text-green-700 dark:text-green-300 mb-4">Why Our Community Runs Different</h3>
                <ul className="space-y-3">
                  {[
                    { text: "No expensive registrations", emoji: "💰" },
                    { text: "Meet diverse runners from across Pune", emoji: "👥" },
                    { text: "Scenic routes changing monthly", emoji: "🌄" },
                    { text: "Eco-conscious running initiative", emoji: "♻️" }
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start cursor-pointer group"
                      onClick={() => toggleCheck(index)}
                    >
                      <span className={`inline-flex items-center justify-center w-6 h-6 mt-1 mr-3 rounded transition-colors ${
                        checkedItems.includes(index)
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-400 group-hover:bg-green-100 dark:group-hover:bg-green-900/30'
                      }`}>
                        {checkedItems.includes(index) ? (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-xs">{item.emoji}</span>
                        )}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* What to Expect */}
          {activeTab === 'expect' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Your Run Day Experience</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Before Run */}
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-xl">🌅</span>
                    </div>
                    <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">Before the Run</h3>
                  </div>
                  <ul className="space-y-3 pl-2">
                    {[
                      "Registration & Bib collection",
                      "New runner orientation",
                      "Group warm-up session",
                      "Run briefing & safety notes"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-5 h-5 mr-3 text-green-500">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* After Run */}
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-xl">🏁</span>
                    </div>
                    <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">After the Run</h3>
                  </div>
                  <ul className="space-y-3 pl-2">
                    {[
                      "Cool-down stretching session",
                      "Hydration & healthy snacks",
                      "Group photo opportunities",
                      "Route discussion & feedback",
                      "8:00 AM - Event concludes"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-5 h-5 mr-3 text-green-500">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50/50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-200 dark:border-blue-900/30">
                <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Monthly Organizers</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Each month a different running group takes the initiative to organize the event, bringing fresh energy and perspectives to our community runs.
                </p>
              </div>
            </div>
          )}

          {/* What You Should Know */}
          {activeTab === 'know' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Essential Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Requirements */}
                <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-xl border border-orange-200 dark:border-orange-900/20">
                  <h3 className="font-semibold text-lg text-orange-700 dark:text-orange-300 mb-4">Participation Requirements</h3>
                  <ul className="space-y-3">
                    {[
                      "Mandatory registration (no on-spot entries)",
                      "Visible bib worn on chest throughout run",
                      "Carry your own water bottle (refill stations available)",
                      "No refunds for missed runs"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-5 h-5 mr-3 mt-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 rounded-full text-xs">!</span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Attire */}
                <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-xl border border-purple-200 dark:border-purple-900/20">
                  <h3 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-4">What to Wear</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Wear what makes you comfortable - we celebrate diversity in running attire:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["T-shirts", "Shorts", "Tights", "Sarees", "Churidars", "Dhotis", "Sleeveless"].map((item, index) => (
                      <span key={index} className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Disclaimer */}
              <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-200 dark:border-red-900/20 mt-6">
                <h3 className="font-semibold text-lg text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>Important Disclaimer</span>
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Participation is at your own risk. Organizers are not responsible for any injuries, incidents, or property loss. Runners acknowledge they are not covered by event insurance and assume all responsibility for their safety.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}