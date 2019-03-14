import React, { Component } from "react";
import { Mobile, Desktop } from "./layouts";
export default class Home extends Component {
componentDidMount =()=>{
  this.props.handleColor('black')
  this.props.handleHeader(this.props.lang === "ru" ? "Команда" : "Our Team")
}
componentDidUpdate = (prevProps) =>{
  if (this.props.lang !== prevProps.lang) {
    this.props.handleHeader(this.props.lang === "ru" ? "Команда" : "Our Team")
  }
}
  render() {
    return (
      <React.Fragment>
        {this.props.isMobile ? <Mobile lang={this.props.lang}/> : <Desktop lang={this.props.lang}/>}
      </React.Fragment>
    );
  }
}