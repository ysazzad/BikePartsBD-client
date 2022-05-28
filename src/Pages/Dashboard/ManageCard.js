import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageCard = ({ part }) => {
    const { _id, name, img, description, availableQuantity, minimumQuantity, perUnitPrice } = part
    const [parts, setParts] = useState([])
    const handleDelete = id => {
        // console.log(id);
        const proceed = window.confirm("are you sure want to delete?")
        if (proceed) {
            const url = `http://localhost:5000/part/${id}`
            console.log(url);
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success("deleted successfully")
                    const remaining = parts.filter(item => item._id !== id)
                    setParts(remaining)
                })
        }
    }
    return (
        <div class="card card-compact w-72 bg-base-100 shadow-xl overflow-hidden">
            <figure><img className='h-14' src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p> Per Unit Price : ${perUnitPrice}</p>
                <p> Available Quantity: {availableQuantity}</p>
                <p> Minimum Quantity: {minimumQuantity}</p>
                <p>{description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary " onClick={() => handleDelete(_id)} >Delete</button>
                </div>
            </div>
        </div>

    );
};

export default ManageCard;