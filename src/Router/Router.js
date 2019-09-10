import React, { Component } from 'react'
import {BrowserRouter,Route,Redirect} from 'react-router-dom'
import Home from '../view/Home'
import Love from '../view/Love'
import Detail from '../view/Detail'

class Router extends Component {
    render() {
        return (
          <BrowserRouter>
           <Route path='/home' component={Home}></Route>
           <Route path='/love' component={Love}></Route>
           <Route path='/detail' component={Detail}></Route>
           <Redirect from='/' to='/home'></Redirect>
          </BrowserRouter>
        )
    }
}

export default Router
