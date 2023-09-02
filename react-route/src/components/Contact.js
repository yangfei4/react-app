import React from 'react';
import { Link } from 'react-router-dom';
// import {useParams} from 'react-router-dom';

const Contact = ({route}) => {
    // const params = useParams()
    // console.log(params)

    return(
        <div>
            <div className='ui raised very padded text container segment'
                style={{marginTop: '80px'}}
            >
                <Link to='/card/Alex'  className='ui header'> Alex </Link>
                <p> This is the paragraph of this route. It doesn't need to be too lo.</p>
            </div>
            <div className='ui raised very padded text container segment'
                style={{marginTop: '80px'}}
            >
                <Link to='/card/Wallim' className='ui header'> Wallim </Link>
                <p> This is the paragraph of this route. It doesn't need to be too long but at least some content here.</p>
            </div>
        </div>

    )
}

export default Contact;