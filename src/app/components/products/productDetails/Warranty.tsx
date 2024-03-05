import React from 'react';

function WarrantyComponent({ warranty }:any) {
    return (
        <div>
            {/* <h2 className='text-xl font-semibold mb-2'>Warranty</h2> */}
            <p className='text-lg'>{warranty}</p>
        </div>
    );
}

export default WarrantyComponent;
