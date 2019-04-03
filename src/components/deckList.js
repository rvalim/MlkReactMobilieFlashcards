import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'

class DeckList extends Component {
    formatDeck(deck) {
        <View>
            <Text>{deck.title}</Text>
            <Text>{deck.cards.length}</Text>
            <Button>View Cards</Button>
        </View>
    }

    render() {
        return (
            <View>
                
            </View>
        )
    }
}

function mapStateToProps({decks}) {
    return { decks }
}

export default connect(mapStateToProps)(DeckList)