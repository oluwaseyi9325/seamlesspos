import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';


const ProductSection = () => {
    // const [products, setProducts] = useState([]);
    const products = [
        {
            "id": 1,
            "name": "Product 1",
            "description": "Description of Product 1",
            "price": 29.99,
            "image": require("../assets/download (1).jpeg"),
            "category": "Category 1"
        },
        {
            "id": 2,
            "name": "Product 2",
            "description": "Description of Product 2",
            "price": 39.99,
            "image": require("../assets/download (1).jpeg"),
            "category": "Category 2"
        },
        {
            "id": 3,
            "name": "Product 1",
            "description": "Description of Product 1",
            "price": 29.99,
            "image": require("../assets/download (1).jpeg"),
            "category": "Category 1"
        },
        {
            "id": 4,
            "name": "Product 2",
            "description": "Description of Product 2",
            "price": 39.99,
            "image": require("../assets/download (1).jpeg"),
            "category": "Category 2"
        }]
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('http://localhost:8080/products'); // Assuming the data.json file is in the public/data directory
    //             const data = await response.json();
    //             setProducts(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);
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
