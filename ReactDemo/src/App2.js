import React, {Component} from 'react'
import './assets/css/style.css'
import Img from './assets/images/001.jpg'

console.log(Img);
export default class App2 extends Component {
    render() {
        return(
            <div>
                <span className='box'>这是一个span标签</span>
                <img src="{Img}" alt=""/>
            </div>
        )
    }
}
