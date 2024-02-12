import React from "react";

const AddCustomer = () => {
  return (
    <>
      <div className="bg-white my-5 rounded-md shadow-[0px_5px_20px_lightgray] mb-20">
        <h1 className="p-4 text-3xl font-semibold">Add Customer</h1>

        <div className="p-2 rounded-md md:p-5">
          <h2 className="text-2xl font-semibold uppercase">Customer Details</h2>

          <div className="flex flex-col items-center gap-3 py-5 border-b border-gray-300 lg:flex-row lg:justify-between lg:items-start">
            <div className="flex flex-col gap-3">
              <p>Address</p>
              <input
                type="text"
                placeholder="Company Name"
                className="bg-gray-100 text-sm md:text-base w-[200px] sm:w-[300px] h-[30px] md:h-[40px] px-2 py-0 border-none outline-none rounded-md"
              />
              <textarea
                className="bg-gray-100 text-sm md:text-base w-[200px] sm:w-[300px] min-h-[60px] md:min-h-[100px] p-2 border-none outline-none rounded-md"
                placeholder="Company Address"></textarea>
              <input
                type="text"
                placeholder="Enter Postal Code"
                className="bg-gray-100 text-sm md:text-base w-[200px] sm:w-[300px] h-[30px] md:h-[40px] px-2 py-0 border-none outline-none rounded-md"
              />
            </div>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-gray-100 text-sm md:text-base w-[200px] sm:w-[300px] h-[30px] md:h-[40px] p-2 border-none outline-none rounded-md"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="bg-gray-100 text-sm md:text-base w-[200px] sm:w-[300px] h-[30px] md:h-[40px] p-2 border-none outline-none rounded-md"
              />
              <input
                type="text"
                placeholder="Tax No"
                className="bg-gray-100 text-sm md:text-base w-[200px] sm:w-[300px] h-[30px] md:h-[40px] p-2 border-none outline-none rounded-md"
              />
              <input
                type="text"
                placeholder="Contact No"
                className="bg-gray-100 text-sm md:text-base w-[200px] sm:w-[300px] h-[30px] md:h-[40px] p-2 border-none outline-none rounded-md"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 py-5">
            <button className="bg-green-500 text-white rounded px-2 py-1">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
