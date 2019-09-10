import React, { Component } from 'react'
import {Switch,Route,NavLink,Redirect} from 'react-router-dom'
import My from './My'
import Many from './Many'
import Hotel from './Hotel'
import Love from './Love'
import Hot from './Hot'

class Main extends Component {
    render() {
        return (
            <div className='main'> 
            <div className='pare'>
            <NavLink to='/home/my' className='ab'>我的</NavLink>
                <NavLink to='/home/hot' className='ab'>热门</NavLink>
                <NavLink to='/home/many' className='ab'>分类</NavLink>
                <NavLink to='/home/hotel' className='ab'>精品</NavLink>
                
            </div>
              
                <Switch>
                    <Route path='/home/my' component={My}></Route>
                    <Route path='/home/hot' component={Hot}></Route>
                    <Route path='/home/many' component={Many}></Route>
                    <Route path='/home/hotel' component={Hotel}></Route>
                    <Route path='/love' component={Love}></Route>
                    <Redirect from='/home' to='/home/my'></Redirect>
                </Switch>
            </div>
        )
    }
}

export default Main
