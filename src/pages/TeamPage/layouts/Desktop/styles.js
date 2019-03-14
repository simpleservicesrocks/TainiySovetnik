import { StyleSheet } from 'aphrodite';
const oneForth = window.innerWidth/4;
const styles = StyleSheet.create({
    page: {
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    teamWrap: {
      height: '560px',
      width: window.innerWidth,
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'row',
      overflow: 'scroll',
      boxSizing: 'border-box',
      padding: `0 0  0 ${oneForth}px`
    },
    member: {
      height: '100%',
      width: '360px !important',
      flexShrink: 0
    },
    main: {
      width: '100%',
      height: 360,
      position: 'relative'
    },
    img: {
      position: 'absolute',
      height: 360,
      width: 360,
      zIndex: 10,
      ':hover':{
        opacity: 0
      },
      transition: '0.2s'
    },
    job: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      fontFamily: "SFUIDisplay-Regular",
      fontSize: 20
    },
    naming: {
      fontFamily: "SFUIDisplay-Bold",
      height: '100%',
      paddingTop: 30,
      textAlign: 'center'
    },
    m_name: {
      fontSize: 30
    },
    m_title: {
      fontSize: 20,
      color: "#FF0000"
    }
});
export default styles;