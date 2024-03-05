import React from 'react'

function DeliveryDetails() {
  return (
    <div className='bg-white rounded-lg p-5 border shadow md:w-5/6 mt-5'>
    <h2 className="text-2xl font-bold mb-5">Delivery & Returns</h2>
    <div>
      <h3 className="text-lg font-semibold">Delivery</h3>
      <p className="text-gray-600 mb-3">Estimated delivery time: 1-9 business days</p>
      <p className="text-gray-600 mb-3">Express Delivery Available:</p>
      <ul className="list-disc pl-5">
        <li>Same day delivery: Order before 11AM and get it today</li>
        <li>Next day delivery: Order after 11AM and get it tomorrow</li>
        <li>Note: Subject to availability in your location</li>
      </ul>
    </div>
  </div>
  )
}

export default DeliveryDetails