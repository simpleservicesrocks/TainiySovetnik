import React, { Component } from "react";
import { Mobile, Desktop } from "./layouts";
export default class Samsung extends Component {
    componentDidMount =()=>{
        this.props.handleColor('black')
        this.props.handleHeader('Visa')
      }
  render() {
    return (
      <React.Fragment>
        {this.props.isMobile ? <Mobile lang={this.props.lang}/> : <Desktop lang={this.props.lang}/>}
      </React.Fragment>
    );
  }
}