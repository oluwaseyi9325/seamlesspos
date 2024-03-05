import React from 'react';

const WhyShopWithUs = () => {
    const ShopWithUsDetails=[
        {
            id:1,
            title:"Fast Delivery",
            desc:"We understand that you want your purchases as soon as possible. That's why we prioritize fast and reliable delivery services to ensure your items reach you promptly"
        },
        {
            id:2,
            title:"Free Shipping",
            desc:"Enjoy the convenience of free shipping on all orders. No matter the size or value of your purchase, we cover the shipping costs so you can shop without any additional expenses."
        },
        {
            id:3,
            title:"Best Quality",
            desc:"We take pride in offering only the best quality products to our customers. Each item in our inventory undergoes strict quality control measures to ensure durability, performance, and overall satisfaction."
        }
    ]
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-8 text-center text-gray-900">Why Shop With Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
                        <p className="text-gray-700 mb-4">We understand that you want your purchases as soon as possible. That's why we prioritize fast and reliable delivery services to ensure your items reach you promptly</p>

                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Free Shipping</h3>
                        <p className="text-gray-700 mb-4">Enjoy the convenience of free shipping on all orders. No matter the size or value of your purchase, we cover the shipping costs so you can shop without any additional expenses.</p>

                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Best Quality</h3>
                        <p className="text-gray-700 mb-4">We take pride in offering only the best quality products to our customers. Each item in our inventory undergoes strict quality control measures to ensure durability, performance, and overall satisfaction.</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyShopWithUs;
