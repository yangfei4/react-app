import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class TodoList extends React.Component{
    static contextType = ThemeContext;
    render() {
        const {isDarkTheme, lightTheme, darkTheme} = this.context;
        const theme = (isDarkTheme) ? darkTheme : lightTheme;
        console.log(theme);

        return(
            <div style={{background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}} className='ui list'>
                <p className='item'>Plan a family trip</p>
                <p className='item'>Date with a girl</p>
                <p className='item'>Go for a walk</p>
            </div>
        )
    }
}

export default TodoList;