import {StyleSheet} from 'aphrodite';
const styles = StyleSheet.create({
    dates_wrapper:{
        height: '100%',
        width: '100%',
        backgroundColor: "black",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    inside:{
        width: "660px",
        height: "70px",
        display:'flex',
        flexDirection: "row"
    },
    insideBox:{
        height: "100%",
        width: "33.33%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
    },
    t1:{
        fontFamily: "SFUIDisplay-Bold",
        color: "white",
        fontWeight: 700,
        fontSize: "30px"
    },
    t2:{
        color: "white",
        fontFamily: "SFUIDisplay-Light",
        fontSize: "14px",
        fontWeight: 300
    },
    abso:{
        width: "660px",
        height: "50px",
        position: 'absolute',
        bottom: '90px',
        display:'flex',
        flexDirection: "column",
        justifyContent: 'space-between',
        color: 'white'
    },
    tt1:{
        fontFamily: "SFUIDisplay-Bold",
        fontWeight: 700,
        fontSize: "14px"
    },
    tt2:{
        fontFamily: "SFUIDisplay-Light",
        fontWeight: 300,
        fontSize: '14px'
    }
});
export default styles;