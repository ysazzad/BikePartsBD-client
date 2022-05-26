import React, { useEffect, useState } from 'react';
import ReviewDetail from './ReviewDetail';


const AllReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/review`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl text-center text-orange-500'>All Reviews</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto'>
                {
                    reviews.map(review => <ReviewDetail key={review._id} review={review}>

                    </ReviewDetail>)
                }
            </div>

        </div>
    );
};

export default AllReview;