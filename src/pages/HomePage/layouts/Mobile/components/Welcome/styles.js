import { StyleSheet } from "aphrodite";
const styles = StyleSheet.create({
  welcome_mobile_wrapper: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: 'center',
      paddingLeft: "20px"
  },
  welcome_mobile_t1:{
      lineHeight: '25px',
      fontWeight: 600,
      fontFamily: "SFUIDisplay-Semibold",
      fontSize: '19px',
      marginBottom: 30
  },
  welcome_mobile_t2:{
      lineHeight: '26px',
      fontWeight:300,
      fontFamily: "SFUIDisplay-Light",
      fontSize: '19px',
  }
});
export default styles;
