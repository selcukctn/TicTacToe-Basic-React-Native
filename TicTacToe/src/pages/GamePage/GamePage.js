import React,{useState,useEffect} from 'react';
import { SafeAreaView, View, Text, Pressable, Image, } from 'react-native';

//import styles
import styles from './game_page.style';
//import img
import x from '../../img/x.png'
import o from '../../img/o.png'
import replay from '../../img/replay.png'
import left from '../../img/left.png'
const GamePage = (props) => {
    //console.log("Active Player: "+props.route.params.active);
    const [player,setPlayer] = useState(props.route.params.active);
    const [marker,setMarker] = useState([
        null,null,null,
        null,null,null,
        null,null,null,
    ])
    const resetMarker = () => {
        setMarker([
          null, null, null,
          null, null, null,
          null, null, null
        ])
      }
    const markPosition =(position)=>{
        
            let temp = [...marker];
            temp[position]=player;
            setMarker(temp);
            if(player=='X'){
                setPlayer('O');
            }else{
                setPlayer('X');
            }
       
    }
    const calculateWinner = (squares) => {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];
      for(let i = 0; i < lines.length; i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
          return squares[a];
        }
      }
      return null;
    }
  
    useEffect(() => {
      const winner = calculateWinner(marker);
      if(winner === 'X'){
        alert("Player X Won!")
        resetMarker()
      }else if(winner === 'O'){
        alert("Player O Won!")
        resetMarker()
      }
    }, [marker])
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={props.route.params.active ==='X' ? styles.header_title_x : styles.header_title_o}>Player {player}'s Turn</Text>
            </View>
            <View style={styles.main_container}>
                
                <Pressable style={styles.top_left_cell} onPress={()=>markPosition(0)}> 
                   {marker[0]==='X' && <Image style={styles.img_x} source={x}/>}
                   {marker[0]==='O' && <Image style={styles.img_o} source={o}/>}
                </Pressable>
                <Pressable style={styles.top_mid_cell} onPress={()=>markPosition(1)}> 
                    {marker[1]==='X' && <Image style={styles.img_x} source={x}/>}
                    {marker[1]==='O' && <Image style={styles.img_o} source={o}/>}
                </Pressable>
                <Pressable style={styles.top_right_cell} onPress={()=>markPosition(2)}> 
                    {marker[2]==='X' && <Image style={styles.img_x} source={x}/>}
                    {marker[2]==='O' && <Image style={styles.img_o} source={o}/>}
                </Pressable>
                <Pressable style={styles.mid_left_cell} onPress={()=>markPosition(3)}> 
                    {marker[3]==='X' && <Image style={styles.img_x} source={x}/>}
                    {marker[3]==='O' && <Image style={styles.img_o} source={o}/>}
                </Pressable>
                <Pressable style={styles.cell} onPress={()=>markPosition(4)}> 
                    {marker[4]==='X' && <Image style={styles.img_x} source={x}/>}
                    {marker[4]==='O' && <Image style={styles.img_o} source={o}/>}
                </Pressable>
                <Pressable style={styles.mid_right_cell} onPress={()=>markPosition(5)}> 
                    {marker[5]==='X' && <Image style={styles.img_x} source={x}/>}
                    {marker[5]==='O' && <Image style={styles.img_o} source={o}/>}
                </Pressable>
                <Pressable style={styles.bot_left_cell} onPress={()=>markPosition(6)}> 
                    {marker[6]==='X' && <Image style={styles.img_x} source={x}/>}
                    {marker[6]==='O' && <Image style={styles.img_o} source={o}/>}
                </Pressable>
                <Pressable style={styles.bot_mid_cell} onPress={()=>markPosition(7)}> 
                    {marker[7]==='X' && <Image style={styles.img_x} source={x}/>}
                    {marker[7]==='O' && <Image style={styles.img_o} source={o}/>}
                </Pressable>
                <Pressable style={styles.bot_right_cell} onPress={()=>markPosition(8)}> 
                    {marker[8]==='X' && <Image style={styles.img_x} source={x}/>}
                    {marker[8]==='O' && <Image style={styles.img_o} source={o}/>}
                </Pressable>
            </View>
            <Pressable style={styles.replay} onPress={()=>resetMarker()}> 
                    <Image style={styles.replay_icon} source={replay}/>
            </Pressable>
            <Pressable style={styles.goback} onPress={()=>props.navigation.goBack()}> 
                    <Image style={styles.replay_icon} source={left}/>
            </Pressable>
        </SafeAreaView>
    )
}

export default GamePage;