// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Searchbar from '../components/Searchbar';
import Button from '../components/Button';
import Modal from '../components/Modal'

class App extends Component {

  state = {
    searchQuery: "",
    page: 1,
    showModal: false,
    largeImageURL: null
  }

  handleSerchQuery = inputText => {
    this.setState({searchQuery: inputText})
  }

  onLoadMore = () => {
    this.setState(preState => ({page: preState.page + 1}))
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  openModal = e => {
    this.toggleModal()
    this.setState({largeImageURL: e})
  }
 
  render () {
    const { showModal, largeImageURL } = this.state

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSerchQuery} />
        <ImageGallery
          searchQuery={this.state.searchQuery}
          openModal={this.openModal}
          page={this.state.page}/>
        <Button onClickBtn={this.onLoadMore} />
        {showModal && <Modal closeModal={this.toggleModal} largeImageURL={largeImageURL}/>}
      </div>
    )
  }
}

export default App;
