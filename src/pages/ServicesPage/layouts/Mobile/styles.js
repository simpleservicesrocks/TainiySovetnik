import {StyleSheet} from 'aphrodite';
import {fadeIn} from 'react-animations'
const styles = StyleSheet.create({
    fadeIn:{
        animationName: fadeIn,
        animationDuration: "2s"
    },
    page:{
        width: '100%',
        height: "100%"
    },
    itemsWrap:{
        paddingLeft: '20px',
        paddingRight: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        marginTop: "30px"
    },
    item:{
        fontFamily: "SFUIDisplay-Medium",
        color: "#acacac",
        fontSize: "20px",
        lineHeight: "30px",
        fontWeight: 900,
        marginBottom: '20px',
    },
    card:{
      display: 'flex',
      flexDirection: "column",
    },
    hWrap:{
        width: "100%"
    },
    h:{
        margin: "0 20px",
        fontSize: "200%",
        fontFamily: "SFUIDisplay-Semibold",
    },
    t:{
        fontSize: "8px",
        fontFamily: 'SFUIDisplay-Light',
        fontWeight: 300,
        margin: "10px 20px 0",
        lineHeight: "14px"
        
    },
    back:{
        fontFamily: "SFUIDisplay-Bold",
        marginRight: '10px'
    },
    next:{
        fontFamily: "SFUIDisplay-Bold",
    },
    btnWrap:{
        position: 'absolute',
        bottom: "10px",
        marginLeft: "20px",
        zIndex: 10
    },
    swiper:{
        padding: '0 20px'
    },
    btnInside:{
        display: 'flex',
        flexDirection: 'row'
    }
});
export default styles;