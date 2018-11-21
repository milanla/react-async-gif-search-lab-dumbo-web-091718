import React from 'react';
// make a list of gif
// render them as img tags on the page

const GifList = (props) => {
  const { gifs } = props
  const mappedGifs = gifs.map(gif => (
      <li key={gif.id}><img src={gif.images.original.url}/></li>
    )
  )
  return <ul>{mappedGifs}</ul>
}

export default GifList

// any time that you know you don't need to use state we could make it a functional component
// look up destructuring
