import React from "react";
import useFetch from "../../hooks/useFetch";

const Lifestyle = () => {
  const { data, error } = useFetch({ url: "blogs.json" });

  if (error)
    return <p className="text-center text-red-500 mt-8">Error: {error}</p>;

  const lifestyleBlogs = data?.filter(
    (blog) => blog.category?.toLowerCase() === "lifestyle"
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 🌿 Lifestyle Banner Section */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1600&q=80"
          alt="Lifestyle Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 animate-fadeInDown">
            Explore <span className="text-yellow-300">Lifestyle</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Discover ideas, inspirations, and stories to live a more balanced
            and fulfilling life.
          </p>
        </div>
      </section>

      {/* 🌿 Lifestyle Blogs Section */}
      <div className="p-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-emerald-700">
          Lifestyle Blogs
        </h2>

        {lifestyleBlogs && lifestyleBlogs.length > 0 ? (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {lifestyleBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent w-full p-4 text-white">
                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {blog.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={blog.authorImg}
                        alt={blog.author}
                        className="w-9 h-9 rounded-full border-2 border-gray-200"
                      />
                      <div>
                        <p className="text-sm font-medium">{blog.author}</p>
                        <p className="text-xs text-gray-400">{blog.date}</p>
                      </div>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            No lifestyle blogs found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Lifestyle;
