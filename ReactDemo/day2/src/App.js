import React,{Component, component} from 'react'
import PropTypes from 'prop-types'


class Header extends Component{
    static propTypes = {
        //要验证的属性名： PropTypes.期望的类型
        title: PropTypes.string
    }


    render(){
        return(
            <div>
                {this.props.title}
            </div>
        )
    }
}


export default class App extends Component {
    render(){
        return (
            <div>
                <Header title="123"></Header>
            </div>
        )
    }
}