
import React from "react";
import { Link } from "react-router-dom";

const EnhancedHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="w-full h-full">
        {/* Static Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
            alt="Tech Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-purple-900/85" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Text Area */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Techkhwa</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                Our vision is to create a vibrant, innovative tech ecosystem that empowers students, professionals, and entrepreneurs to thrive in a rapidly evolving world.
              </p>
              
              <div className="space-x-4">
                <Link
                  to="/modern/courses"
                  className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Explore Courses
                </Link>
                <Link
                  to="/modern/about"
                  className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Static Images */}
            <div className="hidden md:block relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Programming"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  alt="Technology"
                  className="w-full h-48 object-cover rounded-lg shadow-lg mt-8 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;
