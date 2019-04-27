import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon } from 'react-native-elements';

const LeftComponent = ({ textConfig, iconConfig }) => {
  let text;
  switch (textConfig.h) {
    case 'h1':
      text = (
        <Text style={styles.text} h1>
          {textConfig.text}
        </Text>
      );
      break;
    case 'h2':
      text = (
        <Text style={styles.text} h2>
          {textConfig.text}
        </Text>
      );
      break;
    case 'h3':
      text = (
        <Text style={styles.text} h3>
          {textConfig.text}
        </Text>
      );
      break;
    case 'h4':
      text = (
        <Text style={styles.text} h4>
          {textConfig.text}
        </Text>
      );
      break;
    default:
      text = <Text style={styles.text}>{textConfig.text}</Text>;
  }
  let component = <View>{text}</View>;

  if (iconConfig) {
    if (iconConfig.side === 'left') {
      component = (
        <View>
          <Icon
            name={iconConfig.name}
            containerStyle={styles.icon}
            color='#F2F4FF'
          />{' '}
          {text}
        </View>
      );
    } else {
      component = (
        <View>
          {text}
          <Icon
            iconStyle={styles.icon}
            // containerStyle={styles.icon}
            name={iconConfig.name}
            color='#F2F4FF'
          />
        </View>
      );
    }
  }

  return <View style={styles.container}>{component}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    flexDirection: 'column',
    padding: 20,
    paddingTop: 35
  },
  text: {
    color: '#F2F4FF'
  },
  icon: { top: -30, marginLeft: '55%' }
});

export default LeftComponent;
