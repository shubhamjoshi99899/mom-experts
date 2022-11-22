import React from "react";

const Carousel = () => {
  return (
    <div className=" md:py-8 mb-8 md:mb-12 xl:mb-16">
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className=" carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <div className="bg-white">
              <div className="relative bg-gray-900">
                {/* Decorative image and overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 overflow-hidden"
                >
                  <img
                    src="	https://themomexperts.in/wp-content/uploads/2022/07/newmother.jpg"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gray-900 opacity-50"
                />

                <div className="relative max-w-3xl mx-auto py-10 px-6 flex flex-col items-center text-center sm:py-28  lg:px-0">
                  <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
                    THE MOM EXPERTS
                  </h1>
                  <p className="mt-4 text-xl text-white">
                    Empowering mothers, Transforming motherhood
                  </p>
                  <a
                    href="#"
                    className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 font-bold hover:bg-gray-100"
                  >
                    Join
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div className="bg-white">
              <div className="relative bg-gray-900">
                {/* Decorative image and overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 overflow-hidden"
                >
                  <img
                    src="	https://themomexperts.in/wp-content/uploads/2022/07/new-mother.jpg"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gray-900 opacity-50"
                />

<div className="relative max-w-3xl mx-auto py-10 px-6 flex flex-col items-center text-center sm:py-28 lg:px-0">
                  <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
                    HEY MAMA!
                  </h1>
                  <p className="mt-4 text-xl text-white">
                    LET US KNOW
                    <br />
                    HOW WE CAN HELP YOU?
                  </p>
                  <a
                    href="#"
                    className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
                  >
                    Join
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div className="bg-white">
              <div className="relative bg-gray-900">
                {/* Decorative image and overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 overflow-hidden"
                >
                  <img
                    src="https://themomexperts.in/wp-content/uploads/2022/07/banner.jpg"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gray-900 opacity-50"
                />

<div className="relative max-w-3xl mx-auto py-10 px-6 flex flex-col items-center text-center sm:py-28 lg:px-0">
                  <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
                    The MOM Experts
                  </h1>
                  <p className="mt-4 text-xl text-white">
                   The caring Mom for all the lovely Mumma's
                  </p>
                  <a
                    href="#"
                    className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
                  >
                    Join
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
