import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr style= {this.props.tableData.theaderRow}>
              {this.props.tableData.tHeaderCells.map((header, index) => {
                return (
                  <th style={header.style} className={header.className} key={index}>
                    {header.name}
                  </th>
                );
              })}
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
