import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import MHeader from '../MHeader/MHeader';
import MainCard from '../MainCard/MainCard';
import { Text } from 'react-native-elements';

import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import HorizontalCard from '../HorizontalCard/HorizontalCard';

const { width, height } = Dimensions.get('window');

class Record extends Component {
  render() {
    const textConfig = {
      h: 'h3',
      text: 'Record'
    };
    const leftIconConfig = {
      side: 'right',
      name: 'chevron-down'
    };
    const rightIconConfig = {
      name: 'search',
      size: 32
    };
    const headerConfig = {
      backgroundColor: '#7782FF',
      height: (15 / 100) * height
    };
    const data = [15, 20, 20, 15, 14, 25, 30, 25, 15];

    const cardContent = [
      { numb: 245, color: '#72A4FF', txt: 'Clients' },
      { numb: 694, color: '#2CC2EA', txt: 'Impacted' },
      { numb: 496, color: '#4DE8C8', txt: 'Following' }
    ];

    const productsInformation = [
      {
        bgColor: '#2CC2EA',
        title: 'Thin face needle',
        price: 183,
        icon: { name: 'needle', type: 'material-community' },
        place: 'North Syfland',
        time: '10am - 06pm'
      },
      {
        bgColor: '#4DE9C9',
        title: 'Hydro lifting',
        price: 207,
        icon: { name: 'lightbulb-outline', type: 'material' },
        place: 'North Syfland',
        time: '10am - 06pm'
      },
      {
        bgColor: '#72A4FF',
        title: 'Eyelid surgery',
        price: 157,
        icon: { name: 'bandage', type: 'material-community' },
        place: 'North Syfland',
        time: '10am - 06pm'
      },
      {
        bgColor: '#8B72FF',
        title: 'Hyaluronic acid',
        price: 149,
        icon: { name: 'heartbeat' },
        place: 'North Syfland',
        time: '10am - 06pm'
      }
    ];

    return (
      <ScrollView>
        <View>
          <MHeader
            textConfig={textConfig}
            rightIconConfig={rightIconConfig}
            leftIconConfig={leftIconConfig}
            headerConfig={headerConfig}
          />
          <MainCard container={{ marginTop: '25%' }} title='Shot Views'>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                flexWrap: 'wrap'
              }}
            >
              {cardContent.map((content, i) => (
                <View
                  key={i}
                  style={{
                    flexDirection: 'column',
                    marginRight: i !== 2 ? '15%' : 0,
                    flex: 1
                  }}
                >
                  <AreaChart
                    style={{ height: 80, width: 70 }}
                    data={data}
                    contentInset={{ top: 30, bottom: 30 }}
                    curve={shape.curveNatural}
                    svg={{ fill: content.color }}
                  />
                  <View style={{ alignItems: 'center' }}>
                    <Text>{content.txt}</Text>
                    <Text h4>{content.numb}</Text>
                  </View>
                </View>
              ))}
            </View>
          </MainCard>
          <View style={{ marginBottom: 20 }}>
            {productsInformation.map((product, i) => (
              <HorizontalCard key={i} cardInformation={product} />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  purpleColor: { color: '#7782FF' },
  downNumber: { color: '#6A7FFF' },
  view: { height: '50%', backgroundColor: '#6B7DFF' }
});

export default Record;
