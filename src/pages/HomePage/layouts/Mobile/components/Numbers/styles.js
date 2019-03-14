import {StyleSheet} from 'aphrodite'
const styles = StyleSheet.create({
 number_mobile_wrapper:{
     backgroundColor: "black",
     paddingLeft: "20px",
     paddingRight: '20px',
     display: "flex",
     flexDirection: "column",
     justifyContent: 'center',
     height: "100%"
 },
 numbers_wrapper_outer:{
     marginBottom: '80px',
 },
 numbers_wrapper:{
    height: '60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
 },
 numbers_year:{
     fontFamily: "SFUIDisplay-Bold",
     fontWeight: 700,
     fontSize: '24px',
     color: 'white'
 },
 number_desc:{
     fontFamily: 'SFUIDisplay-Light',
     fontWeight: 300,
     fontSize: '11px',
     color: "white"
 },
 extra_margarine:{
     marginTop: '50px',
     marginBottom: '31px'
 },
 numbers_workplaces:{

 },
 numbers_wp_t1:{
     color: 'white',
     fontFamily: 'SFUIDisplay-Bold',
     fontWeight: 700,
     lineHeight: '30px',
     fontSize: '14px'
 },
 numbers_wp_t2:{
    color: 'white',
    fontFamily: 'SFUIDisplay-Light',
    fontWeight: 700,
    lineHeight: '30px',
    fontSize: '14px'
}
})
export default styles