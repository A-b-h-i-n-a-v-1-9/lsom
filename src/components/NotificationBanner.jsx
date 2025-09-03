import { useState, useEffect } from "react";
import { Bell, X } from "lucide-react";

export default function NotificationBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [autoShown, setAutoShown] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!autoShown) {
                setShowBanner(true);
                setAutoShown(true);
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, [autoShown]);

    const toggleNotification = () => {
        setShowBanner(!showBanner);
        setNotificationOpen(!notificationOpen);
    };

    const dismiss = () => {
        setShowBanner(false);
        setNotificationOpen(false);
    };

    return (
        <>
            {/* Bell Icon */}
            <div className="fixed top-4 right-4 z-50">
                <button
                    onClick={toggleNotification}
                    className="relative bg-white dark:bg-zinc-800 p-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition"
                >
                    <Bell className="w-7 h-7 text-yellow-400 fill-yellow-400 stroke-yellow-400" />

                    {!notificationOpen && (
                        <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            1
                        </span>
                    )}
                </button>
            </div>

            {/* Notification Pop-up */}
            {showBanner && (
                <div className="fixed top-20 right-4 z-50 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-2xl shadow-2xl px-6 py-5 w-[95%] max-w-[420px] animate-slide-in">
                    <div className="flex justify-between items-start gap-4">
                        <div className="text-[15px] text-gray-900 dark:text-gray-100 leading-relaxed">
                            🏃‍♂️ Want to join real running groups near you in Pune?<br />
                            <span className="block mt-1">
                                Connect with runners who meet regularly in your area.
                            </span>
                            <a
                                href="https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-600 dark:text-yellow-400 underline font-semibold mt-2 inline-block"
                            >
                                View the runners' contact sheet
                            </a>
                        </div>

                        <button onClick={dismiss} className="text-gray-400 hover:text-red-500 mt-1">
                            <X size={18} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
// import { useState } from "react";
// import { Bell } from "lucide-react";

// export default function NotificationBanner() {
//     const [notificationOpen, setNotificationOpen] = useState(false);

//     const toggleNotification = () => {
//         setNotificationOpen(!notificationOpen);
//     };

//     const dismiss = () => {
//         setNotificationOpen(false);
//     };

//     return (
//         <>
//             {/* Bell Icon */}
//             <div className="fixed top-4 right-4 z-50">
//                 <button
//                     onClick={toggleNotification}
//                     className="relative bg-white dark:bg-zinc-800 p-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition"
//                 >
//                     <Bell className="w-7 h-7 text-yellow-400 fill-yellow-400 stroke-yellow-400" />
//                     {!notificationOpen && (
//                         <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
//                             1
//                         </span>
//                     )}
//                 </button>
//             </div>

//             {/* Full Page Popup */}
//             {notificationOpen && (
//                 <div
//                     className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
//                     role="dialog"
//                     aria-modal="true"
//                     aria-labelledby="popup-title"
//                 >
//                     <div className="bg-orange-100 rounded-lg shadow-lg max-w-6xl w-full max-h-[90vh] relative flex flex-col md:flex-row overflow-y-auto">
//                         {/* Close Button */}
//                         <button
//                             onClick={dismiss}
//                             className="absolute top-3 right-3 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//                             aria-label="Close popup"
//                         >
//                             ✕
//                         </button>

//                         {/* Image */}
//                         <div className="w-full md:w-1/2 flex-shrink-0">
//                             <img
//                                 src="/assets/ganpati-banner.jpg"
//                                 alt="Ganpati festival banner"
//                                 className="w-full h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
//                                 loading="lazy"
//                             />
//                         </div>

//                         {/* FAQ Content */}
//                         <div className="p-6 text-orange-900 space-y-6 w-full md:w-1/2 flex-grow">
//                             <h2 id="popup-title" className="text-2xl font-bold text-center">
//                                 📜 Maanache Ganpati Walk<br />– Key Information
//                             </h2>

//                             <div className="space-y-4 text-base">
//                                 <div>
//                                     <strong>1. What is the sequence of mandals we will visit?</strong>
//                                     <p className="mt-1">
//                                         Kasba → Tambdi Jogeshwari → Guruji Talim → Tulsibaug → Kesari Wada
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <strong>2. What if I arrive late?</strong>
//                                     <p className="mt-1">
//                                         Follow the sequence from Kasba to Kesari Wada; you will find the group along the route.
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <strong>3. What is the best way to reach Shaniwarwada?</strong>
//                                     <p className="mt-1">
//                                         - Best: Auto or two-wheeler<br />
//                                         - Alternative: Cab<br />
//                                         - Avoid: Personal car (parking is difficult)
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <strong>4. What will we do between 3:30 and 3:55 PM?</strong>
//                                     <p className="mt-1">Introductions and photos.</p>
//                                 </div>
//                                 <div>
//                                     <strong>5. Should I carry an umbrella or raincoat?</strong>
//                                     <p className="mt-1">Yes, rain is forecasted.</p>
//                                 </div>
//                                 <div>
//                                     <strong>6. How long will the walk take?</strong>
//                                     <p className="mt-1">Till 5:00–5:15 PM.</p>
//                                 </div>
//                                 <div>
//                                     <strong>7. Will we visit Dagdusheth Ganpati?</strong>
//                                     <p className="mt-1">Yes, from a distance due to crowds.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

