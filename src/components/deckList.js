import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native'

class DeckList extends Component {
    handleTouch(id){
        const {navigation} = this.props
        navigation.navigate('DeckDetail', {id})
    }

    formatDeck(deck) {
        return (
            <TouchableHighlight 
                key={deck.id}
                onPress={() => this.handleTouch(deck.id)} >
                <View>
                    <Text>{deck.title}</Text>
                    <Text>{deck.cards.length}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        const {decks} = this.props
        return (
            <View>
                {Object.keys(decks).map(p => this.formatDeck(decks[p]))}
            </View>
        )
    }
}

function mapStateToProps({decks}) {
    return {decks}
}

export default connect(mapStateToProps)(DeckList)