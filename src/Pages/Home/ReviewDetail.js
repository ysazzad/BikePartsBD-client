import React from 'react';

const ReviewDetail = ({ review }) => {
    const { userName, imgUrl, rating, description } = review
    return (
        <div>
            <div class="card w-96 h-96 bg-blue-100 shadow-xl">
                <div class="card-body">
                    <div class="avatar text-center">
                        <div class="w-24 m-4  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={imgUrl} alt="pic" />
                        </div>
                    </div>
                    <h1>{userName}</h1>
                    <h2 class="card-title">
                        Rating
                        <div class="badge badge-secondary">{rating}</div>
                    </h2>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default ReviewDetail;