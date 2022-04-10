import React,{useState,useEffect} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';

import styles from './home_page_style';


const HomePage = ({navigation}) => {
    const [active,setActive] = useState('X');
    const [flag,setFlag] = useState(0);
    function isActive(){
        if(flag!=1){
            if(active=='X'){
                setActive('X');
                setFlag(1);
                navigation.navigate('Game',{active});
            }
            else if(active=='O'){
                setActive('O');
                setFlag(1);
                navigation.navigate('Game',{active});
            }
        }
        else{
            if(active=='X'){
                setActive('X');
                setFlag(1);
                navigation.navigate('Game',{active});
            }
            else if(active=='O'){
                setActive('O');
                setFlag(1);
                navigation.navigate('Game',{active});
            }
        }

    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Choose Your Side</Text>
            <View style={styles.choose_container}>
                <TouchableOpacity
                    onPress={isActive}
                >
                    <Text style={styles.x}>X</Text>
                </TouchableOpacity>
                <View style={styles.line}>
                    {
                        //line
                    }
                </View>
                <TouchableOpacity
                    onPress={isActive}
                >
                    <Text style={styles.o}>O</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}





export default HomePage;