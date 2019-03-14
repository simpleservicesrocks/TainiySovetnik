import {StyleSheet} from 'aphrodite';
const styles = StyleSheet.create({
    footer:{
        backgroundColor: "#f5f5f5",
        padding: "32px 16px"
    },
    portfolio_brand:{
        paddingLeft: "20px",
        fontFamily: "SFUIDisplay-Bold",
        fontSize: "17px",
        fontWeight: 700,
        lineHeight: "23px",
        color: 'black'
    },
    portfolio_item:{
        width: '100%',
        marginBottom: '20px',
    },
    portfolio_image:{
        width: '100%',
        height: 'auto'
    },
    portfolio_desc:{
        paddingLeft: "20px",
        color: "#acacac",
        fontFamily:"SFUIDisplay-Regular",
        fontWeight: 400,
        fontSize: '11px',
        width: "160px"      
    }
});
export default styles;