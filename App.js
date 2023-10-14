// import {  } from 'expo-status-bar';
import { useState } from 'react';
import {StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [color,setColor] = useState("#000000");
  
  const generateRandomColor = () => {
    console.log("clicked");
    let randomColor = "#000000".replace(/0/g,function(){
      return (~~(Math.random()*16)).toString(16);
    });
    setColor(randomColor);
  }
 

  return (

    <>
    <StatusBar backgroundColor={color} />
     <View style={[styles.container,{backgroundColor:color}]}>
      <TouchableOpacity onPress={generateRandomColor}>
         <View style={styles.actionBtn}  >
            <Text>Click Me</Text>
         </View>
      </TouchableOpacity>
       <Text>Open up App.js to start working on your app!</Text>
     </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 40,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#8B5F9E",
      transform: "scale(1.1)"
    }
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase"
  }
});
