import React, {Component} from "react"
import { createPortal } from 'react-dom'
import './modal.css'

const modalRoot = document.querySelector('#modal-root')

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown)
    }
    
    handleKeydown = e => {
        if (e.code === 'Escape') {
                this.props.closeModal()
            }
    }

    handleOverlay = event => {
        if (event.currentTarget === event.target) {
            this.props.closeModal()
        }
    }

    render() {
        return createPortal(
            <div className="Overlay"
                onClick={this.handleOverlay}>
              <div className="Modal">
                <img src={this.props.largeImageURL} alt="" />
              </div>
            </div>,
            modalRoot
        )
    }
}