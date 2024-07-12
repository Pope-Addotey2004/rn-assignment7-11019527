import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, Animated } from 'react-native';


export default function Store({ navigation }){
  const pressHandler = () => {
    navigation.navigate('Product');
  }


  return(
    <SafeAreaView  style={styles.container}>
      <Button title='Product' onPress={pressHandler}/>
              {/* Second page in the app */}
              <View style={styles.secondpage}>
          <View style={styles.secondpagefirsthalf}>
            <Image
              source={require('../assets1/Close.png')}
              style={styles.closepic}
            />
          </View>
          <View style={styles.secondpagesecondhalf}>
            <Image
              source={require('../assets1/Search.png')}
              style={styles.searchpic}
            />
            <Image
              source={require('../assets1/shopping bag.png')}
              style={styles.shoppingbagpic}
            />
          </View>
        </View>

        <View>
        <Image
              source={require('../assets1/ericatsu.jpg')}
              style={styles.ericatsu}
            />
        </View>

        <View style={styles.ueric}>
            <Image
              source={require('../assets1/applogo.jpg')}
              style={styles.applogo}
            />
            <Image
              source={require('../assets1/logoapp.jpg')}
              style={styles.logoapp}
            />
        </View>


        {/* Second page view */}

        <View style={styles.secondpagemainview}>
          <View style={styles.secondpage1}>
            <Text style={styles.secondpagetext}>Store</Text>
            <Text style={styles.secondpagetext}>Locations</Text>
            <Text style={styles.secondpagetext}>Blog</Text>
            <Text style={styles.secondpagetext}>Jewelery</Text>
            <Text style={styles.secondpagetext}>Electronic</Text>
            <Text style={styles.secondpagetext}>Clothing</Text>
          </View>
          <View style={styles.secondpage2}>
          <View style={styles.thirdparagraph1}>
          
          <View style={styles.firstsec}>
            <View style={styles.firstpart}>
              <View style={styles.picview}>
                <Image
                  source={require('../assets1/dress2.png')}
                  style={styles.dress1}
                />
                <Image
                  source={require('../assets1/add_circle.png')}
                  style={styles.addcircle}
                />
              </View>
              <Text style={styles.part2}>k</Text>
              <Text style={styles.part3}>rsible angora cardigan</Text>
              <Text style={styles.part4}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.thirdparagraph1}>
          <View style={styles.firstsec}>
            <View style={styles.firstpart}>
              <View style={styles.picview}>
                <Image
                  source={require('../assets1/dress4.png')}
                  style={styles.dress1}
                />
                <Image
                  source={require('../assets1/add_circle.png')}
                  style={styles.addcircle}
                />
              </View>
              <Text style={styles.part2}>erei</Text>
              <Text style={styles.part3}>rsible angora cardigan</Text>
              <Text style={styles.part4}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.thirdparagraph1}>
          <View style={styles.firstsec}>
            <View style={styles.firstpart}>
              <View style={styles.picview}>
                <Image
                  source={require('../assets1/dress6.png')}
                  style={styles.dress1}
                />
                <Image
                  source={require('../assets1/add_circle.png')}
                  style={styles.addcircle}
                />
              </View>
              <Text style={styles.part2}>o</Text>
              <Text style={styles.part3}>rsible angora cardigan</Text>
              <Text style={styles.part4}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.thirdparagraph1}>
          <View style={styles.firstsec}>
            <View style={styles.firstpart}>
              <View style={styles.picview}>
                <Image
                  source={require('../assets1/dress3.png')}
                  style={styles.dress1}
                />
                <Image
                  source={require('../assets1/add_circle.png')}
                  style={styles.addcircle}
                />
              </View>
              <Text style={styles.part2}>e</Text>
              <Text style={styles.part3}>rsible angora cardigan</Text>
              <Text style={styles.part4}>0</Text>
            </View>
          </View>
        </View>
          </View>
        </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginLeft: 20,
  },
  secondpagetext:{
    fontSize: 40,
    marginBottom: 40,
  },
  secondpagemainview:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1000,
  },
  secondpage1:{
    flexDirection: 'column',
    marginRight: 150,
  },
  secondpage2:{
    flexDirection: 'column',
    marginTop: -30,
    justifyContent: 'space-between',
  },
  logoapp:{
    marginLeft: 20,
    height: 40,
    width: 40,
  },
  applogo:{
    height: 40,
    width: 40,
  },
  ericatsu:{
    marginLeft: -5,
  },
  ueric:{
    flexDirection: 'row',
    height: 50,
    width: 100,
    marginBottom: 100,
    marginLeft: 450,
  },
  closepic:{
    height: 45,
    width: 50, 
  },
  shoppingbagpic:{
    marginLeft: 20,
    height: 50,
    width: 50, 
  },
  searchpic:{
   height: 45,
   width: 50, 
  },
  secondpage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  secondpagefirsthalf: {},
  secondpagesecondhalf: {
    flexDirection: 'row',
  },
  part2: {
    fontSize: 30,
  },
  part3: {
    fontSize: 30,
    color: '#696969',
  },
  part4: {
    fontSize: 30,
    color: '#FF82B2',
  },
  thirdparagraph1:{
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 150,
  },
  firstpart: {
    height: 700,
    width: 400,
    //backgroundColor:'red',
  },
  picview: {
    flexDirection: 'row',
  },
  dress1: {
    height: 500,
    width: 350,
    marginBottom: 20,
  },
  addcircle: {
    backgroundColor: 'transparent',
    marginTop: 460,
    marginLeft: -36,
  },
  firstsec: {
    height: 500,
    width: 300,
    //backgroundColor:'yellow',
    marginLeft: 30,
  },
});