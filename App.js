import React from 'react';
import { Provider } from 'react-redux'
import store from './src/store'
import Navigator from './src/components/navControl'
import {handleInitialData} from './src/actions/shared'

export default class App extends React.Component {
  componentDidMount(){
    //clearAll()
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
