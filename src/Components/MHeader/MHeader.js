import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from 'react-native-elements';
import LeftComponent from './LeftComponent/LeftComponent';
import RightComponent from './RightComponent/RightComponent';

const MHeader = ({
  textConfig,
  leftIconConfig,
  rightIconConfig,
  headerConfig,
  headerBgColor
}) => {
  return (
    <View style={{ position: 'absolute', width: '100%' }}>
      <Header
        backgroundColor={headerBgColor || '#7782FF'}
        leftComponent={
          <LeftComponent textConfig={textConfig} iconConfig={leftIconConfig} />
        }
        rightComponent={<RightComponent iconConfig={rightIconConfig} />}
      />

      {headerConfig && (
        <View
          style={{
            ...styles.view,
            ...headerConfig
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: { marginTop: -10 }
});

export default MHeader;
