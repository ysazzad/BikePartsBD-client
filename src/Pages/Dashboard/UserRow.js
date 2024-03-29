import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {

    const { email, role } = user

    const makeAdmin = () => {
        fetch(` https://motorcycle-parts-bd.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("failed to make admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully, you have made an admin`);

                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn bg-green-600 btn-xs">Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;