import React from 'react';

const CardSlider = (props) => {
    return (
        <div className='w-80'>
            <img className='w-full rounded-3xl' src={props.img} alt='' />
            <h1 className='text-[32px] mt-8'>{props.title}</h1>
            <a href='#' className='text-base mt-4 underline text-green-500 hover:text-green-700'>
                {props.more}
            </a>
        </div>
    );
};

export default CardSlider;
