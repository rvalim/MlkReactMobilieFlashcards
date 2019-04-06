import {Animated, Easing, Platform} from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import DeckList from './deckList'
import DeckAdd from './deckAdd'
import DeckDetail from './deckDetail'
import CardAdd from './cardAdd'
import Quiz from './quiz'

const SlideFromRight = (index, position, width) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0]
  })
  return { transform: [{ translateX }] }
}

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index, route } = scene
      const params = route.params || {}; // <- That's new
      const transition = params.transition || 'default'; // <- That's new
      return {
        default: SlideFromRight(index, position, width),
      }[transition];
    },
  }
}


const TabNavigator = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck list', 
      transition: 'SlideFromBottom'
    }
  },
  DeckAdd: {
    screen: DeckAdd,
    navigationOptions: {
      tabBarLabel: 'New Deck', 
      transition: 'SlideFromBottom'
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
  },
  CardAdd: {
    screen: CardAdd,
  }
}, {
    headerMode: "screen",
    mode: Platform.OS === "ios" ? "modal" : "card",
    transitionConfig: TransitionConfiguration,
  })


export default createAppContainer(Stack)