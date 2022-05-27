// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';


// const Profile = () => {
//     const [user, loading, error] = useAuthState(auth);
//     console.log(user);

//     const handleProfile = (event) => {
//         event.preventDefault()
//     }

//     return (
//         <div>
//             <h1>Your Profile</h1>
//             <form onSubmit={handleProfile} className='grid grid-cols-1 gap-3'>
//                 <input type="text" name='name' value={user?.displayName} class="input input-bordered w-full max-w-xs" />
//                 <input type="email" name='email' value={user?.email} class="input input-bordered w-full max-w-xs" />
//                 <input type="text" name='quantity' class="input input-bordered w-full max-w-xs" />

//                 <input type="text" name='phone' placeholder="Phone" class="input input-bordered w-full max-w-xs" />
//                 <input type="text" name='address' placeholder="Address" class="input input-bordered w-full max-w-xs" />
//                 <input type="submit" value="Order" class="btn btn-warning input-bordered w-full max-w-xs" />
//             </form>

//         </div>
//     );
// };

// export default Profile;