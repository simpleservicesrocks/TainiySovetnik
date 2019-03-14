import { StyleSheet } from "aphrodite";
const styles = StyleSheet.create({
  wrap: {
    width: "600px",
    marginTop: "65px"
  },
  h: {
    fontFamily: "SFUIDisplay-Light",
    fontSize: "30px",
    fontWeight: 300,
    lineHeight: "27px",
    marginBottom: "20px"
  },
  t1: {
    color: "#acacac",
    lineHeight: "33px",
    fontWeight: 300,
    fontFamily: "SFUIDisplay-Light",
    fontSize: "15px",
    marginBottom: "20px"
  },
  container: {
    height: "217px",
    display: "flex",
    flexDirection: "row"
  },
  blockcont: {
    width: "215px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  halfcont: {
    height: "40%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontFamily: "SFUIDisplay-Light",
    fontWeight: 300,
    fontSize: "15px",
    paddingLeft: "10px"
  }
});
export default styles;
