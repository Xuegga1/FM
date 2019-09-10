import React, { Component } from 'react'
import './css/index.css'
import Router from './Router/Router.js'

export class App extends Component {
  render() {
    return (
      <div className='wrap'>
        <Router/>
      </div>
    )
  }
}

export default App
