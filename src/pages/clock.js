/**
 * Created by Administrator on 2018/5/13.
 */
import React from 'react'
export default class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state={
            date:new Date(),
            id:1
        }
        console.log('初始化')
    }
    componentDidMount(){
        console.log('完成挂载')
        this.timerId=setInterval(()=>{
           this.tick()
            this.addId()
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }
    addId(){
        this.setState({
            id:this.state.id+2
        })
    }
    render(){
        return (
            <div>
                <p>现在时间{this.state.id}</p>
                <h3>{this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}