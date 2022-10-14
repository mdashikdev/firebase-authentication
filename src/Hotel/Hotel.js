import React from 'react';
import { Link } from 'react-router-dom';

const Hotel = () => {
    return (
        <div className='shadow bg-white basis-3/4 rounded'>
            <img className='w-full rounded' src="https://th.bing.com/th/id/R.eb31f68588b567c2918f4e9c67a8e39b?rik=2yoE4oKwP2HVUA&pid=ImgRaw&r=0" alt="" />
            <div className='flex my-3 mx-2 justify-between \p-3'>
                <div className='flex gap-4'>
                    <p className='border border-slate-100 px-2 rounded p-1'>Bathroom:4</p>
                    <p className='border border-slate-100 px-2 rounded p-1'>Room:4</p>
                </div>
                <Link to='/book/5' className='px-4 py-2 bg-blue-500 hover:bg-slate-600 duration-200 text-white rounded'>Book</Link>
            </div>
        </div>
    );
};

export default Hotel;