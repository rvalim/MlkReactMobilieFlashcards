import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native'

const DeckList = ({ decks, navigation }) => {
    const handleTouch = (id) => {
        navigation.navigate('DeckDetail', { id })
    }

    const formatDeck = (deck) => {
        return (
            <TouchableHighlight
                key={deck.id}
                onPress={() => handleTouch(deck.id)} >
                <View>
                    <Text>{deck.title}</Text>
                    <Text>{deck.cards.length}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    const keys = Object.keys(decks)

    return keys.length ?
        <View>
            {keys.map(p => formatDeck(decks[p]))}
        </View>
        : <Text>You have no decks yet!</Text>
}

function mapStateToProps({ decks }) {
    return { decks }
}

export default connect(mapStateToProps)(DeckList)