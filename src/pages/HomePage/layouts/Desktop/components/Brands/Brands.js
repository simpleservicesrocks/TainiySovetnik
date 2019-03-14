import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import arr from "./arr";
export default class Brands extends Component {
  render() {
    return (
      <div className={css(styles.page)}>
        <div className={css(styles.inside)}>
          {arr.map(item => {
            return (
              <div className={css(styles.logoBox)} key={item.link}>
                <a target="_blank" rel="noopener noreferrer" href={item.link} style={{width: '100%', display: 'flex'}}>
                  <img src={item.icon} alt="" style={{height: "100%",width: "50%"}}/>
                </a>
              </div>
            );
          })}
        </div>
        <div className={css(styles.more)}>
          {this.props.lang === "ru" ? (
            <p>И еще 90 клиентов</p>
          ) : (
            <p>And 90 more clients</p>
          )}
        </div>
      </div>
    );
  }
}
