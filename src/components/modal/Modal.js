import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import ModalComponent from "./ModalComponent";

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.el.className = 'modal';
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
        this.props.onOpen();
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);

    }

    render() {
        return ReactDOM.createPortal(
            <ModalComponent onClose={this.props.onClose}>
                {this.props.children}
            </ModalComponent>, this.el);
    }
}

export default Modal;