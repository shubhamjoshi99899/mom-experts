import React from "react";

const Hero = () => {
  return (
    <div>
      {/* hero - start */}
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            {/* content - start */}
            <div className="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
              <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
                Very proud to introduce
              </p>
              <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
                NEW BORN CARE CLASS
              </h1>
              <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
                Nothing can prepare you for having a newborn, but having the
                education from highly sought-after professionals and support
                from other moms going through exactly what you are will save
                your life, save your sanity and give you the confidence and
                knowledge you need to be the BEST mom that you and your baby
                deserve. You will learn so much more than you ever expected or
                thought you needed to know.
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <a
                  href="#"
                  className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Start now
                </a>
                <a
                  href="#"
                  className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Take tour
                </a>
              </div>
            </div>
            {/* content - end */}
            {/* image - start */}
            <div className="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
              <img
                src="https://img.freepik.com/free-photo/mother-with-daughter-playing-autumn-field_1157-25390.jpg?w=2000"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* image - end */}
          </section>
        </div>
      </div>
      {/* hero - end */}
    </div>
  );
};

export default Hero;
