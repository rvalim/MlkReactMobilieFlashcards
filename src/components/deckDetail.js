import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert, Text, View, Button, TextInput } from 'react-native'
import { delDeck } from '../actions/deck'

const DeckDetail = ({ id, deck, navigation, dispatch}) => {
    const handleStartQuiz = () => navigation.navigate('Quiz', {id})
    const handleAddCard = () => navigation.navigate('CardAdd', {id})
    const handleDelCard = () => {
        dispatch(delDeck(id))
        navigation.pop()
    }

    return deck?
        <View>
            <Text>{deck.id}</Text>
            <Text>{deck.title}</Text>
            <Text>{deck.cards.length} cards</Text>
            <Button
                title="Add Card"
                onPress={() => handleAddCard()} />
            <Button
                title="Start Quiz"
                onPress={() => handleStartQuiz()} />
            <Button
                title="Delete Deck"
                onPress={() => handleDelCard()} />
        </View>:
        <Text>Unfounded deck {id}</Text>
    
}

function mapStateToProps({decks}, {navigation}) {
    const {id} = navigation.state.params
    return { id, deck: decks[id] }
}

export default connect(mapStateToProps)(DeckDetail)
