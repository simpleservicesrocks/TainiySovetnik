import {StyleSheet} from 'aphrodite';
const styles = StyleSheet.create({
    wrap:{
        width: '907px',
        marginBottom: "160px"
    },
    w1:{
        width: "100%",
        height: "145px",
    },
    w1inside:{
        width: "783px",
        margin: "0 auto",
        display: 'flex',
        flexDirection: "row"
    },
    w1left:{
        width: "520px",
        fontFamily: "SFUIDisplay-Bold",
        fontWeight: 700,
        lineHeight: "30px",
        fontSize: "20px"
    },
    w1right:{
        fontFamily: "SFUIDisplay-Light",
        lineHeight: "30px",
        fontWeight: 300,
        fontSize: "15px"
    },
    w2:{
        width: "100%",
        height: "348px",
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: '100px'
    },
    w3:{
        marginTop: "200px",
        width: "100%"
    },
    w3inside:{
        width: "660px",
        margin: '0 auto',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    w3_left:{
        fontFamily: "SFUIDisplay-Light",
        lineHeight: "25px",
        fontWeight: 300,
        fontSize: "15px",
        width: "156px"
    },
    w3_middle:{
        width: "221px"
    },
    w3_sm:{
        fontFamily:"SFUIDisplay-Light",
        fontWeight: 300,
        fontSize: "15px",
    },
    w3_lg:{
        fontFamily: "SFUIDisplay-Bold",
        fontSize: "40px",
        fontWeight: 700,
        lineHeight: "28px",
        margin: '20px 0'
    }
});
export default styles;