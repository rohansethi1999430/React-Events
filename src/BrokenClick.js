import React, { Component } from 'react'
class BrokenClick extends Component{
    constructor(props){
        super(props);
        this.state={clicked:false}
        this.handelClick=this.handelClick.bind(this);
    }
    handelClick(e){
        this.setState({clicked:true});
    }
    render(){
        
        return(
            <div>
                <h1>{this.state.clicked ?'Clicked':'Not Clicked!!!'}</h1>
                <button onClick={this.handelClick}>Click Me!!</button>
            </div>
        )
    }
}
export default BrokenClick;