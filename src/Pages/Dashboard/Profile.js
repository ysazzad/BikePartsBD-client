import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';



const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);


    const url = `http://localhost:5000/profile?email=${user.email}`;

    const { data: userProfile, isLoading, refetch } = useQuery(['user'], () => fetch(url, {
        method: 'GET',
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    refetch()

    const userData = userProfile[0];



    const handleProfile = (event) => {
        event.preventDefault()
        const education = event.target.education.value
        const linkedin = event.target.linkedin.value
        const phone = event.target.phone.value
        const city = event.target.city.value
        const profile = { education, linkedin, phone, city }
        const url = `http://localhost:5000/profile/${user.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert(' added successfully!!!');
                event.target.reset();
            })
    }

    return (
        <div className=' '>
            <div class="card w-96 bg-blue-200 shadow-xl ml-4 lg:ml-96 mt-4">

                <div class="card-body items-center text-center">
                    <ul>

                        <li>Name:{user?.displayName} </li>
                        <li>Email: {user?.email}</li>
                        <li>Education:{userData.education}</li>
                        <li>Location: {userData.city}</li>
                        <li>LinkedIn: {userData.linkedin}</li>
                        <li>Phone: {userData.phone}</li>
                    </ul>
                </div>
            </div>
            <form onSubmit={handleProfile} className='grid w-96 grid-cols-1 gap-3 p-6 ml-4 lg:ml-96 mt-8 bg-base-200'>
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