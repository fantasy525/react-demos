import React from 'react'
function ListView(props) {
    console.log('重新渲染了')
    return ([ <ul key={0}>
            {props.numbers.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>,
        <p key={1}>22</p>]

    )
}
export default class ListDemo extends React.Component{
    constructor(){
        super();
        this.state={
            numbers:[1,2,2,3,5,4,5],
            num:0
        }
        this.addNum=this.addNum.bind(this)
    }
    addNum(arg){
        console.log(arg)
        this.setState({
            num:  ++this.state.num
        })
    }
    render(){
        return [
            (
                <div key={0}>
                    {this.state.num}
                    <button onClick={this.addNum}>增加num</button>
                </div>
            ),
            <ListView key={1} numbers={this.state.numbers} />
        ]
    }
}