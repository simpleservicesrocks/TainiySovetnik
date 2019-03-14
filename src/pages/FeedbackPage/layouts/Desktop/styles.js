import { StyleSheet } from "aphrodite";
import { fadeIn } from "react-animations";
const styles = StyleSheet.create({
  page: {
    height: "100%"
  },
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "2s"
  },
  brandWrapp: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
  },
  brand: {
    height: '100%',
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
  },
  insideWrap:{
      width: '800px',
      display: 'flex',
      flexDirection: 'column',
  },
  header:{
      fontFamily: "SFUIDisplay-Bold",
      fontSize: '30px',
      fontWeight: 700,
      width: '700px',
      marginBottom: '20px'
  },
  text:{
      width: '500px',
      fontFamily: "SFUIDisplay-Light",
      lineHeight: "33px",
      fontSize: "15px",
      fontWeight: 300
  }
});
export default styles;
