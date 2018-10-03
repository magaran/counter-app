import React, { Component } from "react";

class Counter extends Component {
// Lifecycle Hooks
//    componentDidUpdate(prevProps, prevState) {
//        console.log('prevProps', prevProps);
//        console.log('prevState', prevState);
//        if (prevProps.counter.value !== this.props.counter.value) {
//            console.log('Stuff was updated!')
//        };
//    };
//    componentWillUnmount() {
//        console.log('Counter - Unmounted');
//    };

// Controlled component: no local state
//    state = {
//        value: this.props.counter.value,
//        id: this.props.counter.id
//        tags: ["tag1", "tag2", "tag3"]
//    };
    
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // };

// Controlled component => no longer sets its own state => handleIncrement() no longer sensible
//    handleIncrement = () => {       // => doesn't rebind but inherits _this_
//        this.setState({ value: this.state.value + 1 });
//    };

    render() {
    
        return (
            <div>
                {/*Passing children (cfr. counters.jsx)
                {this.props.children}*/}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/* <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button> */}
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
{/*                { this.state.tags.length === 0 && 'Please create a new tag!'}
                { this.renderTags() } */}
            </div>
        );
    };
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    };

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    };
    renderTags() {
 
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;        
    };

};

export default Counter;
