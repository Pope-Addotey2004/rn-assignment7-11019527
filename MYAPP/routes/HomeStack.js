import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import Store from '../screens/Store';
import Product from '../screens/Product';
import CustomerItems from '../screens/CustomerItems';

const screens = {
  HomeScreen:{
    screen:HomeScreen
  },
  Store:{
    screen:Store
  },
  Product:{
    screen:Product
  },
  CustomerItems:{
    screen:CustomerItems
  },
}

const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);