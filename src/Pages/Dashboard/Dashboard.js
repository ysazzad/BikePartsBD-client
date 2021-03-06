import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin'
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth'

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/* <!-- Page content here --> */}
                {/* <h2 className='text-4xl text-red-500 text-center font-mono mt-2'>Welcome to your Dashboard</h2> */}
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {(user && !admin) && <li><Link to="/dashboard">Dashboard</Link></li>}
                    {(user && !admin) && <li><Link to="/dashboard/order">My Orders</Link></li>}
                    {(user && !admin) && <li><Link to="/dashboard/review">Add A Review</Link></li>}
                    {admin && <li><Link to="/dashboard/users">Make Admin</Link></li>
                    }
                    {admin && <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                    }
                    {admin && <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                    }
                    {admin && <li><Link to="/dashboard/manageAllOrder">Manage Orders</Link></li>
                    }
                    <li><Link to="/dashboard/profile">My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;