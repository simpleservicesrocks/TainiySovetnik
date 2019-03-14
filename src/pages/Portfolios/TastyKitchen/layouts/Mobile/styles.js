import {StyleSheet} from 'aphrodite';
import {fadeIn} from 'react-animations'
const styles = StyleSheet.create({
    fadeIn:{
        animationName: fadeIn,
        animationDuration: "2s"
    },
    wrap:{
        padding: "0 20px"
    },
    t:{
        marginTop: "100px",
        fontFamily:"SFUIDisplay-Light",
        lineHeight: "27px",
        fontSize: "15px",
        fontWeight: 300,
    },
    t1:{
        fontFamily: "SFUIDisplay-Light",
        fontSize: "15px",
        fontWeight: 300,
        marginBottom: '5px'
    },
    t2:{
        fontFamily: "SFUIDisplay-Bold",
        fontSize: "30px",
        marginBottom: "40px"
    }
});
export default styles;