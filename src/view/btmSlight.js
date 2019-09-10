import React, { Component } from 'react'
import { detalist } from '../store/action/action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class btmSlight extends Component {
    render() {
        let { list } = this.props
        // console.log(list)
        let index = this.props.match.params.id

        return (
            <div className='btmSlight'>
                {/* {list.lenght>0&&list} */}
                {
                    list[index] && list[index].c_1_content.map((item, index) => {
                        return (
                            <div key={index}>
                                {item.c_2_content.map((item2, index2) => {
                                    return (
                                        <div key={index2}>
                                            <Link to={{ pathname: '/detail', state:item2 }}>
                                                <dl>
                                                    <dt><img src={item.c_2_pic} alt='' /></dt>
                                                    <dd>
                                                        <li>{item.tit}</li>
                                                        <li>{item.titl}</li>
                                                        <li>{item.titla}</li>
                                                    </dd>

                                                </dl>

                                            </Link>
                                        </div>

                                    )
                                })}
                            </div>
                        )
                    })
                }
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
        }
    }
})(btmSlight)