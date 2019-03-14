import {StyleSheet} from 'aphrodite';
const styles = StyleSheet.create({
    wrap:{
        width: "1050px",
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        marginTop: "150px",
        marginBottom: "200px"
    },
    mini:{
        width: "600px"
    },
    h:{
        fontFamily: "SFUIDisplay-Light",
        fontWeight: 300,
        fontSize: "30px",
        marginBottom: "20px"
    },
    insta:{
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    info:{
        width: '600px',
        display: "flex",
        flexDirection: "row",
        marginTop: "185px"
    },
    infoblock:{
        height: "100%",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "SFUIDisplay-Light",
        fontSize: "15px",
        fontWeight: 300,
        lineHeight: "30px"
    },
    hsub:{
        fontFamily: "SFUIDisplay-Light",
        fontSize: "15px",
        color: "#acacac",
        lineHeight: "33px",
        fontWeight: 300
    }
});
export default styles;