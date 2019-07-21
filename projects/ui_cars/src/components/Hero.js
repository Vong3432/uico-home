import React, { Component } from 'react'

export default class Hero extends Component {   
    
    constructor(props)
    {
        super(props);
        this.state = {
            theClassName: "",
        };             
    }

    render() {                
        
        return (
            <section onChange={this.handleChanged} className={(this.props.name === "first" ? this.state.theClassName = 'smallHero' : this.state.theClassName = "")}>                
                <div className="container">
                    {this.props.children}
                </div>
            </section>
        )
    }
}
