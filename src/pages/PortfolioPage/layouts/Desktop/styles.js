import { StyleSheet } from "aphrodite";
import { fadeIn } from "react-animations";
const styles = StyleSheet.create({
  portfolios_wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  portfolios_inside: {
    marginTop: "180px",
    width: "767px",
    minHeight: "300px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: "100px"
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
    paddingRight: "50px",
  },
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "2s"
  }
});
export default styles;
