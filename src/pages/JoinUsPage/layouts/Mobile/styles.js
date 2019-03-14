import {StyleSheet} from 'aphrodite';
import {fadeIn} from 'react-animations'
const styles = StyleSheet.create({
    fadeIn:{
        animationName: fadeIn,
        animationDuration: '2s'
    },
    page:{
        height: "100%",
        position: "relative"
    },
    big_wrap:{
        height: "100%"
    },
    big_inside:{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '0 20px'
    },
    big_text:{
        marginTop: '200px',
        fontSize: '20px'
    },
    absolute:{
        position: 'absolute',
        top: 80,
        left: 20,
        fontSize: 30,
        right: 10
    },
    abs_full:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '10px',
        fontSize: '15px'
    },
    abs_text:{
        marginRight: '8px',
        marginBottom: '10px'
    },
    abs_text_selected: {
        color: 'black'
    },
    abs_text_not_selected:{
        color: "#acacac"
    }
});
export default styles;