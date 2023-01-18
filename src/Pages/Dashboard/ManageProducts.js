import React, { useEffect, useState } from 'react';
import ManageCard from './ManageCard';


const ManageProducts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch(`https://motorbike-parts-manufacturar-server.vercel.app/part`)
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-4xl  text-orange-500'>Motorcycle All Parts</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto '>
                {
                    parts.map(part => <ManageCard key={part._id} part={part}>

                    </ManageCard>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;