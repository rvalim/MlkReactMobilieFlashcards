import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavigationActions} from 'react-navigation'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { addDeck } from '../actions/deck'

class DeckAdd extends Component {
    constructor (props){
        super(props)
        this.state ={
            deckName: ''
        }
    }

    handlerNewDeck(){
        const {dispatch, navigation} = this.props
        const {deckName} = this.state
        
        dispatch(addDeck(deckName))
        navigation.navigate('DeckList')
    }

    render() {
        return (
            <View>
                <Text>And the new Deck's title is...</Text>
                <TextInput 
                    value={this.state.deckName}
                    onChangeText={(deckName) => this.setState({deckName})}
                    placeholder="Example: About Animals"></TextInput>
                <Button 
                    title="Create Deck" 
                    onPress={this.handlerNewDeck.bind(this)}/>
            </View>
        )
    }
}

function mapStateToProps({ decks }) {
    return { decks }
}

export default connect(mapStateToProps)(DeckAdd)
