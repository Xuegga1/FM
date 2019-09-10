import React, { Component } from 'react'
import Foot from '../component/Foot'
import { connect } from 'react-redux'
// import { detalist } from '../store/action/action'

class Love extends Component {
    render() {
        let { arrlist } = this.props
        console.log(arrlist)
        return (
            <div className='love'>
                <div className='sc'>
                    <li onClick={() => { this.props.history.push('/home') }}>>返回</li>
                    <li>我的收藏</li>
                </div>
                <main>
                    {
                    arrlist.map((item,index)=>{
                 return  <dl key={index}>
                        <dt><img src={item.c_2_pic} alt='' /></dt>
                        <dd>
                            <li>{item.tit}</li>
                            <li>{item.titl}</li>
                            <li>{item.titla}</li>
                        </dd>
    
                    </dl>
                    })
                    }
               
                        <p onClick={()=>{this.props.history.push('/home/many')}}>添加收藏</p>
                   
                </main>

                <Foot />
            </div>

        )
    }
    // componentDidMount(){
    //     this.props.arrlist()
    // }
}

export default connect((state) => {
    return {
        arrlist: state.arrlist
    }
}, (dispatch) => {
    return {
        // a: (item) => {
        //     dispatch(detalist(item))
        // }
    }
})(Love)
