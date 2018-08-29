import React from 'react'
const {Provider, Consumer} = React.createContext(333);
class Group extends React.Component{
    render(){
        return(
           <div>
              <Provider value="abc">
                  {this.props.children}
              </Provider>
           </div>
        )
    }
}
class Radio extends React.Component{
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
    }
    render(){
        return(
            <Consumer>
                {value=>(
                    <label onChange={this.handleChange}>
                        <input type="radio"/>
                        {this.props.children}
                    </label>
                )}
            </Consumer>
           
        )
    }
}
export default class Con extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:'22'
        }
    }
    render(){
        return (
            <div>
                <Group model={this.state.value}>
                    <Radio value={1}>22</Radio>
                </Group>
            </div>
        )
    }
}