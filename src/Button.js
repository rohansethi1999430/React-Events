#
import React, { Component } from 'react'

class Button extends Component{
    render(){
        return (
            <button onClick={function(){alert("How dare you to click me...")}}>Click me!!</button>
        )
    }
}
export default Button;
