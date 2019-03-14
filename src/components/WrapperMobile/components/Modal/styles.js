import { StyleSheet } from "aphrodite";
const styles = StyleSheet.create({
  modal_wrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "black",
    paddingLeft: "20px",
    zIndex:10
  },
  modal_inside_wrapper: {
    height: "100%",
    overflowY: "scroll"
  },
  modal_links_wrapper: {
    marginTop: "100px",
    fontSize: "20px",
    fontFamily: "SFUIDisplay-Bold",
    fontWeight: 700,
    lineHeight: "27px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "270px"
  },
  modal_language: {
    marginTop: "100px",
    marginBottom: "20px"
  },
  modal_language_text: {
    color: "white",
    fontFamily: "SFUIDisplay-Medium",
    fontWeight: 500,
    fontSize: "16px"
  },
  modal_address: {
    marginTop: "100px"
  },
  modal_address_text: {
    fontFamily: "SFUIDisplay-Light",
    fontSize: "12px",
    lineHeight: "27px",
    fontWeight: 300,
    color: "#a2a2a2"
  },
  modal_social: {
    marginTop: "100px",
    marginBottom: "35px",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  modal_social_text: {
    color: "white",
    letterSpacing: "1.5px",
    lineHeight: "20px",
    fontWeight: 300,
    fontFamily: "SFUIDisplay-Light",
    fontsi: "15px"
  },
  showModal: {
    bottom: '100%',
    // transform: 'translate(0, -100%)',
    transition: "1s"
  },
  hideModal: {
    bottom: 0,
    transition: "1s"
  }
});
export default styles;
