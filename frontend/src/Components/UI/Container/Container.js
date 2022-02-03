import React from "react";
import "./Container.css";

export default function UiContainer({children}){
    return(
        <div className="ui-container">
            {children}
        </div>
    )
}