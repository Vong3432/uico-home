import React, {Component} from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import NavBar from '../components/NavBar.js'
import Hero from '../components/Hero.js'
import SearchBar from '../components/SearchBar.js'
import Tabs from '../components/Tabs.js'
import Gallery from '../components/Gallery.js'

class main extends Component {

    constructor(props)
    {
        super(props);        
        this.state = {
            allTabs:
            [
                {
                    id: 0,
                    text: "Photos",
                    category: "photo-grid",
                    selected: true
                },
                {
                    id: 1,
                    text: "Videos",
                    category: "video-grid",
                    selected: false
                }
            ],            
            currentTabIndex: 0,
        };
        this.onTabChanged = this.onTabChanged.bind(this);
    }

     // function
     onTabChanged(e)
     {
        //console.log(e.target.value)            
        e.preventDefault();
        let { value } = e.target;        
        // {} = target, this.state = source
        var stateCopy = Object.assign({}, this.state); 
               
        // bugs
        //========================================================= 
        this.state.allTabs.forEach( (index) => {
            let temp = 0;
            if(index === value)
            {                
                //console.log(index,value,"matched")
                stateCopy.allTabs[index].selected = !stateCopy.allTabs[index].selected;                        
                temp = index;
                stateCopy.currentTabIndex = temp;                
            }
            else
            {
                stateCopy.allTabs[index].selected = false;
                //stateCopy.currentTabIndex = 1;
            }
        });  
                
        this.setState(stateCopy);    
        console.log(this.state.currentTabIndex)
     }    

    render(){
        return (
            <Router>
            <div>
                
                {/* Topnav component */}
                <NavBar />
    
                {/* Hero component */}
                <Hero name="first">
                    <SearchBar />                
                </Hero>   
    
                {/* Tabs Control*/}
                {/* <Tabs tabs={this.state.allTabs} changingTab={this.onTabChanged} />                                     */}
                <Tabs tabs={this.state.allTabs} />
    
                {/* Display grid 
                <Hero>
                    <div className={ ( this.state.currentTabIndex === 0 ? "photo-grid" : "video-grid" ) }>
                        
                    </div>
                </Hero>            
                */}
                
                <Route path="/:grid" render={(props)=> <Gallery {...props} />} />                
    
            </div>
            </Router>
        )
    }       
}

export default main
