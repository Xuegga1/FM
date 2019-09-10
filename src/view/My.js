import React, { Component } from 'react'

class My extends Component {
    render() {
        return (
            <div className='my'>
                <div className='sma'>
                   <div className='lk'> <img src='/1.jpg' alt=''/>
                <li>雪(来自QQ)</li></div>
                <li>我的账户></li>
                </div>
                <div className='sma'>
                <li>我的已购</li>
                <li>></li>
                </div>
                <div className='sma' onClick={()=>{this.props.history.push('/love')}}>
                <li>我的收藏</li>
                <li>></li>
                </div>
                <div className='sma'>
                <li>我的下载</li>
                <li>></li>
                </div>
                <div className='sma'>
                <li>最近收听</li>
                <li>></li>
                </div>
                <p>问题反馈</p>
            </div>
        )
    }
}

export default My
