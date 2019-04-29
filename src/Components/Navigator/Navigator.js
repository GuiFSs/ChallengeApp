import { createStackNavigator, createAppContainer } from 'react-navigation';
import Analysis from '../Analysis/Analysis';
import ProductContent from '../ProductContent/ProductContent';
import User from '../User/User';
import Record from '../Record/Record';
import Products from '../Products/Products';
import Project from '../Project/Project';
import HomeScreen from '../HomeScreen/HomeScreen';

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
