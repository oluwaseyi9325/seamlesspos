import React from 'react';

function DeliveryDetails() {
  return (
    <div className='bg-white rounded-lg p-5 border shadow-md md:w-5/6 mt-5'>
      <h2 className="text-2xl font-bold mb-5">Delivery & Returns</h2>
      <div className="text-gray-700">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Delivery</h3>
          <p className="mb-3">Estimated delivery time: <span className="font-semibold">1-9 business days</span></p>
          <p className="mb-3">Express Delivery Available:</p>
          <ul className="list-disc pl-5">
            <li>Same day delivery: Order before 11AM and get it today</li>
            <li>Next day delivery: Order after 11AM and get it tomorrow</li>
            <li>Note: Subject to availability in your location</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default DeliveryDetails;
