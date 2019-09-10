import React, { Component } from 'react'
import '../mock/mock.js'
import { connect } from 'react-redux'
import { detalist, add } from '../store/action/action.js'

class Detail extends Component {

    render() {
        // let { list } = this.props
        let c_3 = this.props.location.state
        //   console.log(this.props.location.state)
        let { titla,titl,tit,c_2_pic } = c_3
        console.log(c_3)
        return (
            <div className='det'>
                <li onClick={() => { this.props.history.goBack(-1) }}>></li>
                <dl>
                    <dt><img src={c_2_pic} alt='' /></dt>
                    <dd>
                        <li>{tit}</li>
                        <li>{titl}</li>
                        <li>{titla}</li>
                    </dd>

                </dl>
                <button onClick={() => {
                    this.props.add(c_3)
                    this.props.history.push('/love')
                }}>点击收藏</button>



                {/* { 
                  c_3 && c_3.c_2_content.map((item,index)=>{
                        return <div className='item0'>
                            <li>{item.id}</li>
                            <li><img src={item.pic} alt=''/></li>
                            <li>{item.name}</li>
                            <li>{item.price}</li>
                        </div>
                    }
                )
            
               } */}
            </div>
        )
    }
    componentDidMount() {
        this.props.load()
    }
}

export default connect((state) => {
    return {
        list: state.list
    }
}, (dispatch) => {
    return {
        load: () => {
            dispatch(detalist())
        },
        add: (item) => {
            dispatch((add(item)))
        }
    }
})(Detail)
