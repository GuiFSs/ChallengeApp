import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import Project from './src/Components/Project/Project';
import Record from './src/Components/Record/Record';
import ProductContent from './src/Components/ProductContent/ProductContent';

const theme = {
  Header: {
    backgroundColor: '#7782FF'
  },
  Icon: {
    type: 'font-awesome'
  }
};

const { width, height } = Dimensions.get('window');

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
        <ScrollView
          style={{ flex: 1 }}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <ProductContent />
          {/* <Project /> */}
          {/* <Record /> */}
        </ScrollView>
      </ThemeProvider>
    );
  }
}
