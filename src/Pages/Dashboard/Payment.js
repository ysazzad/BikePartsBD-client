import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1oNcD3zB0PToYODcuViaPXvCiqOaa8YbYGNrPi2j9T1FmDAk1alPEts9YfNxvysJ4crGfrqEQrNXn7u0WIqwuP00qzAgWmc4');


const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/booking/${id}`;

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <p>Hi, {order.userName}</p>
                    <h2 class="card-title text-orange-400">Pay for this {order.part}</h2>
                    <p> Per Unit Price : {order.price}</p>

                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>

                </div>
                <div class="card w-96 bg-base-100 shadow-xl mt-8">
                    <div class="card-body">

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Payment;