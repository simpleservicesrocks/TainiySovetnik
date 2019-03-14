import React, { Component } from "react";
import { Mobile, Desktop } from "./layouts";
export default class Services extends Component {
  componentDidMount = () => {
    this.props.handleColor("black");
    this.props.handleHeader(this.props.lang === "ru" ? "Услуги" : "Services");
  };
  componentDidUpdate = (prevProps) =>{
    if (this.props.lang !== prevProps.lang) {
      this.props.handleHeader(this.props.lang === "ru" ? "Услуги" : "Services");
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.props.isMobile ? <Mobile lang={this.props.lang}/> : <Desktop lang={this.props.lang} />}
      </React.Fragment>
    );
  }
}
