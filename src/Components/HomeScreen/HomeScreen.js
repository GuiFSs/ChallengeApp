import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = props => {
  const screens = [
    'Analysis',
    'ProductContent',
    'User',
    'Record',
    'Products',
    'Project'
  ];
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text h2>SCREENS</Text>
      <Text style={{ fontSize: 20 }}>
        Press any button to navigate between screens
      </Text>

      {screens.map(item => (
        <Button
          key={item}
          containerStyle={{ width: '50%' }}
          buttonStyle={{ marginTop: 20 }}
          title={item}
          onPress={() => props.navigation.navigate(item)}
        />
      ))}
    </View>
  );
};

export default HomeScreen;
