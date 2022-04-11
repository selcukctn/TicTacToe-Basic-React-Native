import React,{useState, useEffect} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Animated, Dimensions} from 'react-native';

import styles from './home_page_style';

const {width,height} = Dimensions.get('window');

const HomePage = ({navigation}) => {
    const [active,setActive] = useState('X');
    const [flag,setFlag] = useState(0);
    const valueX = useState(new Animated.ValueXY({x:-width/2,y:0}))[0];
    const valueY = useState(new Animated.ValueXY({x:width/2,y:0}))[0];
    function isActive(){
        if(flag==0){
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
                setActive('O');
                setFlag(1);
                navigation.navigate('Game',{active});
            }
            else if(active=='O'){
                setActive('X');
                setFlag(1);
                navigation.navigate('Game',{active});
            }
        }

    }

    function animationX(){
        Animated.timing(valueX,{
            toValue:{x:width/99,y:0},
            duration:1000,
            useNativeDriver:false,
        }).start();
    }
    function animationY(){
        Animated.timing(valueY,{
            toValue:{x:width/99,y:0},
            duration:1000,
            useNativeDriver:false,
        }).start();
    }
    useEffect(() => {
        animationX();
        animationY();
    },[]);
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Choose Your Side</Text>
            <View style={styles.choose_container}>
                <Animated.View style={valueX.getLayout()}>
                    <TouchableOpacity
                        onPress={isActive}
                    >
                        <Text style={styles.x}>X</Text>
                    </TouchableOpacity>
                </Animated.View>
                <View style={styles.line}>
                    {
                        //line
                    }
                </View>
                <Animated.View style={valueY.getLayout()}>
                    <TouchableOpacity
                        onPress={isActive}
                    >
                        <Text style={styles.o}>O</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </SafeAreaView>
    )
}





export default HomePage;