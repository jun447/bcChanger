// import {  } from 'expo-status-bar';
import {StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (

    <>
    <StatusBar backgroundColor={"#000000"} />
     <View style={[styles.container]}>
      <TouchableOpacity>
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
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase"
  }
});
