import { StyleSheet } from 'aphrodite';
const imgWidth = window.innerWidth*75/100;
const imgHeight = imgWidth;
const styles = StyleSheet.create({
    page: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      overflowX: 'scroll',
      boxSizing: 'border-box',
      padding: '0 50px',
    },
    member: {
      height: '100%',
      width: window.innerWidth*80/100,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    memberPic: {
      height: imgHeight,
      width: imgWidth
    },
    aye: {
      paddingTop: window.innerHeight*10/100,
      boxSizing: 'border-box'
    },
    t1: {
      fontFamily: "SFUIDisplay-Bold",
      fontSize: 26,
      padding: '0 10px',
      color: "#FF0000"
    },
    t2: {
      fontFamily: "SFUIDisplay-Regular",
      fontSize: 14,
      marginBottom: 10,
      padding: '0 10px'
    },
    t3: {
      fontFamily: "SFUIDisplay-Regular",
      fontSize: 14,
      padding: '0 10px'
    }
});
export default styles;