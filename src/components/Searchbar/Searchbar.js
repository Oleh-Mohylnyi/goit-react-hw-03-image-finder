import React, { Component } from "react"
// import { ImSearch } from 'react-icons/im'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './searchbar.css'

export default class Searchbar extends Component {
    state = {
        inputText: "",
        сurrentSearch: ""
    }

    handleChange = e => {
        this.setState({inputText: e.currentTarget.value})
    }

    handleSubmit = e => {
        const {inputText, сurrentSearch} = this.state
        e.preventDefault();
        if (inputText.trim() === "") {
            toast('enter your search term')
            return
        }
        if (inputText.trim().toLowerCase() === сurrentSearch.toLowerCase()) {
            toast('enter a new search query')
            return
        }
        this.props.onSubmit(inputText.toLowerCase())
        this.setState({сurrentSearch: inputText})
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
                        <span className="SearchForm-button-label">
                            Search
                        </span>
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
                    
            </header>
        )
    }
}