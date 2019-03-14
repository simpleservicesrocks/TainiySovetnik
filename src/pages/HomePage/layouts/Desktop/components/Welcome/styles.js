import {StyleSheet} from 'aphrodite';
const styles = StyleSheet.create({
    welcome_wrapper:{
        backgroundColor: "transparent",
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome_inside:{
        width: '660px'
    },
    welcome_t1:{
        fontFamily: 'SFUIDisplay-Semibold',
        fontWeight: 600,
        fontSize: '26px',
        marginBottom: '10px'
    },
    welcome_t2:{
        fontFamily: 'SFUIDisplay-Light',
        fontWeight: 300,
        fontSize: "26px"
    }
});
export default styles;