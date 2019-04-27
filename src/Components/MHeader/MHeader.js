import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from 'react-native-elements';
import LeftComponent from './LeftComponent/LeftComponent';
import RightComponent from './RightComponent/RightComponent';

const MHeader = ({
  textConfig,
  leftIconConfig,
  rightIconConfig,
  headerConfig
}) => {
  return (
    <View style={{ position: 'absolute', width: '100%' }}>
      <Header
        leftComponent={
          <LeftComponent textConfig={textConfig} iconConfig={leftIconConfig} />
        }
        rightComponent={<RightComponent iconConfig={rightIconConfig} />}
      />
      <View
        style={{
          ...styles.view,
          ...headerConfig
        }}
      >
        {console.log(headerConfig)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { marginTop: -10 }
});

export default MHeader;
