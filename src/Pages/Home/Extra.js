import React from 'react';

const Extra = () => {
    return (
        <div className='m-12'>
            <div class="card w-full  shadow-xl bg-orange-400">
                <div class="card-body">
                    <h2 class="card-title text-white">FIND PARTS FOR YOUR BIKE</h2>
                    <div className='grid grid-cols-5'>
                        <input type="text" placeholder="Brand" class="input w-48 max-w-xs" />
                        <input type="text" placeholder="Type" class="input w-48 max-w-xs" />
                        <input type="text" placeholder="Year" class="input w-48 max-w-xs" />
                        <input type="text" placeholder="Modal" class="input w-48 max-w-xs" />
                        <button class="btn btn-active btn-ghost text-white">Search</button>
                    </div>
                </div>
                <div className='text-white'>
                    <div class="divider">OR</div>
                </div>
                <div>
                    <label htmlFor="" className='text-white pl-8'>Or search by part number :</label>
                    <input type="text" placeholder="Enter Part Number" class="input ml-4 mb-4 input-bordered w-full max-w-xs" />
                    <button class="btn btn-active btn-ghost text-white ml-8">Search</button>
                    <span className='ml-4'>Still can’t find your model?</span>
                    <span className='text-white pl-4'>  SEND US AN ENQUIRY</span>


                </div>
            </div>

        </div>

    );
};

export default Extra;