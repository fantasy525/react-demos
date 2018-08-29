import React from 'react'
import axios from 'axios'
export default class Temp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'原始'
        }
    }
    componentWillMount(){

    }
    componentDidMount(){
        let that=this
        axios.get('https://www.easy-mock.com/mock/59ad1adde0dc6633419bc2b6/example/user').then(({data})=>{
            that.setState({
                name:data.data[0].user.name
            })
        })
    }
    render(){
        return(
            <div>
                {this.state.name}
            </div>
        )
    }
}