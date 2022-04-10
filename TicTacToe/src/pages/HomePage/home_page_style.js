import { StyleSheet, Dimensions } from "react-native";

const {width,height} = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F7F5F2'
    },
    choose_container:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center',
    },
    line:{
        borderLeftWidth:1,
        width:10,
        height:height/2,
        borderColor:'black',
    },
    title:{
        marginBottom:30,
        top:-50,
        fontSize:30,
    },
    x:{
        fontSize:width/2,
        marginRight:10,
        color:'#06113C'
    },
    o:{
        fontSize:width/2,
        color:'#F24A72'
    },
});