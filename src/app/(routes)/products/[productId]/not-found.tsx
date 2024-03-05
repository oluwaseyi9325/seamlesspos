import React from 'react';

function ProductNotFound() {
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
      <p className="text-lg text-gray-600">Sorry, the product you are looking for could not be found.</p>
      {/* You can add a button to navigate back to the home page or the product listing page */}
      <button className="bg-blue-500 text-white px-6 py-3 rounded-md mt-8 hover:bg-blue-600 focus:outline-none">
        Go Back
      </button>
    </div>
  );
}

export default ProductNotFound;
