import './App.css';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Loader from "react-loader-spinner";
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Searchbar from '../components/Searchbar';
import Button from '../components/Button';
import Modal from '../components/Modal';
import logo from '.././images/pixabay.svg'
import Reject from '../components/Reject';


class App extends Component {

  state = {
    searchQuery: "",
    page: 1,
    images: null,
    // idle, pending, resolved, rejected
    status: 'idle',
    error: null,
    showModal: false,
    largeImageURL: null,
  }

  handleSerchQuery = inputText => {
    this.setState({searchQuery: inputText, page: 1, images: null})
  }

  clickLoadMore = () => {
    this.setState(preState => ({page: preState.page + 1}))
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  openModal = largeImageURL => {
    this.toggleModal()
    this.setState({largeImageURL})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
        
    const { searchQuery, page } = this.state
    const key = '23100345-a1985f2d3b70e4240f74cca05'
    const orientation = 'horizontal'
    const imageType = 'photo'
    const perPage = 12

 
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      if (prevState.page === page) {
        this.setState({ status: 'pending' })
      }
      fetch(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=${imageType}&orientation=${orientation}&per_page=${perPage}`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(
            new Error(`nothing found for this request: ${searchQuery}`)
            // this.setState({ status: 'rejected' })
          )
        })
        .then(images => {
            this.setState({ status: 'resolved' })
            this.writeDownData(images)
        })
        .then(() => {
          if (this.state.images.length === 0) {
            this.setState({ status: 'rejected' })
          }
        })
        .catch(error => this.setState({status: 'rejected'}))
    }

    if (page !== 1) {
      window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
      })
    }
  }
    
    writeDownData = (newImages) => {
        if (this.state.images === null) {
            this.setState({images: newImages.hits})
        } else {
            this.setState((preState) => ({images: preState.images.concat(newImages.hits)}))
        }
    }

  checkNeedLoadMore = () => {
    if (this.state.images !== null
      && this.state.images.length !== 0
      && this.state.images.length % 12 === 0) {
        return true  
      }
  }

  render () {
    const { showModal, largeImageURL, status, searchQuery } = this.state

    return (
      <div className="App">

        <Searchbar onSubmit={this.handleSerchQuery} />

        {(status === 'idle') && 
          <img src={logo} alt="" className="Logo-image" />}
          
        {(status === 'pending') &&
          <div className="Div-loader">
            <Loader type="ThreeDots" color="blue" />
          </div>}
        
        {(status === 'resolved') &&
          <ImageGallery
            images={this.state.images}
            openModal={this.openModal}
          />}
          
        {(status === 'rejected') &&
          <Reject searchQuery={searchQuery}/>}
        
        {this.checkNeedLoadMore() &&
          < Button clickBtn={this.clickLoadMore} />}
        
        {showModal && <Modal
          closeModal={this.toggleModal}
          largeImageURL={largeImageURL} />}
        
        <ToastContainer autoClose={2000} />
        
      </div>
    )
  }
}

export default App;
