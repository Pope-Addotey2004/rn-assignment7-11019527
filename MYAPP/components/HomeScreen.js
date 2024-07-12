import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, Animated } from 'react-native';

export default function HomeScreen({ navigation }){
const pressHandler = () => {
  navigation.navigate('Store');
}

return(
  <SafeAreaView style={styles.container}>
    <Button title='Store' onPress={pressHandler}/>
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
        <View style={styles.secondrow}>
          <Text style={styles.secondone}>O U R   S T O R Y</Text>
          <View style={styles.secondtwo}>
            <Image
              source={require('../assets1/applogo.jpg')}
              style={styles.headerbag}
            />
            <Image
              source={require('../assets1/logoapp.jpg')}
              style={styles.headerbag}
            />
          </View>
        </View>
        <View style={styles.firstparagraph}>
          <View style={styles.firstpart}>
            <View style={styles.picview}>
              <Image
                source={require('../assets1/dress1.png')}
                style={styles.dress1}
              />
              <Image
                source={require('../assets1/add_circle.png')}
                style={styles.addcircle}
              />
            </View>
            <Text style={styles.part2}>Office Wear</Text>
            <Text style={styles.part3}>reversible angora cardigan</Text>
            <Text style={styles.part4}>$120</Text>
          </View>
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
              <Text style={styles.part2}>Black</Text>
              <Text style={styles.part3}>reversible angora cardigan</Text>
              <Text style={styles.part4}>$120</Text>
            </View>
          </View>
        </View>
        <View style={styles.secondparagraph}>
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
            <Text style={styles.part2}>Church Wear</Text>
            <Text style={styles.part3}>reversible angora cardigan</Text>
            <Text style={styles.part4}>$120</Text>
          </View>
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
              <Text style={styles.part2}>Lamerei</Text>
              <Text style={styles.part3}>reversible angora cardigan</Text>
              <Text style={styles.part4}>$120</Text>
            </View>
          </View>
        </View>
        <View style={styles.thirdparagraph}>
          <View style={styles.firstpart}>
            <View style={styles.picview}>
              <Image
                source={require('../assets1/dress5.png')}
                style={styles.dress1}
              />
              <Image
                source={require('../assets1/add_circle.png')}
                style={styles.addcircle}
              />
            </View>
            <Text style={styles.part2}>21WN</Text>
            <Text style={styles.part3}>reversible angora cardigan</Text>
            <Text style={styles.part4}>$120</Text>
          </View>
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
              <Text style={styles.part2}>Lopo</Text>
              <Text style={styles.part3}>reversible angora cardigan</Text>
              <Text style={styles.part4}>$120</Text>
            </View>
          </View>
        </View>
        <View style={styles.fourthparagraph}>
          <View style={styles.firstpart}>
            <View style={styles.picview}>
              <Image
                source={require('../assets1/dress7.png')}
                style={styles.dress1}
              />
              <Image
                source={require('../assets1/add_circle.png')}
                style={styles.addcircle}
              />
            </View>
            <Text style={styles.part2}>21WN</Text>
            <Text style={styles.part3}>reversible angora cardigan</Text>
            <Text style={styles.part4}>$120</Text>
          </View>
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
              <Text style={styles.part2}>lame</Text>
              <Text style={styles.part3}>reversible angora cardigan</Text>
              <Text style={styles.part4}>$120</Text>
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
  firstparagraph: {
    flexDirection: 'row',
    marginTop: 40,
  },
  secondparagraph: {
    flexDirection: 'row',
    marginTop: 40,
  },
  thirdparagraph: {
    flexDirection: 'row',
    marginTop: 40,
  },
  fourthparagraph: {
    flexDirection: 'row',
    marginTop: 40,
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
  secondrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  secondone: {
    fontSize: 25,
  },
  secondtwo: {
    flexDirection: 'row',
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