import React, { Component } from "react";
import { Mobile, Desktop } from "./layouts";
export default class HNM extends Component {
    componentDidMount =()=>{
        this.props.handleColor('black')
        this.props.handleHeader('H&M')
      }
  render() {
    return (
      <React.Fragment>
        {this.props.isMobile ? <Mobile lang={this.props.lang}/> : <Desktop lang={this.props.lang}/>}
      </React.Fragment>
    );
  }
}
