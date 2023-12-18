import React,{Component} from "react";
class StateClassCom extends Component
{
    state={
        color:"Yellow",
        price:143
    }
    handleChange=()=>{this.setState({color:"Red",price:120})}
    render()
    {
        return(
            <div>
            <h1>The color i have selected is {this.state.color} the price is {this.state.price}</h1>
            <button onClick={this.handleChange}>Click</button>
            </div>
        )
    }
}
export default StateClassCom;