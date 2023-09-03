import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className = 'ui dimmer show show modals visible active'>
            <div className = 'ui raised very padded text container segment'>
                <h3>I'm a Modal</h3>
            </div>
        </div>,
        document.getElementById('Modal')
    )
}

export default Modal;