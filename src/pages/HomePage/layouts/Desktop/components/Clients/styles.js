import { StyleSheet } from "aphrodite";
const styles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrap:{
      width: "660px"
  },
  h:{
      fontFamily: 'SFUIDisplay-Semibold',
      fontSize: "26px",
      fontWeight: 600,
  },
  t:{
      marginTop: "30px",
      color: "#acacac",
      lineHeight: "33px",
      fontWeight: 300,
      fontFamily: "SFUIDisplay-Light",
      fontSize: "18px"
  }
});
export default styles;
