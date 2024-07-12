import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, Animated } from 'react-native';


export default function Product({ navigation }){
  const pressHandler = () => {
    navigation.navigate('CustomerItems');
  }


  return(
    <SafeAreaView  style={styles.container}>
      <Button title='CustomerItems' onPress={pressHandler}/>
      {/* Third page view */}
      <View style={styles.headerview}>
          <View style={styles.headerItem}>
            <Image
              source={require('../assets1/Menu.png')}
              style={styles.headerimage}
            />
          </View>
          <View style={styles.headerItem1}>
            <Image
              source={require('../assets1/Logo.png')}
              style={styles.headerlogo}
            />
          </View>
          <View style={styles.headerItem2}>
            <Image
              source={require('../assets1/Search.png')}
              style={styles.headersearch}
            />
            <Image
              source={require('../assets1/shopping bag.png')}
              style={styles.headerbag}
            />
          </View>
        </View>

        <View style={styles.thirdpagemain}>
        <Image
              source={require('../assets1/dress4.png')}
              style={styles.thirdpagemainpic}
            />
        </View>

        <View style={styles.lamereipara}>
          <Text style={styles.lamerei}>L A M E R E I</Text>
          <Image
          source={require('../assets1/Export.png')}
          style={styles.exportimg}
          />
        </View>

        <Text style={styles.lamereitext}>Recycle Boucle Knit Cardigan Pink</Text>
        <Text style={styles.lamereimoney}>$120</Text>
        <Text style={styles.materialstext}>M AT E R I A L S</Text>
        <Text style={styles.materials}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>
        
        <View style={styles.mainprecaution}>
          <Image source={require('../assets1/Do Not Bleach.png')}
          style={styles.donotbleach}
          />
          <Text style={styles.donotbleachtext}>Do not use bleach</Text>
        </View>


        <View style={styles.mainprecaution}>
          <Image source={require('../assets1/Do Not Tumble Dry.png')}
          style={styles.donotbleach}
          />
          <Text style={styles.donotbleachtext}>Do not tumble dry</Text>
        </View>


        <View style={styles.mainprecaution}>
          <Image source={require('../assets1/Do Not Wash.png')}
          style={styles.donotbleach}
          />
          <Text style={styles.donotbleachtext}>Dry clean with tetrachloroethylene</Text>
        </View>


        <View style={styles.mainprecaution}>
          <Image source={require('../assets1/Iron Low Temperature.png')}
          style={styles.donotbleach}
          />
          <Text style={styles.donotbleachtext}>Iron at a maximum of 110ºC/230ºF</Text>
        </View>

        <Image source={require('../assets1/line.jpg')}
          style={styles.line}
          />

          <View style={styles.thirdpagelast}>
              <Image source={require('../assets1/Shipping.png')}
              style={styles.bus}
              />
            <View style={styles.thirdpagetext}>
              <Text style={styles.lamerei}>Free Flat Rate Shipping</Text>
              <Text style={styles.donotbleachtext}>Estimated to be delivered on </Text>
              <Text style={styles.donotbleachtext}>09/11/2021 - 12/11/2021.</Text>
            </View>
              <Image source={require('../assets1/Up.png')}
            style={styles.Up}
            />
          </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginLeft: 20,
  },
  Up:{
    height: 40,
    width: 40,
    marginLeft: 200,
    marginTop: -15,
  },
  thirdpagetext:{
    marginTop: -10,
  },
  bus:{
    height: 40,
    width:40,
    marginRight: 35,
  },
  thirdpagelast:{
    flexDirection: 'row',
  },
  line:{
    marginTop: 20,
    marginBottom: 50,
  },
  donotbleachtext:{
    fontSize: 35,
    color: '#696969',
  },
  mainprecaution:{
    flexDirection: 'row',
    marginTop: 30,
  },
  donotbleach:{
    height: 58,
    width: 50,
    marginRight: 40,
    marginBottom: 10,
  },
  materials:{
    fontSize: 35,
    color: '#696969',
    marginTop: 15,
    marginBottom: 20,
  },
  materialstext:{
    fontSize: 30,
  },
  lamereimoney:{
    fontSize: 35,
    color: '#FF82B2',
    marginTop: 10,
    marginBottom: 35,
  },
  lamereitext:{
    fontSize: 35,
    color: '#696969',
    marginTop: 15,
  },
  lamerei:{
    fontWeight: 'bold',
    fontSize: 35,
  },
  lamereipara:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  exportimg:{
    height: 25,
    marginTop: 10,
  },
  thirdpagemainpic:{
    width: 500,
    height: 600,
  },
  thirdpagemain:{
    alignItems: 'center',
    marginBottom: 40,
  },
   headerview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 100,
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -30,
  },
  headerItem1: {
    flexDirection: 'row',
    alignItems: 'center',
    //marginLeft: 30,
  },
  headerItem2: {
    flexDirection: 'row',
    //justifyContent: 'flex-end',
    //marginLeft: 30,
  },
  headerimage: {
    width: 30,
    height: 30,
    margin: 10,
  },
  headerlogo: {
    width: 150,
    height: 60,
    margin: 10,
  },
  headersearch: {
    width: 30,
    height: 30,
    margin: 10,
  },
  headerbag: {
    width: 30,
    height: 30,
    margin: 10,
  },
});