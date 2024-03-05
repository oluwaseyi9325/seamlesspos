import React, { useState } from 'react';
import OverviewComponent from './products/productDetails/Overviews';
import WarrantyComponent from './products/productDetails/Warranty';
import ReviewsComponent from './products/productDetails/Reviews';
import DescriptionComponent from './products/productDetails/Description';
import { ProductInterface } from '../interfaces';
enum HeaderEnum {
    Overview = 'Overview',
    Description = 'Description',
    Warranty = 'Warranty',
    Reviews = 'Reviews',
}

// interface Props{
//     product:ProductInterface
// }

const  ProductSpec=({ product }:any)=> {
    const [activeHeader, setActiveHeader] = useState<HeaderEnum>(HeaderEnum.Overview);
    const headers= ['Overview', 'Description', 'Warranty', 'Reviews'];
    const handleHeaderClick = (header:any) => {
        setActiveHeader(header);
    };
    const styles={
        container:"bg-white rounded-lg p-6 md:p-10 shadow my-10",
        subContainer:"flex flex-col md:flex-row gap-6 items-start justify-between mb-5 font-bold text-lg"
    }

    return (
        <section>
            <div className={styles.container}>
                <div className={styles.subContainer}>
                {headers.map((header) => (
                        <h1
                            key={header}
                            onClick={() => handleHeaderClick(header)}
                            className={activeHeader === header ? 'cursor-pointer text-[#1941e1]  border-b-2 border-[#1941e1] pb-2' : 'cursor-pointer'}
                        >
                            {header}
                        </h1>
                    ))}
                </div>
                <div className='text-gray-700'>
                    {activeHeader === HeaderEnum.Overview && (
                        <OverviewComponent overviews={product?.overviews} />
                    )}
                    {activeHeader === HeaderEnum.Description && (
                        <DescriptionComponent description={product?.description} />
                    )}
                    {activeHeader === HeaderEnum.Warranty && (
                        <WarrantyComponent warranty={product?.warranty} />
                    )}
                    {activeHeader === HeaderEnum.Reviews && (
                        <ReviewsComponent reviews={product?.reviews} />
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProductSpec;
