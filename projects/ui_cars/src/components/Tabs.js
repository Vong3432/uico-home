import React, {Component} from 'react';
import TabItem from './TabItem.js';

class Tabs extends Component {        

    constructor(props)
    {
        super(props);
        this.state = {
            allTabs: this.props.tabs     
        };        
    }    
                 

    render(){        
        return (
            <div className="tabs-container container py-2 pt-5 px-sm-0">
                <ul className="list-group flex-row">
                    {this.state.allTabs.map(item=>{return <TabItem tabChanged={this.props.changingTab} isSelected={item.selected} text={item.text} category={item.category} id={item.id} key={item.id}/>})}
                </ul>
            </div>
        )        
    }   
        
}

export default Tabs
