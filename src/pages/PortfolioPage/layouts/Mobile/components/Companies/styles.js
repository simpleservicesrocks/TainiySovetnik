import { StyleSheet } from "aphrodite";
const styles = StyleSheet.create({
    companies_mobile_wrapper:{
        paddingLeft: "20px",
        paddingRight: "20px",
        marginTop: "150px",
        paddingBottom: "30px",
    },
    companies_mobile_card:{
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        marginBottom: '50px'
    },
    company_brand:{
        width: '100%',
        height: '40px',
    },
    company_brand_t:{
        color: "black",
        fontFamily: "SFUIDisplay-Bold",
        marginLeft: '20px',
    },
    company_logo:{
        width: '100%',
        height: '200px',
        objectFit: 'cover'
    },
    company_desc:{
        minHeight: '56px',
        width: "100%",
        display: 'flex',
        alignItems: "center"
    },
    company_text:{
        marginLeft: '20px',
        color: "#acacac",
        fontFamily:"SFUIDisplay-Regular",
        fontWeight: 400,
        fontSize: '11px',
        width: "150px"
    }
});
export default styles;
