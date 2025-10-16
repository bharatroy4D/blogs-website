import React from "react";

const Pages = () => {
  const pagesData = [
    {
      title: "About Us",
      description: "Learn more about our team, mission, and vision.",
      color: "text-blue-600",
    },
    {
      title: "Contact",
      description: "Reach out to us for queries, collaborations, or support.",
      color: "text-purple-600",
    },
    {
      title: "Privacy Policy",
      description: "Understand how we handle and protect your personal data.",
      color: "text-pink-600",
    },
    {
      title: "Agro",
      description: "Explore agriculture blogs, tips, and modern farming techniques.",
      color: "text-green-600",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ===== Hero Banner ===== */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
          alt="Pages Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-indigo-600/30"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Explore Our Pages
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Access all the essential sections of our blog website in one place
          </p>
        </div>
      </section>

      {/* ===== Pages Grid ===== */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {pagesData.map((page, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 overflow-hidden"
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-50 to-transparent opacity-0 group-hover:opacity-30 transition duration-300"></div>
            
            <div className="p-8 relative z-10">
              <h3
                className={`text-2xl font-bold mb-4 group-hover:underline ${page.color}`}
              >
                {page.title}
              </h3>
              <p className="text-gray-600 mb-6">{page.description}</p>
              <button className="px-5 py-2 text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Pages;
