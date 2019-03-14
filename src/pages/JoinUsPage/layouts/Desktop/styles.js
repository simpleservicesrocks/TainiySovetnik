import {StyleSheet} from 'aphrodite';
import {fadeIn} from 'react-animations'
const styles = StyleSheet.create({
    page:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    fadeIn:{
        animationName: fadeIn,
        animationDuration: '2s'
    },
    wrap:{
        height: '340px',
        width: "900px",
        display: 'flex',
        flexDirection: 'row'
    },
    block:{
        height: '100%',
        width: '40%',
        fontFamily: "SFUIDisplay-Regular",
    },
    left_block:{
        height: '100%',
        display: "flex",
        flexDirection: "column"
    },
    title:{
        fontSize: '40px',
        letterSpacing: '2px',
        marginBottom: "15px",
    },
    items:{
        fontSize: '24px',
        cursor: 'pointer',
        transition: '0.5s'
    },
    items_wrap:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '240px'
    },
    item_picked:{
        color: 'black'
    },
    item_not_picked:{
        color: "#acacac"
    },
    desc:{
        width: '60%'
    },
    desc_text:{
        marginTop: '111px',
        fontSize: '20px'
    }
});
export default styles;