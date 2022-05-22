import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/part`)
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-5xl my-12 text-orange-500'>Motorcycle Parts</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto'>
                {
                    parts.map(part => <Part key={part._id} part={part}>

                    </Part>)
                }
            </div>

        </div>
    );
};

export default Parts;