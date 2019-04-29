import React, { Component } from 'react';
import { ScrollView } from 'react-native';

const WithScroll = ({ component: Component, ...rest }) => (
  <ScrollView style={{ flex: 1 }}>
    <Component {...rest} />
  </ScrollView>
);

export default WithScroll;
