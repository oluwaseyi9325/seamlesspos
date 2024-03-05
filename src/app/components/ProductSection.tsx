import React, { useEffect, useState } from 'react';
import ProductCard from './products/ProductCard';
import { ProductInterface } from '../interfaces';


const ProductSection = ({showStatus}:any) => {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [showNumber, setShowNumber] = useState<number | 'all'>(showStatus); 
    const [filteredProducts,setFilter]=useState<any>()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/products'); 
                const data = await response.json();
                setProducts(data);
                setLoading(false);
                setFilter(showNumber === 'all' ? products : products.slice(0, showNumber)); 
            } catch (error) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, [products]);
   

    const searchBtn=()=>{
     setProducts(products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ));
    console.log(filteredProducts)
   
    }

   
    if (loading) {
        return <div className='flex justify-center'>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="container mx-auto py-12 px-10 md:px-20">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Products</h2>
                <div>
                    <span className='bg-white py-4 px-3 rounded-lg'>
                    <input
                        placeholder='Search'
                        className='rounded focus:none'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} 
                    />
                    <button onClick={searchBtn} className='bg-gray-800 p-2 text-white rounded-lg'>Seacrh</button>
                    </span>
                </div>
                <div>
                    <select className="px-4 py-2 mr-4 bg-gray-200 text-gray-800 rounded">
                        <option value="">All Categories</option>
                         <option>Sport</option>
                         <option>Education</option>
                        <option>Politics</option>
                    </select>

                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product: ProductInterface, index: number) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductSection;
function fetchData() {
    throw new Error('Function not implemented.');
}

