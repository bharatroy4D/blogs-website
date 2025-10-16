import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Technology = () => {
  const { data, error } = useFetch({ url: "/blogs.json" });

  if (error) return <p>Error: {error}</p>;

  const technologyBlogs = data?.filter(
    (blog) => blog.category?.toLowerCase() === "technology"
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 🔷 Technology Banner Section */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
          alt="Technology Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-blue-700/5"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 animate-fadeInDown">
            Latest in <span className="text-yellow-300">Technology</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Discover the newest trends, innovations, and insights from the tech world.
          </p>
        </div>
      </section>

      {/* 🔷 Blogs Grid */}
      <div className="container px-5 lg:px-10 py-10 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
          Technology Blogs
        </h2>

        {technologyBlogs?.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyBlogs.map((blog) => (
              <Link key={blog.id} to={`/blogsView/${blog.id}`}>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group bg-white">
                  <div className="overflow-hidden h-32 sm:h-56 lg:h-64">
                    <img
                      src={blog.img}
                      alt={blog.title || "Blog Image"}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                        {blog.category}
                      </span>
                      <span className="hidden lg:inline-flex items-center text-sm text-gray-500 gap-1">
                        <CiCalendarDate className="text-lg" /> {blog.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {blog.title.slice(0, 40)}...
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {blog.description.slice(0, 80)}
                      {blog.description.length > 80 ? "..." : ""}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No technology blogs found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Technology;
