import React from 'react';
import {useParams} from 'react-router';

const Card = () => {
    const params = useParams()
    console.log(params)
 
    return(
        <div 
        className='ui raised very padded text container segment'
        style={{marginTop: '80px'}}
        >
        <h3 className='ui header'>
            {params.user}
        </h3>
    </div>
    )
}

// class Card extends React.Component {

//     componentDidMount() {
//         // let params = useParams()
//         // let user = this.props.match.params.users
//         // console.log(params)
//     }

//     render() {
//         return(
//             <div 
//             className='ui raised very padded text container segment'
//             style={{marginTop: '80px'}}
//             >
//             <h3 className='ui header'>
//                 Card
//             </h3>
//         </div>
//         )
//     }
// }

export default Card;