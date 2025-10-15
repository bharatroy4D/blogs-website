import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const categoryColors = {
  travel: "bg-green-500",
  technology: "bg-blue-500",
  lifestyle: "bg-pink-500",
  food: "bg-yellow-500",
  sport: "bg-indigo-500",
  health: "bg-purple-500",
  default: "bg-gray-500",
};

const FromBlog = () => {
  const { data, loading, error } = useFetch({ url: "blogs.json" });

  if (loading)
    return (
      <p className="text-center text-gray-600 text-lg font-medium py-10">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-red-500 text-lg font-medium py-10">
        Error loading blogs.
      </p>
    );

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <SectionTitle title="From The Blog" view="View All" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {data?.slice(0, 8).map((blog) => {
            const colorClass =
              categoryColors[blog.category?.toLowerCase()] ||
              categoryColors.default;

            return (
              <Link
                key={blog.id}
                to={`/blogsView/${blog.id}`}
                className="group flex flex-col lg:flex-row bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-500 overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative lg:w-2/5 overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title || blog.category}
                    className="w-full h-44 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span
                    className={`absolute top-3 left-3 text-xs font-semibold text-white px-3 py-1 rounded-full ${colorClass}`}
                  >
                    {blog.category}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-between p-5 lg:p-6 lg:w-3/5">
                  <div>
                    <h2 className="text-lg lg:text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                      {blog.title || blog.description.split(" ").slice(0, 10).join(" ")}...
                    </h2>

                    <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                      {blog.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-5">
                    {/* Author */}
                    <div className="flex items-center gap-2">
                      <img
                        src="https://secure.gravatar.com/avatar/e395de6d983ff5fd552a36947ee8d60cb937c8078624065edbc305d25a3287f7?s=50&d=mm&r=g"
                        alt="Author"
                        className="w-8 h-8 rounded-full hover:scale-110 transition-transform duration-300"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        Bin McKiney
                      </span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <CiCalendarDate className="text-xl" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FromBlog;
