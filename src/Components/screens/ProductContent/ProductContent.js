import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Text, Icon, Card, Rating, Button } from 'react-native-elements';
import MHeader from '../../MHeader/MHeader';

const { width, height } = Dimensions.get('window');
class ProductContent extends Component {
  state = {
    product: {
      bgColor: '#2CC2EA',
      title: 'Thin face needle',
      price: 183,
      icon: { name: 'needle', type: 'material-community' },
      place: 'North Syfland',
      time: '10am - 06pm',
      rating: 4.6,
      description: 'Using Laser Treatment To Help You',
      description2: 'Quit Smoking',
      daily: {
        contextualAd: '3792.17',
        clients: '2451',
        impacted: '694',
        following: '14'
      }
    }
  };

  render() {
    const textConfig = {
      h: 'h3',
      text: 'event'
    };
    const leftIconConfig = {
      side: 'left',
      name: 'chevron-left'
    };
    const rightIconConfig = {
      name: 'dots-horizontal',
      type: 'material-community',
      size: 32
    };
    const headerConfig = {
      backgroundColor: '#7782FF',
      height: (50 / 100) * height
    };

    const { product } = this.state;

    return (
      <ScrollView>
        <View style={styles.container}>
          <MHeader
            textConfig={textConfig}
            rightIconConfig={rightIconConfig}
            leftIconConfig={leftIconConfig}
            headerConfig={headerConfig}
          />

          <Card containerStyle={{ ...styles.card, marginTop: '30%' }}>
            {/* big icon, title and place*/}
            <View style={{ alignItems: 'center' }}>
              <Icon
                color='#fff'
                containerStyle={{
                  ...styles.icon,
                  backgroundColor: product.bgColor
                }}
                iconStyle={{
                  marginTop: '40%'
                }}
                size={50}
                name={product.icon.name}
                type={product.icon.type || 'font-awesome'}
              />
              <Text style={{ marginTop: 15 }} h4>
                {product.title}
              </Text>
              <Text style={styles.greyText}>{product.place}</Text>
            </View>
            {/* rating */}
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
              <Text h3 style={{ color: '#616371' }}>
                {product.rating}
              </Text>
              <Rating
                style={{
                  marginLeft: 20,
                  marginTop: 5
                }}
                type='custom'
                ratingBackgroundColor='#ccc'
                ratingCount={5}
                imageSize={30}
                readonly
                startingValue={product.rating}
              />
            </View>
            {/* descriptions */}
            <View style={{ marginTop: 5 }}>
              <Text style={styles.greyText}>{product.description}</Text>
              <Text style={styles.greyText}>{product.description2}</Text>
            </View>
            {/* tabs */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20
              }}
            >
              {['ALL', 'DAILY', 'MONTHLY', 'YEARLY'].map(val => (
                <Text
                  key={val}
                  style={{
                    color:
                      val === 'DAILY'
                        ? styles.purpleColor.color
                        : styles.darkerGrey.color,
                    ...styles.tabsText
                  }}
                >
                  {val}
                </Text>
              ))}
            </View>
            {/* big number */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20
              }}
            >
              <Text style={styles.purpleColor} h1>
                {product.daily.contextualAd}
              </Text>
              <Icon
                name='link-variant'
                type='material-community'
                size={20}
                containerStyle={{
                  backgroundColor: '#8B72FF',
                  marginLeft: 20,
                  padding: 5,
                  borderRadius: 30
                }}
                color='#fff'
              />
            </View>
            {/* bellow big number */}
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.greyText}>Contextual advertising</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20
              }}
            >
              {Object.keys(product.daily).map(
                key =>
                  key !== 'contextualAd' && (
                    <View
                      key={key}
                      style={{
                        flex: 1,
                        justifyContent: 'space-between'
                      }}
                    >
                      <Text style={styles.greyText}>{key}</Text>
                      <Text h4 style={styles.purpleColor}>
                        {product.daily[key]}
                      </Text>
                    </View>
                  )
              )}
              <View />
            </View>
            {/* income, text bellow 'income' and buttons */}
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
              {/* income and texts bellow it */}
              <View>
                <Text style={styles.purpleColor} h4>
                  INCOME
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    marginTop: 20
                  }}
                >
                  <View style={{ marginRight: '20%' }}>
                    <Text>raise</Text>
                    <Text style={styles.purpleColor} h4>
                      1.79
                    </Text>
                  </View>
                  <View style={{ marginRight: '10%' }}>
                    <Text>extent</Text>
                    <Text style={styles.purpleColor} h4>
                      0.12583
                    </Text>
                  </View>
                </View>
              </View>
              {/* buttons */}
              <View style={{ marginLeft: 'auto' }}>
                <Button
                  buttonStyle={{
                    backgroundColor: '#E3E3EC',
                    height: 40,
                    width: 60,
                    borderTopRightRadius: 20
                  }}
                  icon={{
                    name: 'chevron-up',
                    size: 15,
                    color: '#96C0FD'
                  }}
                />
                <Button
                  buttonStyle={{
                    backgroundColor: '#7882FF',
                    height: 100,
                    width: 60,
                    borderBottomRightRadius: 20
                  }}
                  icon={{
                    name: 'arrow-right',
                    size: 15,
                    color: 'white'
                  }}
                />
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { marginBottom: 25 },
  greyText: { color: '#9B9B9B' },
  darkerGrey: { color: '#686868' },
  tabsText: { fontSize: 20 },
  card: {
    backgroundColor: 'rgba(255,255,255, .9)',
    borderRadius: 10,
    padding: 25,
    marginBottom: 25
  },
  icon: {
    borderRadius: 20,
    padding: 18,
    width: 90,
    height: 90,
    marginTop: '-20%'
  },
  smallGreyText: { fontSize: 14, color: '#ccc' },
  purpleColor: { color: '#7782FF' },
  downNumber: { color: '#6A7FFF' },
  view: { height: '50%', backgroundColor: '#6B7DFF' }
});
export default ProductContent;
