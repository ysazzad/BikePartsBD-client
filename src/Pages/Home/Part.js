import React from 'react';

const Part = ({ part }) => {
    const { name, img, description, availableQuantity, minimumQuantity, perUnitPrice } = part
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
                    <button class="btn btn-primary ">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;