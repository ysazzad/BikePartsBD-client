import React from 'react';

const ChooseUs = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-5xl my-12 text-orange-400'>Why Choose Us</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className='border-2'>
                    <img className='w-32 ml-36' src="https://cdn-icons-png.flaticon.com/512/3090/3090070.png" alt="" />
                    <h4 className='text-2xl text-center text-red-400'>Quick Delivery</h4>
                    <p className='text-center'>All Bangladesh Free Shipping with Fast Delivery in 24 hours.</p>
                </div>
                <div className='border-2'>
                    <img className='w-32 ml-36' src="https://cdn-icons-png.flaticon.com/512/1801/1801901.png" alt="" />
                    <h4 className='text-2xl text-center text-red-400'>Outstanding support</h4>
                    <p className='text-center'>First-class customer support available 24 hours a day by phone, chat.</p>
                </div>
                <div className='border-2'>
                    <img className='w-32 ml-36' src="https://www.pngkey.com/png/full/896-8969978_shopping-for-amazon-4-red-cart-icon-png.png" alt="" />
                    <h4 className='text-2xl text-center text-red-400'>Secure checkout</h4>
                    <p className='text-center'>With 128-bit SSL security with advanced encryption you are guaranteed that your purchases are safe.</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;