import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-svg-charts';
import { Text, Icon, Card, Avatar } from 'react-native-elements';
import * as shape from 'd3-shape';
import MHeader from '../../MHeader/MHeader';
import MainCard from '../../MainCard/MainCard';
import * as Progress from 'react-native-progress';

const { width, height } = Dimensions.get('window');

class Project extends Component {
  render() {
    const textConfig = {
      h: 'h3',
      text: 'Project'
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

    const data = [30, 40, 60, 59, 40, 25, 30, 30, 65, 40, 55, 55, 55];
    return (
      <ScrollView>
        <View style={styles.container}>
          <MHeader
            textConfig={textConfig}
            rightIconConfig={rightIconConfig}
            leftIconConfig={leftIconConfig}
            headerConfig={headerConfig}
          />
          <MainCard container={{ marginTop: '25%' }} title='Outfit Ideas'>
            <View>
              <LineChart
                style={{ height: 200 }}
                data={data}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ stroke: 'rgb(91,117,255)', strokeWidth: 3 }}
              />
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={styles.downNumber} h2>
                    9,1278.19
                  </Text>
                  <Text style={{ fontSize: 10, color: '#ccc' }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 'auto',
                    flexDirection: 'row',
                    marginTop: 10
                  }}
                >
                  <Icon
                    containerStyle={{ marginLeft: 15 }}
                    iconStyle={{ textAlign: 'right' }}
                    name='trending-up'
                    color={styles.greenColor.color}
                    type='material'
                  />
                  <Text
                    style={{
                      color: styles.greenColor.color,
                      fontSize: 18,
                      marginLeft: 10
                    }}
                  >
                    1.57
                  </Text>
                </View>
              </View>
            </View>
          </MainCard>
          <Card containerStyle={{ marginBottom: 20, borderRadius: 10 }}>
            <View>
              <Avatar
                rounded
                size='small'
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                }}
              />
              <Text
                style={{
                  ...styles.purpleColor,
                  marginLeft: 50,
                  top: -35,
                  fontSize: 20
                }}
              >
                Contrast
              </Text>
            </View>
            <View style={{ top: -15 }}>
              <Text style={{ ...styles.purpleColor }} h4>
                Steps in Installing
              </Text>
              <Text style={{ ...styles.smallGreyText, marginBottom: 10 }}>
                02 Jun 2017
              </Text>
              {[0.65, 0.73, 0.47].map((val, i) => (
                <View key={i}>
                  <Text style={styles.smallGreyText}>Lorem ipsum</Text>

                  <View style={{ flexDirection: 'row' }}>
                    <Progress.Bar
                      style={{
                        marginBottom: 10,
                        borderRadius: 10,
                        borderColor: '#fff'
                      }}
                      height={15}
                      width={(80 / 100) * width}
                      progress={val}
                      color={styles.purpleColor.color}
                    />
                    <Text>{(val * 10).toFixed(1)}</Text>
                  </View>
                </View>
              ))}
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { marginBottom: 35 },
  smallGreyText: { fontSize: 14, color: '#ccc' },
  purpleColor: { color: '#7782FF' },
  downNumber: { color: '#6A7FFF' },
  view: { height: '50%', backgroundColor: '#6B7DFF' },
  greenColor: { color: '#80E1B1' }
});

export default Project;
