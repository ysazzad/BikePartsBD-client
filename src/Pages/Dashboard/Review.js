import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = "http://localhost:5000/review"
        console.log(url)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success("review added successfully")
            })
    }

    return (
        <div>
            <h2 className='text-4xl text-orange-500 text-center font-bold'>Reviews</h2>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-4 input input-bordered w-full max-w-xs' placeholder='Name' {...register("userName", { required: true, maxLength: 500 })} />
                <textarea className='mb-4 input input-bordered w-full max-w-xs' placeholder='Description' {...register("description")} />
                <input className='mb-4 input input-bordered w-full max-w-xs' placeholder=' Rating' type="number" {...register("rating")} />
                <input className='mb-4 input input-bordered w-full max-w-xs' placeholder='Photo' type="text" {...register("imgUrl")} />
                <input type="submit" className='input input-bordered w-full max-w-xs bg-orange-500' value="Add Review" />
            </form>

        </div>
    );
};

export default Review;