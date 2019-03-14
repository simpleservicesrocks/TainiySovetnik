import { StyleSheet } from "aphrodite";
import { fadeIn } from 'react-animations'
const styles = StyleSheet.create({
  wrap: {
    height: "100%",
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inside: {
    height: "300px",
    width: "650px",
    display: 'flex',
    flexDirection: "column",
    flexWrap: 'wrap',
    fontFamily: "SFUIDisplay-Light",
    lineHeight: "20px",
    fontWeight: 300,
    fontSize: "14px"
  },
  btnWrap:{
      zIndex: 9999,
    position: "absolute",
    bottom: "90px",
    width: "100%",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center"
  },
  btnInside:{
    width: '600px',
    display: "flex",
    flexDirection: "row"
  },
  item:{
      ':hover':{
          cursor: "pointer",
          color: "#e73e2d",
          transition: "0.3s"
      },
      marginBottom: '20px',
      color: "#acacac",
  },
  fadeIn:{
      animationName: fadeIn,
      animationDuration: "2s"
  },
  h:{
      fontFamily: "SFUIDisplay-Semibold",
      fontSize: "26px",
      fontWeight: 600,
      width: '600px',
      marginBottom: '40px',
      letterSpacing: '2px'
  },
  t:{
    width: "600px",
    color: "#acacac",
    fontFamily: "SFUIDisplay-Light",
    fontSize: "95%",
    lineHeight: "28px",
    fontWeight: 300
  },
  card:{
      display: 'flex',
      flexDirection: "column"
  },
  back:{
      zIndex: 9999,
      ":hover":{
        cursor: "pointer"
      },
      fontFamily: "SFUIDisplay-Bold",
      fontSize: "14px",
      fontWeight: 700,
      letterSpacing: '2px'
  },
  next:{
    zIndex: 9999,
    ":hover":{
      cursor: "pointer"
    },
    fontFamily: "SFUIDisplay-Bold",
    fontSize: "14px",
    fontWeight: 700,
    marginLeft: "20px",
    letterSpacing: '2px'
  }
});
export default styles;
