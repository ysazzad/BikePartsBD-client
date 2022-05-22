import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://c8.alamy.com/comp/2AB98MC/set-spare-parts-of-motorcycle-on-the-wall-repair-and-maintenance-old-parts-2AB98MC.jpg" alt='bike' class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Welcome To Our Shop</h1>
                    <p class="py-6">We’ve been Selling Genuine Motorcycle Parts and Accessories for the last 3 years. We present The Best Shopping site to Buy Motorcycle Parts online in Bangladesh. If you choose our website for Buy Motorcycle Parts you not mistaken, and we always treat customers with respect</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;