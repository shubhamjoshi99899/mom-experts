import React from 'react'

const Contact = () => {
  return (
    <div>
         <div className="bg-white">
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="	https://themomexperts.in/wp-content/uploads/2022/07/newmother.jpg"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">The Moms Expert</h1>
          <p className="mt-4 text-xl text-white">
          Empowering mothers, Transforming motherhood
          </p>
          <a
            href="#"
            className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Register Now
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact