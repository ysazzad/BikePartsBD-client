import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [order, setOrder] = useState([])
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()
    console.log(order);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?user=${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log(res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate("/")

                    }
                    return res.json()
                })
                .then(data => {
                    setOrder(data)
                })
        }
    }, [user])
    return (
        <div>
            <h2>My Orders : {order.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Part</th>
                            <th>Name</th>
                            <th> Email</th>
                            <th> Per Unit Price</th>
                            <th> Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((o, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{o.part}</td>
                                <td>{o.userName}</td>
                                <td>{o.user}</td>
                                <td>{o.price}</td>
                                <td>
                                    {(o.price && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}> <button className="btn btn-xs btn-success" >Pay</button> </Link>}
                                    {(o.price && o.paid) && <span className="text-success" >Paid</span>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;