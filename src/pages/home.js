/**
 * Created by Administrator on 2018/4/16.
 */
import React from 'react'
import Welcome from './test'
import Clock from './clock'
import LoginControll from './loginControll'
import List from './List'
import './home.css'
export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            items: [1, 2, 3]
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const {items} = this.state;
        items.splice(items.length - 1, 1);
        this.setState({items});
    }

    handleItemClick(index) {
        console.log(index)
    }

    render() {
        return (
            <div className="home">
                <h2>列表</h2>
                <button onClick={this.handleClick}>减少</button>
               <div className="demo1 flex">
                   <ul>
                       {
                           this.state.items.map((item, index) => {
                               return (<li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>)
                           })
                       }
                   </ul>
                   <ul>
                       <Welcome name="zxf"/>
                       <Welcome name="左晓飞"/>
                       <Welcome name="周杰伦"/>
                   </ul>
                   <p>登录状态控制DEMO</p>
                   <LoginControll/>
                   <List/>
               </div>
            </div>
        )

    }
}