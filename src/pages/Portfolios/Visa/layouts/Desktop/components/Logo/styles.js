import {StyleSheet} from 'aphrodite';
const styles = StyleSheet.create({
    wrap:{
        width: '767px',
        marginTop: "50px"
    },
    wrap1:{
        marginTop: "75px",
        display: 'flex',
        justifyContent: 'center',
    },
    wrap1_inside:{
        width: "600px",
        height: "100px",
        display: "flex",
        flexDirection: "row"
    },
    wrap1_block:{
        width: "50%",
        height:"100%",
        fontFamily: "SFUIDisplay-Light",
        fontWeight: 300,
        lineHeight: "30px",
        color: "#acacac",
        fontSize: "15px"
    }
});
export default styles;