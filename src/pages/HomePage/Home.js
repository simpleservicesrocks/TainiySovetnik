import React, { Component } from "react";
import { Mobile, Desktop } from "./layouts";
export default class Home extends Component {
  componentDidMount = () => {
    this.props.handleColor("black");
    this.props.handleHeader(this.props.lang === "ru" ? "Привет" : "Hello");
  };
  componentDidUpdate = (prevProps) =>{
    if (this.props.lang !== prevProps.lang) {
      this.props.handleHeader(this.props.lang === "ru" ? "Привет" : "Hello");
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.props.isMobile ? (
          <Mobile handleColor={this.props.handleColor} lang={this.props.lang}/>
        ) : (
          <Desktop handleHalfColor={this.props.handleHalfColor} lang={this.props.lang}/>
        )}
      </React.Fragment>
    );
  }
}
