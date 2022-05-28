import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    const handleProfile = (event) => {
        event.preventDefault()
        const education = event.target.education.value
        const linkedin = event.target.linkedin.value
        const phone = event.target.phone.value
        const city = event.target.city.value
        const profile = { education, linkedin, phone, city }
        const url = `http://localhost:5000/profile`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('users added successfully!!!');
                event.target.reset();
            })
    }

    return (
        <div>
            <form onSubmit={handleProfile} className='grid grid-cols-1 gap-3 ml-4 lg:ml-96 mt-8'>
                <input type="text" name='name' value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                <input type="email" name='email' value={user?.email} class="input input-bordered w-full max-w-xs" />
                <input type="text" name='education' placeholder='Education' class="input input-bordered w-full max-w-xs" />
                <input type="text" name='linkedin' placeholder='Linkedin' class="input input-bordered w-full max-w-xs" />

                <input type="text" name='phone' placeholder="Phone" class="input input-bordered w-full max-w-xs" />
                <input type="text" name='city' placeholder="City" class="input input-bordered w-full max-w-xs" />
                <input type="submit" value="Add" class="btn btn-warning input-bordered w-full max-w-xs" />
            </form>

        </div>
    );
};

export default Profile;