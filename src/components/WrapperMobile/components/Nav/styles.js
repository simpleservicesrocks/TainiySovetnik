import {StyleSheet} from 'aphrodite'
const styles = StyleSheet.create({
 nav_mobile_wrapper:{
     position: 'fixed',
     zIndex: "999",
     top: 0,
     width: 'calc(50% - 20px)',
     height: '40px',
     paddingLeft: '20px',
     display: 'flex',
     alignItems: 'center'
 },
 nav_mobile_p:{
     fontFamily: "SFUIDisplay-Medium",
     fontSize: '8px',
     fontWeight: 500,
     letterSpacing: "0.8px",
     marginLeft:'10px',
 },
 nav_mobile_span:{
     display:"flex",
     flexDirection: "row",
     alignItems: 'center',
 }
})
export default styles