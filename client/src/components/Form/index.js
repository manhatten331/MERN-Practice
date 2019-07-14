import React from "react";

export function Input (props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props}/>
        </div>
    );
}

export function TextArea(props) {
    return (
        <div className="form-group">
            <textarea className="form-control" rows="7" {...props}/>
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button className="btn btn-dark" {...props}
        style={{ float: "right", marginBottom: 10 }}>
            {props.children}
        </button>
    );
}

export function Border({children}) {
    return (
        <div className="border border-dark rounded"
        style={{ padding: 10, paddingBottom: 45}}>
            {children}
        </div>
    );
}