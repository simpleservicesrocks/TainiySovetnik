import { StyleSheet } from "aphrodite";
const styles = StyleSheet.create({
  clients_mobile_wrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    paddingLeft: "20px",
    paddingRight: "20px"
  },
  clients_mobile_h: {
    fontFamily: "SFUIDisplay-Semibold",
    fontWeight: 600,
    lineHeight: "53px",
    fontSize: "26px",
    marginBottom: '20px'
  },
  clients_mobile_t:{
      fontSize: "14px",
      fontFamily: 'SFUIDisplay-Light',
      fontWeight: 300,
      lineHeight: '33px',
      color: "#acacac"
  }
});
export default styles;
