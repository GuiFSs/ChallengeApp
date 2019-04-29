import React, { Component } from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import Navigator from './src/Components/Navigator/Navigator';

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
        <View style={{ flex: 1, marginTop: '-16%' }}>
          <Navigator />
        </View>
      </ThemeProvider>
    );
  }
}
