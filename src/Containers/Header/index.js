import React, { Component } from "react";
import Button from "../../Components/Button";
import SearchField from "react-search-field";

import "./index.css";

export default class Header extends Component {
  render() {
    return (
      <div className={"header"}>
        <div className={"col-md-12"}>
          <div className={"row"}>
            <div className={"col-md-6"}>
              <div className={"header-left-content"}>
                <span>Ascent Hr</span>
                <div className={"empty-space"} />
                <div>
                  <Button
                    className={"m-rt-12"}
                    bgColor={"#E8E8E8"}
                    label={"Dashboard"}
                  />
                  <Button bgColor={"#E8E8E8"} label={"Other1"} />
                </div>
              </div>
            </div>
            <div className={"col-md-6"}>
              <SearchField placeholder="Search..." />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
