import React from 'react';

const Home = () => {
    return(
        <div 
            className='ui raised very padded text container segment'
            style={{marginTop: '80px'}}
        >
            <h3 className='ui header'>
                Home
            </h3>
            <p>
                This is the paragraph of this route. It doesn't need to be too long but at least some content here.
            </p>

        </div>
    )
}

export default Home;