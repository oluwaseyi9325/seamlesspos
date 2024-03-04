import React from 'react';

const ProductHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
          <select
            id="category"
            name="category"
            className="mt-1 block w-48 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm"
          >
            <option>All Categories</option>
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
          </select>
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price Range:</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Min"
            className="mt-1 block w-24 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm"
          />
          <span className="mx-2">to</span>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Max"
            className="mt-1 block w-24 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm"
          />
        </div>
      </div>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default ProductHeader;
