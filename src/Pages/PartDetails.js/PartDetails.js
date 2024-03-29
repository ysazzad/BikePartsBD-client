import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PartDetails = () => {
    const { partId } = useParams()
    const [part, setPart] = useState({})
    console.log(part);
    const [user, loading, error] = useAuthState(auth);



    useEffect(() => {
        const url = ` https://motorcycle-parts-bd.onrender.com/part/${partId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [])

    // const handleQuantity = event => {
    //     const { minimumQuantity, ...rest } = part
    //     const newQuantity = event.target.value
    //     const newPart = { minimumQuantity: newQuantity, ...rest }
    //     setPart(newPart)

    // }



    const handleOrder = event => {
        event.preventDefault();
        const inputValue = event.target.quantity.value
        console.log('inputValue', inputValue);
        const newInputValue = parseInt(inputValue)
        const minimumValue = part.minimumQuantity
        console.log('minimum value ', minimumValue);
        const availableValue = part.availableQuantity
        console.log('available value', availableValue);
        if (newInputValue < minimumValue) {
            toast.error('you have to order minimum quantity')
        }
        else if (newInputValue > availableValue) {
            // alert("too large")
            toast.error(`out of range`)
        }
        else {
            const booking = {
                partId: part._id,
                part: part.name,
                price: part.perUnitPrice,
                userName: user.displayName,
                user: user.email,
                phone: event.target.phone.value,
                address: event.target.address.value
            }
            fetch(` https://motorcycle-parts-bd.onrender.com/booking`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    toast.success("successfully done")
                })
            // alert("success");
        }

    }

    return (
        <div>
            <h1 className='text-center text-4xl text-red-500 my-4 font-bold font-mono'>Details and Confirm Order</h1>
            <div >
                <div className='flex justify-center items-center mb-8'>
                    <div className='w-96  bg-base-200 p-4'>
                        <img className='w-48 ' src={part.img} alt="" />
                        <h3>Name: {part.name}</h3>
                        <p>Available Quantity : {part.availableQuantity}</p>
                        <p>Minimum Quantity : {part.minimumQuantity}</p>
                        <p>Per Unit Price : ${part.perUnitPrice}</p>
                        <p>Description : {part.description}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div class="card w-96 bg-yellow-200 shadow-xl">
                        <div class="card-body items-center text-center">
                            <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3'>
                                <input type="text" name='name' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                                <input type="email" name='email' disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                                <input type="text" name='quantity' placeholder='Quantity' class="input input-bordered w-full max-w-xs" />

                                <input type="text" name='phone' placeholder="Phone" class="input input-bordered w-full max-w-xs" />
                                <input type="text" name='address' placeholder="Address" class="input input-bordered w-full max-w-xs" />
                                <input type="submit" value="Order" class="btn bg-red-400 input-bordered w-full max-w-xs" />
                            </form>

                        </div>
                    </div>


                </div>
            </div>

        </div>

    );
};

export default PartDetails;