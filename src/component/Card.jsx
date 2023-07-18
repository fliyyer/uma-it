import React from 'react';

const Card = (props) => {
    return (
        <div className='bg-secondary-color text-white rounded-3xl p-5 w-72 h-96 flex flex-col justify-between'>
            <div>
                <p className='text-xs'>{props.app}</p>
                <h1 className='text-2xl my-5 leading-6'>{props.title}</h1>
                <p className='text-xs leading-6'>{props.desc}</p>
            </div>
            <div className='flex justify-center'>
                <button className='bg-blue-color rounded-3xl px-10 mb-12 py-2'>Haree liu tan</button>
            </div>
        </div>
    );
}

export default Card;
