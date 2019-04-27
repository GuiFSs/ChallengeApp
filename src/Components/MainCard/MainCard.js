import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';

const MainCard = ({ children, title, container = {} }) => {
  return (
    <Card containerStyle={{ ...styles.card, ...container }}>
      <View style={styles.viewLeft}>
        <Text h4>{title}</Text>
      </View>
      <View style={styles.viewRIght}>
        <Text style={styles.textRight}>more</Text>
      </View>
      {children}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255,255,255, .9)',
    borderRadius: 10,
    padding: 25
  },
  viewLeft: { flexDirection: 'row' },
  textLeft: { textAlign: 'left' },
  textRight: { color: '#7682FF', marginTop: -25 },
  viewRIght: { alignSelf: 'flex-end' }
});

export default MainCard;
