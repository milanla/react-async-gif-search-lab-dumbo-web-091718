import React, { Component } from 'react';
import GifSearch from '../components/GifSearch.js'
import GifList from '../components/GifList.js'

// renders our GifList and GifSearch components
// fetching and storing gifs data

export default class GifListContainer extends Component {
  state = {
    gifs: [],
    searchTerm: 'cheese'
  }

  componentDidMount() {
    this.doTheFetch()
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.doTheFetch()
    this.setState({
      searchTerm: ""
    })
  }

  doTheFetch = () => {
    const firstUrl = 'http://api.giphy.com/v1/gifs/search?q='
    const secondUrl = '&api_key=dc6zaTOxFJmzC&rating=g'

    fetch(firstUrl + this.state.searchTerm + secondUrl)
      .then(res => res.json())
      .then(json => {
        const gifsArr = json.data.slice(0,3)
        this.setState({
          gifs: gifsArr
        })
      })
  }

  render() {
    const { gifs, searchTerm } = this.state

    return (
      <div>
        <GifSearch     handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchValue={searchTerm}/>
        <GifList gifs={ gifs }/>
      </div>
    )
  }

}
