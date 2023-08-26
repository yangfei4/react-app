import React from 'react';
import {createRoot} from 'react-dom/client';
import SingleComment from './SingleComment';

const App = () => {
    return(
        <div className='ui comments'>
            <SingleComment/>
        </div>
    )
}

//Updates to Client Rendering APIs :
//https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis
const root = createRoot(document.querySelector('#root'));
root.render(<App />);