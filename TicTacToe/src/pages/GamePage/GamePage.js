import React,{useState} from 'react';
import { SafeAreaView, View, Text } from 'react-native';

//import styles
import styles from './game_page.style';

const GamePage = (props) => {
    //console.log("Active Player: "+props.route.params.active);
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={props.route.params.active ==='X' ? styles.header_title_x : styles.header_title_o}>Player {props.route.params.active}'s Turn</Text>
            </View>
        </SafeAreaView>
    )
}

export default GamePage;