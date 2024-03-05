import React from 'react';
const OverviewComponent=({ overviews }:any)=> {
    return (
        <div>
            <h2 className='text-xl font-semibold mb-2'>KEY FEATURES</h2>
            <ul className='list-disc pl-5'>
                {overviews?.map((item:any, i:number) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default OverviewComponent;
