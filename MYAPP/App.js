import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, Animated } from 'react-native';
import Navigator from '.routes/HomeStack';

export default function App() {
  return (
    
    <Navigator/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginLeft: 20,
    justifyContent: 'center',
    alignContent:'center',
  },
  
});
