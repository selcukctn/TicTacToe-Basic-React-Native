import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F7F5F2'
    },
    header:{
        width:width,
        justifyContent:'center',
        alignItems:'center',
    },
    header_title_x:{
        fontSize:30,
        color:'#143F6B',
    },
    header_title_o:{
        fontSize:30,
        color:'#F55353',
    },
});