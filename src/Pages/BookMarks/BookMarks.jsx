import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const sampleBookmarks = [
  {
    id: 1,
    title: 'Minimalist Living: Less is More',
    author: 'Liam Parker',
    img: "https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/07/bsn-e.webp",
    authorImg: 'https://i.ibb.co/ZG0Hszp/avatar2.png',
    description: 'Tips and inspiration to embrace a minimalist lifestyle in a cluttered world.',
    date: '2025-05-03',
    category: 'Lifestyle',
  },
  {
    id: 2,
    title: 'Minimalist Living: Less is More',
    author: 'Liam Parker',
    img: "https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/05/lifestyle-4.webp",
    authorImg: 'https://i.ibb.co/ZG0Hszp/avatar2.png',
    description: 'Tips and inspiration to embrace a minimalist lifestyle in a cluttered world.',
    date: '2025-05-03',
    category: 'Lifestyle',
  },
  {
    id: 3,
    title: 'Minimalist Living: Less is More',
    author: 'Liam Parker',
    img: "https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/05/tech-7.webp",
    authorImg: 'https://i.ibb.co/ZG0Hszp/avatar2.png',
    description: 'Tips and inspiration to embrace a minimalist lifestyle in a cluttered world.',
    date: '2025-05-03',
    category: 'Technology',
  },
];

const BookMarks = () => {
  const [bookmarks, setBookmarks] = useState(sampleBookmarks);

  const handleRemove = (id) => {
    const updated = bookmarks.filter((item) => item.id !== id);
    setBookmarks(updated);
  };

  return (
    <div className=" max-w-4xl py-10  mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">📌 My Bookmarks</h2>

      {bookmarks.length === 0 ? (
        <p className="text-center text-gray-500">No bookmarks added yet.</p>
      ) : (
        <div className="space-y-6">
          {bookmarks.map((item) => (
            <div
              key={item.id}
              className="bg-white/30 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-4 flex flex-col md:flex-row gap-4 hover:shadow-xl transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full md:w-48 h-40 object-cover rounded-xl"
              />

              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">{item.description}</p>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.authorImg}
                      alt={item.author}
                      className="w-10 h-10 rounded-full border"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-700">{item.author}</p>
                      <p className="text-xs text-gray-400">{item.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:text-red-700 transition"
                      title="Remove"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookMarks;
