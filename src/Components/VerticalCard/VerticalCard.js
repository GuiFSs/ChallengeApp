import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon, Card, Button, Rating } from 'react-native-elements';

const VerticalCard = ({
  iconConfig,
  title,
  place,
  number,
  btnBorderColor,
  rating
}) => {
  return (
    <Card containerStyle={styles.cardStyle}>
      <View style={styles.containerStyle}>
        <Icon
          containerStyle={{
            backgroundColor: iconConfig.color,
            borderRadius: 10,
            width: 45,
            height: 45,
            marginBottom: 10
          }}
          iconStyle={{ marginTop: '20%' }}
          name={iconConfig.name}
          type={iconConfig.type || 'font-awesome'}
          color='#fff'
          size={26}
        />
        <Text>{title}</Text>
        <Text style={{ fontSize: 14, color: '#ccc', marginTop: 7 }}>
          {place}
        </Text>
        <Rating
          style={{ marginTop: 7, marginBottom: 10 }}
          type='custom'
          ratingBackgroundColor='#ccc'
          ratingCount={5}
          imageSize={20}
          readonly
          startingValue={rating}
        />
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: '#5271FF' }} h4>
            {number}
          </Text>
          <Text style={{ color: '#5271FF' }}>K</Text>
        </View>
        <Button
          buttonStyle={{ ...styles.btnStyle, borderColor: btnBorderColor }}
          titleStyle={{ color: btnBorderColor }}
          type='outline'
          title='more'
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 0
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textColorPurple: { color: '#859BFF' },
  btnStyle: {
    marginTop: 10,
    borderWidth: 3,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 30,
    paddingTop: 0,
    paddingBottom: 0
  }
});

export default VerticalCard;
