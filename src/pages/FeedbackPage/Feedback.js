import React, { Component } from "react";
import { Mobile, Desktop } from "./layouts";
export default class Feedback extends Component {
  componentDidMount = () => {
    this.props.handleColor("black");
    this.props.handleHeader(this.props.lang === "ru" ? "Отзывы" : "Testimonials")
  };
  render() {
    return (
      <React.Fragment>
        {this.props.isMobile ? <Mobile handleColor={this.props.handleColor}/> : <Desktop handleHalfColor={this.props.handleHalfColor} isModalVisible={this.props.isModalVisible}/>}
      </React.Fragment>
    );
  }
}
