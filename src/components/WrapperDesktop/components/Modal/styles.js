import { StyleSheet } from "aphrodite";
const styles = StyleSheet.create({
  modal_wrapper: {
    position: "fixed",
    top: 0,
    bottom: 0,
    width: "calc(100% - 250px)",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99
  },
  hidden: {
    transform: "translate(-100%)",
    transition: "1s"
  },
  shown: {
    transform: "translate(0)",
    transition: "1s"
  },
  modal_inside: {
    width: "660px",
    height: "270px",
    display: "flex",
    flexDirection: "row"
  },
  modal_inside_block: {
    height: "100%",
    width: "50%"
  },
  mib_left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  mib_a: {
    fontFamily: "SFUIDisplay-Bold",
    fontSize: "14px",
    fontWeight: 700
  },
  mib_t: {
    fontFamily: "SFUIDisplay-Light",
    fontWeight: 300,
    lineHeight: "27px",
    fontSize: "12px",
    color: "#a2a2a2"
  },
  language: {
    position: "absolute",
    color: "white",
    bottom: "100px",
    fontFamily: "SFUIDisplay-Regular",
    cursor: "pointer"
  },
  lang_selected:{
      fontFamily: "SFUIDisplay-Bold"
  }
});
export default styles;
