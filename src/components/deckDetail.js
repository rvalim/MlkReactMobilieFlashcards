import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert, Text, View, Button, TextInput } from 'react-native'

const DeckDetail = ({ deck }) => {
    const handleAddCard = () => Alert.alert('not developed')
    const handleDelCard = () => Alert.alert('not developed')
    const handleStartQuiz = () => Alert.alert('not developed')

    return (
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
        </View>
    )
}

function mapStateToProps({decks}, {navigation}) {
    const {id} = navigation.state.params
    return { deck: decks[id] }
}

export default connect(mapStateToProps)(DeckDetail)
