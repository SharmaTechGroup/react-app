import React from "react";

export class ToolBar extends React.Component
{
    constructor(){
         super();
    }
    render(){
        return(
            <nav style={{width:'200x'}}>
               <h3>{this.props.title}</h3>
               <ul className="list-group">
                 {
                    this.props.menuItems.map(item=>
                        <li key={item} className="list-group-item list-group-item-dark my-2">{item}</li>
                    )
                 }
               </ul>
            </nav>
        )
    }
}