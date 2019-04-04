import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import DeckList from './deckList'
import DeckAdd from './deckAdd'
import DeckDetail from './deckDetail'
import Quiz from './quiz'

const TabNavigator = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck list'
    }
  },
  DeckAdd: {
    screen: DeckAdd,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  },
})


const Stack = createStackNavigator({
  Home: {
    screen: TabNavigator
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      tabBarLabel: 'Details'
    }
  },
  Quiz: {
    screen: Quiz,
  }
})


export default createAppContainer(Stack)