import React, { Component } from "react";
import { css, StyleSheet } from 'aphrodite';
export default class Youtube extends Component {
  render() {
    return (
      <iframe
        title="video"
        className={css(styles.wrap)}
        width="765"
        height="432"
        src="https://www.youtube.com/embed/k23sqanlN44?rel=0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    );
  }
}
const styles = StyleSheet.create({
    wrap:{
        marginTop: "125px",
        marginBottom:"160px",
    }
})