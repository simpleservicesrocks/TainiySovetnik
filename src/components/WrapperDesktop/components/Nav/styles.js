import {StyleSheet} from 'aphrodite';
const styles = StyleSheet.create({
    nav_wrapper:{
        width: '164px',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        padding: "90px 0 90px 86px",
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-between',
        zIndex: 100
    },
    nav_wrapper_sm:{
        '@media (max-width: 1400px)':{
            padding: "90px 0 90px 40px",
            width: '60px'
        }
    },
    nav_en:{
        marginLeft: '1px'
    },
    nav_t:{
        fontFamily: "SFUIDisplay-Medium",
        fontWeight: 500,
        fontSize: "13px",
    },
    nav_menu_wrapper:{
        cursor: 'pointer'
    },
    nav_menu:{
        fontFamily: 'SFUIDisplay-Medium',
        letterSpacing: "0.8px",
        fontSize: '8px'
    },
    nav_social:{
        display: 'flex',
        flexDirection: 'column'
    },
    nav_social_a:{
        color: "#acacac",
        fontWeight: 300,
        lineHeight: "20px",
        fontSize: "13px",
        letterSpacing: '1.3px',
        fontFamily: "SFUIDisplay-Light"
    },
    burger:{
        marginLeft: "3px"
    }
});
export default styles;