import React from "react";
import p1 from './pictures/pic-3.jpeg';

const SingleComponent = () => {
    return (
        <div className='comment'>
            <a href="/" className='avatar'>
                <img src={p1} alt='profile picture'/>
            </a>
            <div className='comment'>
                <a href="/" className='author'>
                    Sarah
                </a>
                <div className='metadata'>
                    <span className='data'>
                        Today at 5:00PM
                    </span>
                </div>
                <div className='text'>
                    It's amazing!
                </div>
            </div>
        </div>
    )
}

export default SingleComponent;