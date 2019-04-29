import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import MHeader from '../MHeader/MHeader';
import { Card, Text, Icon } from 'react-native-elements';

import * as Progress from 'react-native-progress';

const { width, height } = Dimensions.get('window');

export default class Analysis extends Component {
  render() {
    const textConfig = {
      h: 'h3',
      text: 'Analysis',
      color: { color: '#687CFF' }
    };

    const rightIconConfig = {
      name: 'cog',
      size: 32,
      color: '#ccc'
    };

    const headerBgColor = '#fff';

    const itens = [
      {
        text: 'Powder',
        iconName: 'tune',
        type: 'material'
      },
      {
        text: 'Kids',
        iconName: 'briefcase-outline',
        type: 'material-community'
      }
    ];

    const content = [
      { numb: 3357.12, txt: 'Lorem ipsum dolor sit amet' },
      { numb: 4921.27, txt: 'Lasik Eye Surgery Are You Ready' },
      { numb: 1268.36, txt: 'Lorem ipsum dolor sit amet' },
      { numb: 2459.78, txt: 'Lorem ipsum dolor sit amet' }
    ];

    return (
      <ScrollView>
        <View style={{ padding: 20, marginBottom: 35 }}>
          <MHeader
            headerBgColor={headerBgColor}
            textConfig={textConfig}
            rightIconConfig={rightIconConfig}
          />

          {/* itens (icons, text) bellow Analysis */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: '30%',
              marginLeft: '10%'
            }}
          >
            {itens.map(item => (
              <View
                key={item.text}
                style={{ flex: 1, alignItems: 'center', left: -25 }}
              >
                <Text style={{ ...styles.colorPurple, ...styles.textItens }}>
                  {item.text}
                </Text>
                <Icon
                  containerStyle={{ marginTop: 15 }}
                  size={35}
                  name={item.iconName}
                  type={item.type}
                  color={styles.colorPurple.color}
                />
                <Icon
                  size={45}
                  name='plus-circle'
                  type='material-community'
                  containerStyle={{
                    borderRadius: 60,
                    marginLeft: '60%',
                    top: -10
                  }}
                  iconStyle={{ marginTop: '18%' }}
                  color={styles.colorPurple.color}
                />
              </View>
            ))}
          </View>
          {/* bar  */}
          <View
            style={{
              padding: 30,
              paddingLeft: 5
            }}
          >
            <Progress.Bar
              style={{
                marginBottom: 10,
                borderRadius: 10,
                borderColor: '#fff',
                backgroundColor: '#F0F0F3'
              }}
              height={25}
              width={(80 / 100) * width}
              progress={0.3}
              color={styles.colorPurple.color}
            />
          </View>
          {/* content card itens */}
          {content.map((item, i) => (
            <Card
              containerStyle={{
                borderRadius: 10,
                backgroundColor: i !== 1 ? '#fff' : styles.colorPurple.color,
                borderColor: '#fff',
                marginBottom: -15
              }}
              key={i}
            >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={{ color: i !== 1 ? '#C3C5C8' : '#fff' }} h3>
                    {item.numb}
                  </Text>
                  <Text style={{ color: '#ccc' }}>{item.txt}</Text>
                </View>
                <Icon
                  containerStyle={{ marginLeft: 'auto' }}
                  name='sort-down'
                  size={25}
                  color={i !== 1 ? '#ccc' : '#fff'}
                />
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  colorPurple: { color: '#687CFF' },
  textItens: { fontSize: 22 }
});
