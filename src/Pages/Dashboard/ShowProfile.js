import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowProfile = () => {
    const { profileId } = useParams()
    console.log(profileId);
    const [part, setPart] = useState({})

    useEffect(() => {
        const url = `https://motorbike-parts-manufacturar-server.vercel.app/profile/${profileId}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [])


    return (
        <div>


        </div>
    );
};

export default ShowProfile;