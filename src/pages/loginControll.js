import React from 'react'
function Login(props) {
    return(
        <div>
            请登录!
        </div>
    )
}
function Home(props){
    return(
        <div>
            欢迎回来！
        </div>
    )
}
export default class LoginControl extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loginStatus:false
        }
       this.changeStatus= this.changeStatus.bind(this)
    }
    changeStatus(){
        this.setState({
            loginStatus:!this.state.loginStatus
        })
    }
    render(){
        let View,Button
        let status=this.state.loginStatus
        if(!status){
            View=<Login/>
            Button=<button onClick={this.changeStatus}>登录</button>
        }else{
            View=<Home/>
            Button=<button onClick={this.changeStatus}>退出</button>
        }
        return(
            <div className="wrap">
               <Login/>
                {Button}
            </div>
        )
    }
}