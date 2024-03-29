import React, { Component } from 'react';

class Counter extends Component {

    render() {
        return ( 
            <div>
            <span className = {this.getBadgeClasses()}>{this.formatCounter()}</span>
            <button
            className = "btn btn-secondary btn-sm" 
            onClick = {() => this.props.onIncrement(this.props.counter)}>Increment</button>
             <button
            className = "btn btn-danger btn-sm m-2" 
            onClick = {() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
         );
    }

    getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCounter = () => {
        const {value} = this.props.counter; 
        return this.props.counter.value === 0 ? 'ZERO' : value;
    }
}
 
export default Counter;