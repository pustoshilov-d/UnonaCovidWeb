import React, { Component } from "react";
import ScrollBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import "./test.scss";

class Example extends Component {
    render() {
        return (
                <ScrollBar className="example">
                    <div className="content" />
                </ScrollBar>
        );
    }
}

export default Example;