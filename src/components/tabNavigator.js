import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
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
  
export default createAppContainer(TabNavigator)