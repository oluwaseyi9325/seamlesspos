


import React, { useEffect, useState } from 'react';
import ProductCard from './products/ProductCard';
import { ProductInterface } from '../interfaces';

const ProductSection = ({ showStatus }: any) => {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [showNumber, setShowNumber] = useState<number | 'all'>(showStatus);
    const [filteredProducts, setFilteredProducts] = useState<ProductInterface[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/products');
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setFilteredProducts(products.slice(0, showNumber === 'all' ? undefined : showNumber));
    }, [products, showNumber]);

    const searchBtn = () => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

   

    return (
        <section className="container mx-auto py-12 px-5 md:px-20">
            <div className="md:flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Products</h2>
                <div>
                <span className='bg-white py-2 px-3 rounded-lg flex items-center'>
                <input
                    placeholder='Search'
                    className='rounded focus:outline-none md:flex-grow'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={searchBtn} className='bg-gray-800 text-white px-4 py-2 rounded-lg md:ml-2 -ml-5 hover:bg-gray-700'>Search</button>
            </span>

                </div>
               
            </div>
            <div >
            {loading ? (
                    <div className='flex justify-center'>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product: ProductInterface, index: number) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
            )}

</div>

        </section>
    );
};

export default ProductSection;
