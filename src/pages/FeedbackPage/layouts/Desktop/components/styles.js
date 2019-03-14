import { StyleSheet } from "aphrodite";
const styles = StyleSheet.create({
  options: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    right: 60,
    top: "calc(50% - 104px)",
    zIndex: 999
  },
  icon: {
    cursor: "pointer"
  }
});
export default styles;
