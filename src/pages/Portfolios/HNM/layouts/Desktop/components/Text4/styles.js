import {StyleSheet} from 'aphrodite';
const styles = StyleSheet.create({
    wrapper:{
        width: "700px",
        marginTop: "235px"
    },
    h:{
        fontFamily: 'SFUIDisplay-Bold',
        fontWeight: 700,
        fontSize: "20px",
        paddingBottom: '30px'
    },
    tw:{
        height: "260px",
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        color:"#acacac",
        lineHeight: '40px',
        fontWeight: 300,
        fontFamily: "SFUIDisplay-Light",
        fontSize: '20px'
    },
    twp:{
        ":hover":{
            color: "#e73e2d",
            cursor: "pointer",
            transition: "0.5s"
        }
    }
});
export default styles;