import React, { useEffect, useState } from 'react';
import ProductCard from './products/ProductCard';


const ProductSection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
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
    }, [products]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="container mx-auto py-12 px-10 md:px-20">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Products</h2>
                <div>
                    <select className="px-4 py-2 mr-4 bg-gray-200 text-gray-800 rounded">
                        <option value="">All Categories</option>
                        {/* Add category options here */}
                    </select>

                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product: any, index: any) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductSection;
