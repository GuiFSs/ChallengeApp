import React, { Component } from 'react';
import { ScrollView, Dimensions, View } from 'react-native';
import { ThemeProvider, Text } from 'react-native-elements';
import AppContainer from './src/Components/Navigator/Navigator';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Products from './src/Components/Products/Products';
import Navigator from './src/Components/Navigator/Navigator';
import ProductContent from './src/Components/ProductContent/ProductContent';

const { width, height } = Dimensions.get('window');

const theme = {
  Icon: {
    type: 'font-awesome'
  }
};
export default class App extends Component {
  state = {
    screenHeight: 0
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  render() {
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <ThemeProvider theme={theme}>
        <View style={{ flex: 1, top: '-9%' }}>
          <Navigator />
        </View>
      </ThemeProvider>
    );
  }
}
