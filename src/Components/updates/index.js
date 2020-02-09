import React from "react";

export default class Updates extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{this.props.label}</span>
                <span>{this.props.time}</span>
            </div>
        )
    }
}