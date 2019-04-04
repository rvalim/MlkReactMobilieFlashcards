import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { addDeck } from '../actions/deck'

class DeckDetail extends Component {
    render() {
        return (
            <View>
                <Text>DECK DETAIL</Text>
            </View>
        )
    }
}

function mapStateToProps({ decks }, { id }) {
    return { deck: decks[id] }
}

export default connect(mapStateToProps)(DeckDetail)
