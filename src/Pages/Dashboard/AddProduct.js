
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = "https://serene-ocean-37189.herokuapp.com/part"
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
                toast.success("product added successfully")
            })
    };


    return (
        <div className=''>
            <h2 className=' ml-20 lg:ml-96 mt-4 text-2xl text-orange-400'>Please add a Product</h2>
            <div className='ml-14 lg:ml-96'>
                <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-4 input input-bordered w-full max-w-xs' placeholder='Name' {...register("name", { required: true, maxLength: 50 })} />
                    <textarea className='mb-4 input input-bordered w-full max-w-xs' placeholder='Description' {...register("description")} />
                    <input className='mb-4 input input-bordered w-full max-w-xs' placeholder='Available Quantity' type="number" {...register("availableQuantity")} />
                    <input className='mb-4 input input-bordered w-full max-w-xs' placeholder='Minimum Quantity' type="number" {...register("minimumQuantity")} />
                    <input className='mb-4 input input-bordered w-full max-w-xs' placeholder=' Per Unit Price' type="number" {...register("perUnitPrice")} />
                    <input className='mb-4 input input-bordered w-full max-w-xs' placeholder='Photo' type="text" {...register("img")} />
                    <input type="submit" className='input input-bordered w-full max-w-xs bg-warning' value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;