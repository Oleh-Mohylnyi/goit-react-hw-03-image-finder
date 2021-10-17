import ImageGalleryItem from '../ImageGalleryItem'
import React, { Component } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"
import 'react-toastify/dist/ReactToastify.css'
import './imageGallery.css'

export default class ImageGallery extends Component {
    state = {
        images: null,
        isLoading: false,
        error: null
    }
    
    componentDidUpdate(prevProps) {
        const { searchQuery, page } = this.props
        if (prevProps.searchQuery !== searchQuery || prevProps.page !== page) {
            this.setState({ isLoading: true })
            fetch(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=23100345-a1985f2d3b70e4240f74cca05&image_type=photo&orientation=horizontal&per_page=12`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    return Promise.reject(
                        new Error(`nothing found for this request: ${searchQuery}`)
                    )})
                .then(images => this.writeDownData(images))
                    .catch(error => this.setState({error}))
                        .finally(() => this.setState({isLoading: false}))
        }

        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }
    
    writeDownData = (newImages) => {
        if (this.state.images === null) {
            this.setState({images: newImages.hits})
        } else {
            this.setState((preState) => ({images: preState.images.concat(newImages.hits)}))
        }
    }


    render() {

        return (
            <>
            {this.state.images &&
                (<ul className="ImageGallery">
                <ImageGalleryItem 
                    images={this.state.images}
                    openModal={this.props.openModal} />
                
            </ul>)}
            {this.state.isLoading &&
                <Loader
                    type="ThreeDots"
                    color="blue" />
            }
            </>
        )
    }
}