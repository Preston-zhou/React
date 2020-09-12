import React, { Component } from 'react'

export default class App8 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [{id:1,value:'值1'},{id:2,value:'值2'},{id:3,value:'值3'},{id:4,value:'值4'}]
        }
    }



    handleClick(){
        this.setState({
            list: [{id:5,value:'值5'},{id:2,value:'值2'},{id:3,value:'值3'},{id:4,value:'值4'}]
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>按钮</button>
                <ul>
                    {
                        this.state.list.map((v,k) => {
                            return (
                                <li key={v.id}>{v.value}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
