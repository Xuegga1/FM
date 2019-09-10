import React, { Component } from 'react'
// import {BrowserRouter,Switch,Route,NavLink,Redirect} from 'react-router-dom'
import Head from '../component/Head.js'
import Foot from '../component/Foot.js'
import Main from './Main.js'
class Home extends Component {
    render() {
        return (
            <div className='home'>
             <Head/>
             <Main/>
             <Foot/>
            </div>
        )
    }
}

export default Home
