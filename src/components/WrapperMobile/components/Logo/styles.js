import {StyleSheet} from 'aphrodite'
const styles = StyleSheet.create({
    logo_mobile_wrapper:{
        height: '40px',
        position: 'fixed',
        top: 0,
        right: 0,
        width: "calc(50% - 20px)",
        paddingRight: '20px',
        display: "flex",
        justifyContent: "flex-end",
        alignItems: 'center',
        zIndex: 20
    },
    logo_mobile_img:{
        height:"50px",
        marginTop: '20px'
    }
})
export default styles