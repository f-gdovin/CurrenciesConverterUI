import React from 'react';
import './ModalComponent.css';

const ModalComponent = ({ children, onClose }) => (
    <div className='modal-component'>
        <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-50-l mw6 shadow-5 center bg-white'>
            {children}
            <div className='modal-component-close' onClick={onClose}>&times;</div>
        </article>
    </div>
);

export default ModalComponent;