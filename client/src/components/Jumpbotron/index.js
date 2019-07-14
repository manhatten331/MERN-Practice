import React from "react";

function Jumbotron ({children}) {
    return (
        <div style={{ paddingTop: 90, color: "#fff", 
        marginTop: 25, clear: "both"}}
        
        className="jumbotron bg-dark text-center font-italic">
            {children}
        </div>
    )
}

export default Jumbotron;