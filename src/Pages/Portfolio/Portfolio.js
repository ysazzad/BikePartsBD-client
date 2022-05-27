import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <h1 className='text-center text-4xl text-red-500 my-4'>My Portfolio</h1>
            <div className='flex justify-center items-center '>
                <div class="card w-96 bg-base-200 shadow-xl mt-8 ">
                    <div class="card-body">
                        <h3>Name : Sazzad Hossen</h3>
                        <p>Email : sazzadmian95@gmail.com</p>
                        <p>Education : B.sc in CSE at International islamic university chittagong</p>
                        <p>Technologies: HTML, CSS, Javascript, React, Node, MongoDb, Firebase</p>
                        <p>Live Link of my project : <br />
                            1. <a href=" https://warehouse-client-4595b.web.app/" className='text-blue-700 underline'>BikeBD</a> <br />
                            2. <a href="https://health-coach-9eab0.firebaseapp.com/" className='text-blue-700 underline'>health coach</a> <br />
                            3. <a href="https://tesla-router-sazzu.netlify.app/home" className='text-blue-700 underline'> tesla car</a>
                        </p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;