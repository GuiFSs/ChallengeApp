import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import { ThemeProvider, Text } from 'react-native-elements';
import Navigator from './src/Components/Navigator/Navigator';

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
    return (
      <ThemeProvider theme={theme}>
        <View style={{ flex: 1, marginTop: '-14%' }}>
          <Navigator />
        </View>
      </ThemeProvider>
    );
  }
}
