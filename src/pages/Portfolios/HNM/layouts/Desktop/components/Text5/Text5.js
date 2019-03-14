import React, { Component } from 'react'
import { css } from 'aphrodite';
import styles from './styles';
export default class Text5 extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <p className={css(styles.h)}>{this.props.lang === 'ru' ? 'Медийный эффект' : 'Media effect'}</p>
        <div className={css(styles.wp)}>
            <div className={css(styles.wpi)}>
                <p className={css(styles.wpi1)}>{this.props.lang === 'ru' ? 'Алматы:' : 'Almaty:'}</p>
                <br/>
                <p className={css(styles.wpi2)}>{this.props.lang === 'ru' ? 'упоминаний - 61,' : 'mentions - 61,'}</p>
                <p className={css(styles.wpi2)}>{this.props.lang === 'ru' ? 'охват - 45 964 000;' : 'coverage - 45 964 000;'}</p>
            </div>
            <div className={css(styles.wpi)}>
                <p className={css(styles.wpi1)}>{this.props.lang === 'ru' ? 'Астане:' : 'Astana:'}</p>
                <br/>
                <p className={css(styles.wpi2)}>{this.props.lang === 'ru' ? 'упоминаний - 60,' : 'mentions - 60,'}</p>
                <p className={css(styles.wpi2)}>{this.props.lang === 'ru' ? 'охват - 35 882 400.' : 'coverage - 35 882 400.'}</p>
            </div>
        </div>
      </div>
    )
  }
}
