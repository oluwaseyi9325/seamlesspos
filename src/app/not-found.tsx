import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white px-5">
            <div className='bg-white text-center p-10 '>
                <Image src={require("./assets/notFound.gif")} alt="404 Not Found" width={400} height={300} />

                <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Oops!<br className='md:hidden block' /> Page Not Found</h2>
                <p className="text-lg text-gray-600 mb-8">The page you are looking for might have been removed,<br className='md:block hidden' /> had its name changed, or is temporarily unavailable.</p>

                <Link href="/" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none">
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
