import React, { useEffect, useState } from 'react';

const Pages = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading (replace with actual API fetch if needed)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                    <p className="mt-4 text-blue-600 font-semibold text-lg">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">About Us</h3>
                    <p className="text-gray-600 text-sm">Learn more about our blog team and purpose.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Contact</h3>
                    <p className="text-gray-600 text-sm">Get in touch with us for any inquiries.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Privacy Policy</h3>
                    <p className="text-gray-600 text-sm">Read how we protect your personal data.</p>
                </div>
                {/* ✅ New Agro Page Card */}
                <div className="p-6 bg-white rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">Agro</h3>
                    <p className="text-gray-600 text-sm">
                        Explore agriculture blogs, tips, and modern farming techniques.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Pages;
