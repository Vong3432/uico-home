import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

function TabItem(props){

        return (
            <>      
                <NavLink 
                to={"/"+props.category}
                activeClassName="selectedTab"
                className="flex-fill list-group-item"
                onClick={props.tabChanged}                               
                key={props.id} 
                value={props.id} 
                >                   
                    {props.text}          
                </NavLink>                                                        
            </>
        )
    
}

export default TabItem
