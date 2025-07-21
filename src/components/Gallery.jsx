export default function Gallery() {
  const albums = [
    
    {
      title: "NC-LSOM-2025",
      thumb: "https://www.lsom.in/assets/images/wakadlsom-1-979x639.jpg",
      link: "https://drive.google.com/drive/u/0/folders/1Rd6QksMdtnM6b4fAgjozouBvvRiEpUDn",
      participants: 118,
      date: "February 25, 2025"
    },
    
  ];

  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-gray-700 rounded-full mb-4">
            Event Gallery
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Race Day Moments
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Captured memories from our running community
          </p>
        </div>

        {/* Album Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200 dark:border-gray-700"
            >
              {/* Image with overlay */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={album.thumb} 
                  alt={`${album.title} marathon`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-600 text-white">
                    {album.participants} runners
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
                    {album.date.split(' ')[0]}
                  </span>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white">{album.title}</h3>
                  <p className="text-sm text-gray-300">{album.date}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-5 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Google Photos</p>
                </div>
                <a
                  href={album.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium transition-colors"
                >
                  View All Photos
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors duration-200">
            View All Past Events
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}