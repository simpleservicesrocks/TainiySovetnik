import {StyleSheet} from 'aphrodite';
const styles = StyleSheet.create({
    wrap:{
        marginTop: "100px",
        width: "600px",
        fontFamily: "SFUIDisplay-Light",
        fontSize: "15px",
        fontWeight: 300,
        lineHeight: "27px"
    },
    more:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",
        marginTop: "20px"
    },
    rotateUp:{
        transform: 'rotate(180deg)',
        transition: "0.3s"
    },
    rotateDown:{
        transform: "rotate(0deg)",
        transition: "0.3s"
    },
    hwrap:{
        overflow: "hidden",
    },
    hwrapInside:{
        height: 'auto'
    },
    hide:{
        height: 0,
        transition: 'height 0.25s ease-in'
    },
    show:{
        height: "auto",
        transition: 'height 0.25s ease-in'
    }
});
export default styles;