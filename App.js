import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet } from 'react-native';
import store from './src/store'
import Navigator from './src/components/navControl'
import {handleInitialData} from './src/actions/shared'

export default class App extends React.Component {
  componentDidMount(){
    store.dispatch(handleInitialData())
  }
  render() {
    return (
      <Provider store={store}>
        <Navigator/>
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