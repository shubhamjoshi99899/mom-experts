import React from 'react'

const Stats = () => {
  return (
    <div>
         {/* stats - start */}
         <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
            {/* text - start */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Moms Benifited by this program
              </h2>
              <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              Motherhood can be confusing and overwhelming. But it need not be so. We made a promise to make transform your motherhood into a beautiful journey with lot of support & verified, scientific information. Join our courses, and help us help you!
              </p>
            </div>
            {/* text - end */}
            <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x gap-8 md:gap-0">
              {/* stat - start */}
              <div className="flex flex-col items-center md:p-4">
                <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">
                  200 
                </div>
                <div className="text-sm sm:text-base font-semibold">Household Mumma's</div>
              </div>
              {/* stat - end */}
              {/* stat - start */}
              <div className="flex flex-col items-center md:p-4">
                <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">
                  500+
                </div>
                <div className="text-sm sm:text-base font-semibold">Working Mumma's</div>
              </div>
              {/* stat - start */}
              <div className="flex flex-col items-center md:p-4">
                <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">
                  1000+
                </div>
                <div className="text-sm sm:text-base font-semibold">
                  Upcoming Mumma's
                </div>
              </div>
              {/* stat - end */}
              {/* stat - start */}
              <div className="flex flex-col items-center md:p-4">
                <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">
                  2500+
                </div>
                <div className="text-sm sm:text-base font-semibold">
                  Couples
                </div>
              </div>
              {/* stat - end */}
            </div>
          </div>
        </div>
        {/* stats - end */}
    </div>

  )
}

export default Stats