import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, img, description, availableQuantity, minimumQuantity, perUnitPrice } = part
    const navigate = useNavigate()
    const handlePartDetails = (_id) => {
        navigate(`/part/${_id}`)

    }
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-24' src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p> Per Unit Price : ${perUnitPrice}</p>
                <p> Available Quantity: {availableQuantity}</p>
                <p> Minimum Quantity: {minimumQuantity}</p>
                <p>{description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary " onClick={() => handlePartDetails(_id)} >Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;