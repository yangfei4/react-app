import React from 'react';
import {createRoot} from 'react-dom/client';
import SingleComment from './SingleComment';
import p1 from './pictures/pic-1.jpeg';
import p2 from './pictures/pic-2.jpeg';
import p3 from './pictures/pic-3.jpeg';
import UserCard from './UserCard';

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard>
                <div>
                    Hello here we are!
                </div>
            </UserCard>
            <UserCard>
                <SingleComment 
                    name="Jack" 
                    date="Today at 5:00PM" 
                    text="It's amazing!" 
                    picture={p1}/>
            </UserCard>
            <UserCard>
                <SingleComment 
                    name="Alex" 
                    date="Today at 6:00PM" 
                    text="Great job!" 
                    picture={p2}/>
            </UserCard>
            <UserCard>
                <SingleComment 
                    name="Sarah" 
                    date="Yesterday at 5:00PM" 
                    text="Thanks..."
                    picture={p3}/>
            </UserCard>
        </div>
    )
}

//Updates to Client Rendering APIs :
//https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis
const root = createRoot(document.querySelector('#root'));
root.render(<App />);