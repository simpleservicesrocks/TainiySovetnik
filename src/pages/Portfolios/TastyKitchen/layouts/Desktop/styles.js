import {StyleSheet} from 'aphrodite';
import { fadeIn } from 'react-animations'
const styles = StyleSheet.create({
    fadeIn:{
        animationName: fadeIn,
        animationDuration: '2s'
    },
    fullpage:{
        height: "100%"
    },
    fpInside:{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
    },
    t1:{
        fontFamily: "SFUIDisplay-Light",
        fontWeight: 300,
        fontSize: "15px",
        lineHeight: "27px",
        width: "600px",
        marginTop: "100px"
    },
    wrap:{
        marginTop: "60px",
        width: "768px",
        display: "flex",
        flexDirection: "row",
        marginBottom: "80px"
    },
    w1:{
        width: "286px",
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100px",
    },
    w2:{
        width: "212px",
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
        height: "120px",
    },
    w3:{
        width: "212px",
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
        height: "70px",
    },
    wsm:{
        fontFamily: "SFUIDisplay-Light",
        fontWeight: 300,
        fontSize: "15px"
    },
    wlg:{
        fontFamily: "SFUIDisplay-Bold",
        fontSize: "40px",
        lineHeight: "25px"
    },
    wm:{
        fontFamily: "SFUIDisplay-Bold",
        fontSize: "20px"
    }
});
export default styles;