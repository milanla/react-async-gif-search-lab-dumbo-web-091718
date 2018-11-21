import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer.js'

// the App component should render out the GifListContainer component

function App() {
  // App is function component not class component
  // App does not know about lifecycle methods and cannot use them

  return (
    <div>
        <NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App
