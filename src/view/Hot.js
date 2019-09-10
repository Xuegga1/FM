import React, { Component } from 'react'
import Swiper from 'swiper'
import '../../node_modules/swiper/dist/css/swiper.min.css'
import '../../node_modules/swiper/dist/js/swiper.min.js'

class Hot extends Component {
    render() {
        return (
            <div className='hot'>
                <div className="swiper-container banner">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><img src='/4.jpg' alt=''/></div>
            <div className="swiper-slide"><img src='/3.jpg' alt=''/></div>
            <div className="swiper-slide"><img src='/2.jpg' alt=''/></div>
          </div>
          {/* 如果需要分页器  */}
          <div className="swiper-pagination"></div>

          {/* 如果需要导航按钮 */}
{/* 
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div> */}

          {/* 如果需要滚动条  */}
          {/* <div className="swiper-scrollbar"></div> */}
        </div>
        <div className='sh'>
            <div className='show'>
                <img src='/10.jpg' alt=''/>
                <li>网络小说</li>
            </div>
            <div className='show'>
                <img src='/11.jpg' alt=''/>
                <li>情感</li>
            </div>
            <div className='show'>
                <img src='/12.jpg' alt=''/>
                <li>财经</li>
            </div>
            <div className='show'>
                <img src='/13.jpg' alt=''/>
                <li>相声</li>
            </div>
            <div className='show'>
                <img src='/14.jpg' alt=''/>
                <li>儿童</li>
            </div>
        </div>
        <div className='dd'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className='zj'>
            <li>热门专辑</li><li>查看更多</li>
        </div>
        <dl className='zt'>
            <dt><img  src='/4.jpg' alt=''/></dt>
            <dd>
                <li>最新最全小沈龙脱口秀</li>
                <li>原来脱口秀可以折磨好玩</li>
                <li>9.86万次播放 共64集</li>
            </dd>
        </dl>
                </div>
        )
    }
    componentDidMount(){
        new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay:true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            
            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          })        
    }
}

export default Hot
