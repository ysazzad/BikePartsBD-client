import React from 'react';
import { FaUsers, FaMotorcycle } from 'react-icons/fa';
import { GiProfit } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";

const Summary = () => {
    return (
        <div>
            <h1 className='text-center text-5xl mt-12 text-orange-400'>Millions Business Trust Us</h1>
            <div className='text-center my-12 '>
                <div class="stats shadow bg-yellow-100">
                    <div class="stat">
                        <div class="stat-figure text-pink-500 text-6xl">
                            <FaUsers />
                        </div>
                        <div class="stat-title">Happy Customers</div>
                        <div class="stat-value">100+</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure  text-pink-500 text-6xl">
                            <FaMotorcycle />

                        </div>
                        <div class="stat-title">Tools</div>
                        <div class="stat-value">300+</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure  text-pink-500 text-6xl">
                            <GiProfit />
                        </div>
                        <div class="stat-title">Annual Revenue</div>
                        <div class="stat-value">2M+</div>
                    </div>
                    <div class="stat">
                        <div class="stat-figure  text-pink-500 text-6xl">
                            <VscFeedback />
                        </div>
                        <div class="stat-title">User Feedback</div>
                        <div class="stat-value">120+</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Summary;