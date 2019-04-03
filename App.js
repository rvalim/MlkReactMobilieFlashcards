import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import store from './src/store'
import DeckList from './src/components/deckList'
import DeckAdd from './src/components/deckAdd'

const TabNavigator = createBottomTabNavigator({
  DeckList:{
    screen: DeckList,
    // navigationOptions: {
    //   tabBarLabel: 'Deck list'
    // }
  },
  DeckAdd:{
    screen: DeckAdd,
    // navigationOptions: {
    //   tabBarLabel: 'New Deck'
    // }
  },
})

const Tabs = createAppContainer(TabNavigator)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <Tabs/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});