import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { css } from "aphrodite";
import styles from "./styles";
import arr from "./arr";
import Options from "./components/Options";
export default class Desktop extends Component {
  state = {
    currentIndex: 0
  };
  indexHandler = i => {
    this.setState({ currentIndex: i });
  };
  render() {
    const params = {
      licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      anchors: ["0", "1", "2", "3", "4", "5", "6", "7"],
      onLeave: (origin, destination, direction) => {
        this.setState({ currentIndex: Number(destination.anchor) });
      },
      afterRender: () => {
        this.setState({
          currentIndex: Number(
            window.location.href.substr(window.location.href.length - 1)
          )
        });
      },
      menu: "#menu"
    };
    console.log(this.state);
    return (
      <div className={css(styles.page, styles.fadeIn)}>
        <Options
          currentIndex={this.state.currentIndex}
          indexHandler={this.indexHandler}
        />
        <ReactFullpage
          {...params}
          render={({ state, fullpageApi }) => {
            fullpageApi.moveTo(this.state.currentIndex);
            return (
              <ReactFullpage.Wrapper>
                {arr.map(item => {
                  return (
                    <div
                      className={`section ${css(styles.brandWrapp)}`}
                      key={item.id}
                    >
                      <div className={css(styles.brand)}>
                        <div className={css(styles.insideWrap)}>
                          <p className={css(styles.header)}>
                            {item.name.split("\n").map((item, key) => {
                              return (
                                <React.Fragment key={key}>
                                  {item}
                                  <br />
                                </React.Fragment>
                              );
                            })}
                          </p>
                          <p className={css(styles.text)}>{item.feedback}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}
