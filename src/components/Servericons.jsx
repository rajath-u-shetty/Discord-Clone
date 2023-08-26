import React from 'react';

const Servericons = ({image}) => {
    return (
            <img className='h-12 cursor-pointer rounded-full transition-all duration-100 ease-out hover:rounded-2xl' src={image}/>
    );
}

export default Servericons;