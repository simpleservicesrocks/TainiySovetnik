import {StyleSheet} from 'aphrodite';
import {fadeIn} from 'react-animations'
const styles = StyleSheet.create({
    fadeIn:{
        animationName: fadeIn,
        animationDuration: '2s'
    },
    page:{
        height: "100%",
        width: "100%",
    },
    twrap:{
        minHeight: '100%',
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "center"
    },
    pageInside:{
        width: "600px",
        fontFamily: "SFUIDisplay-Light",
        fontSize: "15px",
        lineHeight: "27px",
        fontWeight: 300,
        margin: "80px 0"
    }
});
export default styles;