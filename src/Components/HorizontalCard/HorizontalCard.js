import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Card } from 'react-native-elements';

const HorizontalCard = ({ cardInformation }) => {
  const { title, price, place, time, icon } = cardInformation;
  return (
    <Card>
      <Icon size={25} name={icon.name} type={icon.type || 'font-awesome'} />
      <View style={{ flexDirection: 'row' }}>
        <Text h4>{title}</Text>
        <Text style={{ color: '#859BFF' }} h4>
          $ {price}
        </Text>
      </View>
      <Icon size={15} name='map-marker' />
      <Text> {place}</Text>
      <Text>{time}</Text>
    </Card>
  );
};

export default HorizontalCard;
