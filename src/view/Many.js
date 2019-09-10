import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink,Redirect,Route} from 'react-router-dom'
import '../mock/mock.js'
import btmSlight from './btmSlight'
import { detalist } from '../store/action/action'

class Many extends Component {
  
    render() {
        let {list} =this.props
        // console.log(list)
        return (
            <div className='many'>
               <div className='top'>
               {list.map((item,index)=>{
                    return (
                       <NavLink key={index} to={`/home/many/btmSlight/${index}`}>{item.c_1_title}</NavLink>
                    )
                })}
               </div>
               <div className='bottom'>
                   <Route path='/home/many/btmSlight/:id' component={btmSlight}></Route>
                   <Redirect to='/home/many/btmSlight/0'></Redirect>
               </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.load()
    }
}

export default connect((state)=>{
return{
list:state.list
}
},(dispatch)=>{
return{
load:()=>{
    dispatch(detalist())
}
}
})(Many)
