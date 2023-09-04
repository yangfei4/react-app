import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const TodoList = () => {
    const {isDarkTheme, lightTheme, darkTheme, changeTheme} = useContext(ThemeContext);
    const theme = (isDarkTheme) ? darkTheme : lightTheme;

    return(
        <div style={{background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}} className='ui list'>
            <p className='item'>Plan a family trip</p>
            <p className='item'>Date with a girl</p>
            <p className='item'>Go for a walk</p>
            <button className='ui button primary' onClick={changeTheme}>Change the theme</button>
        </div>
    )
}

// class TodoList extends React.Component{
//     // static contextType = ThemeContext;

//     render() {
//         return (
//             <ThemeContext.Consumer>{(context) => {
//                 const {isDarkTheme, lightTheme, darkTheme, changeTheme} = context;
//                 const theme = (isDarkTheme) ? darkTheme : lightTheme;
//                 console.log(theme);
        
//                 return(
//                     <div style={{background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}} className='ui list'>
//                         <p className='item'>Plan a family trip</p>
//                         <p className='item'>Date with a girl</p>
//                         <p className='item'>Go for a walk</p>
//                         <button className='ui button primary' onClick={changeTheme}>Change the theme</button>
//                     </div>
//                 )
//             }}
//             </ThemeContext.Consumer>
//         )
//     }
// }

export default TodoList;