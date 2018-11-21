import React from 'react';

const GifSearch = (props) => {
  const { handleSubmit, handleChange, searchValue } = props
    return (
      <div>
        <form onSubmit={props.handleSubmit}>
          <input name="searchTerm" onChange={props.handleChange} value={searchValue}/>
          <input type="submit" value="Find Gifs" />
        </form>
      </div>
    )
}

export default GifSearch
