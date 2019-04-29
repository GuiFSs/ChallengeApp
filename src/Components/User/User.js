import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import MHeader from '../MHeader/MHeader';
import { Card, Avatar, Button, Text, Icon } from 'react-native-elements';
import { LineChart, BarChart, XAxis } from 'react-native-svg-charts';

import * as shape from 'd3-shape';

const { width, height } = Dimensions.get('window');

export default class User extends Component {
  state = {
    user: {
      name: 'Isabella Hart',
      from: 'North Abbyland',
      tags: 31,
      answer: 106,
      anonymousProxy: '192,842.06',
      uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
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
      height: (20 / 100) * height
    };

    const { user } = this.state;
    // 20, 60, 40, 50, 70, 25, 35
    const data = [
      { value: 20, svg: { fill: '#BAACFC' } },
      { value: 60, svg: { fill: '#85D9F0' } },
      { value: 40, svg: { fill: '#BAACFC' } },
      { value: 50, svg: { fill: '#85D9F0' } },
      { value: 70, svg: { fill: '#85D9F0' } },
      { value: 25, svg: { fill: '#BAACFC' } },
      { value: 35, svg: { fill: '#BAACFC' } }
    ];
    const dataText = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
      <ScrollView>
        <View style={{ padding: 0 }}>
          <MHeader
            textConfig={textConfig}
            rightIconConfig={rightIconConfig}
            leftIconConfig={leftIconConfig}
            headerConfig={headerConfig}
          />
          <Card
            containerStyle={{
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              marginTop: '30%',
              width: width + (4 / 100) * width,
              left: '-5%',
              paddingLeft: 25,
              paddingRight: 25
            }}
          >
            <Avatar
              containerStyle={{ top: '-10%', marginLeft: '40%' }}
              size='large'
              rounded
              source={{ uri: user.uri }}
            />
            {/* user name and from */}
            <View style={{ marginLeft: '28%', marginTop: '-10%' }}>
              <Text h3>{user.name}</Text>
              <Text style={{ marginLeft: '17%', ...styles.greyColor }}>
                {user.from}
              </Text>
            </View>
            {/* tags, answer and contact (button) */}
            <View
              style={{
                flexDirection: 'row',
                marginTop: 25
              }}
            >
              <View style={{ marginRight: '15%' }}>
                <Text h3>{user.tags}</Text>
                <Text>Tags</Text>
              </View>
              <View style={{ marginRight: '15%' }}>
                <Text h3>{user.answer}</Text>
                <Text>Answer</Text>
              </View>
              <Button
                buttonStyle={{
                  backgroundColor: '#7E85FF',
                  borderRadius: 60,
                  paddingLeft: 25,
                  paddingRight: 25,
                  padding: 10
                }}
                containerStyle={{
                  marginLeft: 'auto',
                  borderRadius: 30,
                  marginRight: '10%',
                  marginTop: 12
                }}
                title='contact'
              />
            </View>

            {/* big purple numb, txt bellow, trending-up icon and value */}
            <View style={{ flexDirection: 'row', marginTop: '10%' }}>
              <View>
                <Text style={{ color: '#7880FB' }} h2>
                  {user.anonymousProxy}
                </Text>
                <Text style={{ ...styles.greyColor }}>Anonymous Proxy</Text>
              </View>

              {/* trending-up */}
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 'auto',
                  marginTop: 10
                }}
              >
                <Icon
                  containerStyle={{ marginLeft: 15 }}
                  name='trending-up'
                  color={styles.greenColor.color}
                  type='material'
                  size={40}
                />
                <Text style={{ ...styles.greenColor }} h4>
                  0.17
                </Text>
              </View>
            </View>
            {/* graph */}
            <View style={{ height: 200, padding: 20 }}>
              <BarChart
                yAccessor={({ item }) => item.value}
                spacingInner={0.7}
                spacingOuter={0.01}
                style={{ flex: 1 }}
                data={data}
                gridMin={0}
                contentInset={{ top: 10, bottom: 10 }}
                svg={{ fill: '#85D9F0' }}
              />
              <XAxis
                style={{ marginHorizontal: -10 }}
                data={data}
                formatLabel={(value, index) => `${dataText[index]}`}
                contentInset={{ left: 15, right: 10 }}
                svg={{ fontSize: 15, fill: styles.greyColor.color }}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  greyColor: { color: '#B9B9B9' },
  greenColor: { color: '#80E1B1' }
});
