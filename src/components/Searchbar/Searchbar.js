import React, { Component } from "react"
// import { ImSearch } from 'react-icons/im'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './searchbar.css'

export default class Searchbar extends Component {
    state = {
        inputText:""
    }

    handleChange = e => {
        this.setState({inputText: e.currentTarget.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.inputText.trim() === "") {
            toast('enter your search term')
            return
        }
        this.props.onSubmit(this.state.inputText.toLowerCase())
        this.setState({inputText:""})
    }

    render() {
        return (
            
            <header className="Searchbar">
                <form
                    onSubmit={this.handleSubmit}
                    className="SearchForm">
                <button 
                    type="submit" 
                    className="SearchForm-button">
                        {/* <ImSearch/>     */}
                    <span className="SearchForm-button-label"> Search</span>
                </button>
        

                <input
                  className="SearchForm-input"
                  type="text"
                  name= "inputText"
                  value={this.state.inputText}
                  onChange={this.handleChange}
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                />
                </form>
                    <ToastContainer autoClose={2000}/>
            </header>
        )
    }
}