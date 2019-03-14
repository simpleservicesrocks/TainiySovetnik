import { StyleSheet } from "aphrodite";
const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#f5f5f5",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "100px",
    paddingBottom: "75px"
  },
  wrap: {
    width: "767px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  portfolio_item: {
    width: "344px",
    height: "300px"
  },
  portfolio_brand: {
    height: "45px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "50px",
    fontFamily: "SFUIDisplay-Bold",
    fontWeight: 700,
    fontSize: "17px",
    color: "black"
  },
  portfolio_desc: {
    color: "#acacac",
    fontFamily: "SFUIDisplay-Regular",
    fontWeight: 400,
    fontSize: "11px",
    lineHeight: "19px",
    paddingLeft: "50px",
    paddingRight: "50px"
  }
});
export default styles;
