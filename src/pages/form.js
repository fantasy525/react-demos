import React from 'react'
export default class NameForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:'22'
        }
        this.myRef=React.createRef()
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.showMask=this.showMask.bind(this)
    }
    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }
    handleSubmit(event){
        console.log(this.myRef)
        alert(this.state.value)
        event.preventDefault()

    }
    showMask(){
        
    }
    render(){
        return(
           [<button onClick="showMask">弹窗</button>,
               <form onSubmit={this.handleSubmit}>
                   <label>
                       Name:
                       <input type="text" value={this.state.value} ref={this.myRef} onChange={this.handleChange}/>
                   </label>
                   <input type="submit" value="submit"/>
               </form>
           ]

        )
    }
}