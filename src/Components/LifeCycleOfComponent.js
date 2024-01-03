import React from "react";
import { Component} from "react";
import './LifeCycleofComponent.css';
class LifeCycleofComponent extends Component 
{
    constructor(props)
    {
        super(props)
        this.state={firstName:'It shows my name after clicking on on click'}
    }
    componentDidMount()
    {
        console.log("Component is in mounting phase")
    }
    updateState()
    {
        this.setState({firstName:'Rutuja'})
    }
    render()
    {
        return(
            <div>
                <h2>{this.state.firstName}</h2>
                <button onClick={this.updateState.bind(this)}>Click here</button>
            </div>
        )
    }
    shouldComponentUpdate(newProp,newState)
    {
        console.log("Component is in should component update or not")
        return true
    }
    componentDidUpdate(){
        console.log("component did update stage")
    }
    // componentWillUnmount()
    // {
    //     console.log("component Will Unmount")
    // }
}

export default LifeCycleofComponent
