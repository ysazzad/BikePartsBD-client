import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [order, setOrder] = useState([])
    const [user, loading] = useAuthState(auth);
    console.log(order);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?user=${user.email}`)
                .then(res => res.json())
                .then(data => setOrder(data))
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map(o => <tr>
                                <th>1</th>
                                <td>{o.part}</td>
                                <td>{o.userName}</td>
                                <td>{o.user}</td>
                                <td>{o.price}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;