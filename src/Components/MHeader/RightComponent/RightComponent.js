import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const RightComponent = ({ iconConfig }) => {
  return (
    <View style={styles.container}>
      <Icon
        size={iconConfig.size}
        containerStyle={styles.icon}
        name={iconConfig.name}
        type={iconConfig.type || 'font-awesome'}
        color={iconConfig.color || '#F2F4FF'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 35,
    paddingRight: 10
  },
  icon: { top: -7 }
});

export default RightComponent;
