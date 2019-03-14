import React, { Component } from "react";
import { Mobile, Desktop } from "./layouts";

export default class TastyKitchen extends Component {
    componentDidMount =()=>{
        this.props.handleColor('black')
        this.props.handleHeader('Вкусная Алма-ата')
      }
  render() {
    return (
      <React.Fragment>
        {this.props.isMobile ? <Mobile lang={this.props.lang}/> : <Desktop lang={this.props.lang}/>}
      </React.Fragment>
    );
  }
}