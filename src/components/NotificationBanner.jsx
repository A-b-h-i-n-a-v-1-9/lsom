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
