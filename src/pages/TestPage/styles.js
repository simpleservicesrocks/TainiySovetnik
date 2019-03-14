import { StyleSheet } from "aphrodite";
import { fadeIn } from "react-animations";
const styles = StyleSheet.create({
  page: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative", 
  },
  img:{
    height: "100px",
    width: "320px",
    transition: "1.5s ease-in-out"
  },
  img_anim:{
    height: "50px",
    width: "150px"
  },
  logo: {
    position: "absolute",
    transition: "1.5s ease-in-out",
    top:  window.innerHeight/2,
    left: window.innerWidth/2-90,
    
  },
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "2s"
  },
  animation: {
    top: '60px',
    left: "calc( 100% - 300px)",
  }
});
export default styles;
