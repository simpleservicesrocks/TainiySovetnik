import {StyleSheet} from 'aphrodite';
const styles = StyleSheet.create({
    page:{
        height: "100%",
        width: '100%',
        position: "relative",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black"
    },
    more:{
        position: "absolute",
        bottom: '90px',
        width: '660px',
        height: "30px",
        color: "#acacac",
        fontFamily: "SFUIDisplay-Light",
        fontSize: "14px",
        fontWeight: 300
    },
    inside:{
        width: "660px",
        height: '300px',
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    logoBox:{
        width: "220px",
        height: "100px",
        display: 'flex',
        alignItems: 'center'
    }
});
export default styles;