import React, { Component } from 'react';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import MHeader from '../MHeader/MHeader';
import VerticalCard from '../VerticalCard/VerticalCard';

class Products extends Component {
  state = {
    screenHeight: 0,
    tags: [
      { txt: 'Types Of Cosmetics', desc: 'Free Real Estate Listing' },
      { txt: 'Advertising Outdoors', desc: 'Dude You Re Getting A Telescope' }
    ],
    tabItens: [
      { active: true, key: 'DAILY' },
      { active: false, key: 'MONTHLY' },
      { active: false, key: 'YEARLY' }
    ],
    productsInformation: [
      {
        rating: 4,
        key: 'a',
        btnBorderColor: '#97F1C5',
        title: 'Thin face needle',
        number: '3.79',
        iconConfig: {
          color: '#2CC2EA',
          name: 'needle',
          type: 'material-community'
        },
        place: 'North Syfland',
        time: '10am - 06pm'
      },
      {
        rating: 3.2,
        key: 'b',
        btnBorderColor: '#B7DBFF',
        title: 'Hydro lifting',
        number: '2.63',
        iconConfig: {
          color: '#4DE9C9',
          name: 'lightbulb-outline',
          type: 'material'
        },
        place: 'North Syfland',
        time: '10am - 06pm'
      },
      {
        rating: 4.8,
        key: 'c',
        btnBorderColor: '#BAACFC',
        title: 'Eyelid surgery',
        number: '4.17',
        iconConfig: {
          color: '#72A4FF',
          name: 'bandage',
          type: 'material-community'
        },
        place: 'North Syfland',
        time: '10am - 06pm'
      },
      {
        rating: 2.5,
        key: 'd',
        btnBorderColor: '#85D9F0',
        title: 'Hyaluronic acid',
        number: '3.41',
        iconConfig: { color: '#8B72FF', name: 'heartbeat' },
        place: 'North Syfland',
        time: '10am - 06pm'
      }
    ]
  };

  handleTabTouch = (key, index) => {
    const newTabs = [...this.state.tabItens];
    newTabs.map(item => (item.active = false));
    newTabs[index].active = true;
    this.setState({ tabItens: newTabs });
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

    return (
      <ScrollView>
        <View style={{ marginBottom: 25 }}>
          <MHeader
            textConfig={textConfig}
            rightIconConfig={rightIconConfig}
            leftIconConfig={leftIconConfig}
          />

          {/* view with purple background, this is practically the main View */}
          <View style={{ height: '100%' }}>
            <View
              style={{
                padding: 10,
                backgroundColor: styles.purpleColor.color,
                marginTop: '18%'
              }}
            >
              {/* tab view */}
              <View
                style={{
                  paddingLeft: 0,
                  backgroundColor: '#8B94FF',
                  borderRadius: 60
                }}
              >
                <FlatList
                  horizontal={true}
                  data={this.state.tabItens}
                  renderItem={({ item, index }) => (
                    <View
                      onTouchStart={e => this.handleTabTouch(item.key, index)}
                    >
                      <Text
                        style={
                          item.active ? styles.activeTab : styles.normalTab
                        }
                      >
                        {item.key}
                      </Text>
                    </View>
                  )}
                />
              </View>
              {/* text and numbers in the middle of the screen */}
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 40
                }}
              >
                <Text style={{ ...styles.whiteColor }} h4>
                  THE STATISTICS
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ ...styles.whiteColor }} h2>
                    7.436
                  </Text>
                  <Text
                    style={{
                      ...styles.whiteColor,
                      fontSize: 18,
                      marginTop: 5,
                      marginLeft: 5
                    }}
                  >
                    K
                  </Text>
                </View>
              </View>
              <View style={{ height: 100 }} />
            </View>
            {/* ^^^^ end of purple bg  */}
            <View style={{ top: '-10%', marginBottom: 15 }}>
              <FlatList
                horizontal={true}
                style={{ flex: 1 }}
                data={this.state.productsInformation}
                renderItem={({ item }) => (
                  <VerticalCard
                    rating={item.rating}
                    iconConfig={item.iconConfig}
                    title={item.title}
                    place={item.place}
                    number={item.number}
                    btnBorderColor={item.btnBorderColor}
                  />
                )}
              />
            </View>
            {/* tags */}
            <View style={{ padding: 10, top: '-10%' }}>
              <Text style={{ marginBottom: 20 }} h4>
                TAGS
              </Text>
              {this.state.tags.map(tag => (
                <View
                  key={tag.txt}
                  style={{ flexDirection: 'row', marginBottom: 20 }}
                >
                  <Icon
                    name='checkbox-blank-circle-outline'
                    type='material-community'
                    color='#A0AEFC'
                  />
                  <View>
                    <Text
                      style={{ fontSize: 20, color: '#898D92', marginLeft: 10 }}
                    >
                      {tag.txt}
                    </Text>
                    <Text style={{ marginLeft: 10 }}>{tag.desc}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  purpleColor: { color: '#7782FF' },
  activeTab: {
    fontSize: 16,
    borderRadius: 60,
    backgroundColor: '#fff',
    padding: 20,
    paddingLeft: 45,
    paddingRight: 45
  },
  normalTab: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20
  },
  whiteColor: { color: '#fff' }
});

export default Products;
