import React from 'react';

function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Text Content */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <p className="text-gray-600 text-base md:text-lg mb-4">Hi there, I'm Muhammad Aneeb</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500 mb-6 leading-tight">
            A <span className='text-slate-700'>Frontend</span> Web Developer
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
          I turn ideas into awesome websites with a mix of creativity and code. Let's build something amazing together!
          </p>
          
        </div>

        {/* Right Side: Image */}
        <div className=" pr-20 w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src="https://png.pngtree.com/png-clipart/20240416/original/pngtree-developers-are-coding-programs-on-computers-programmers-are-analyzing-data-png-image_14867886.png"
            alt="Muhammad Aneeb coding"
            className="object-contain h-64 sm:h-72 lg:h-80 w-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;