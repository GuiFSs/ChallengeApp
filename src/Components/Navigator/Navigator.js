import { createStackNavigator, createAppContainer } from 'react-navigation';
import Analysis from '../screens/Analysis/Analysis';
import ProductContent from '../screens/ProductContent/ProductContent';
import User from '../screens/User/User';
import Record from '../screens/Record/Record';
import Products from '../screens/Products/Products';
import Project from '../screens/Project/Project';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Analysis: {
      screen: Analysis
    },
    ProductContent: {
      screen: ProductContent
    },
    User: {
      screen: User
    },
    Record: {
      screen: Record
    },
    Products: {
      screen: Products
    },
    Project: {
      screen: Project
    }
  },
  { initialRouteName: 'Home' }
);

export default createAppContainer(AppNavigator);
