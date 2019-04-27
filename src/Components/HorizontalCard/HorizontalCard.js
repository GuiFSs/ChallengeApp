import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon, Card } from 'react-native-elements';

const HorizontalCard = ({ cardInformation }) => {
  const { title, price, place, time, icon, bgColor } = cardInformation;
  return (
    <Card>
      <View style={{ ...styles.rowFlex, width: '100%' }}>
        {/* main big icon */}
        <Icon
          color='#fff'
          containerStyle={{ ...styles.icon, backgroundColor: bgColor }}
          size={50}
          name={icon.name}
          type={icon.type || 'font-awesome'}
        />

        {/* title and text bellow title */}
        <View style={{ marginLeft: 10 }}>
          <Text h4>{title}</Text>
          <View style={{ ...styles.rowFlex }}>
            <Icon color='#ccc' size={20} name='map-marker' />
            <Text> {place}</Text>
          </View>
          <Text style={{ marginLeft: 10 }}>{time}</Text>
        </View>

        {/* money text */}
        <View
          style={{
            ...styles.rowFlex,
            marginLeft: 'auto',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              ...styles.textColorPurple,
              ...styles.moneySymbol,
              marginTop: '20%'
            }}
          >
            $
          </Text>
          <Text
            style={{
              ...styles.textColorPurple
            }}
            h4
          >
            {price}
          </Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  textColorPurple: { color: '#859BFF' },
  moneySymbol: { fontSize: 15 },
  rowFlex: { flexDirection: 'row' },
  icon: { borderRadius: 20, padding: 18 }
});

export default HorizontalCard;
