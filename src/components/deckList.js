import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'

class DeckList extends Component {
    formatDeck(deck) {
        return (
            <View key={deck.id}>
                <Text>{deck.title}</Text>
                <Text>{deck.cards.length}</Text>
            </View>
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