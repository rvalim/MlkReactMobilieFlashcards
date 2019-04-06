import React from 'react'
import { connect } from 'react-redux'
import { Text, View, KeyboardAvoidingView, Button } from 'react-native'
import { delDeck } from '../actions/deck'
import * as styles from '../utils/style'

const DeckDetail = ({ id, deck, navigation, dispatch }) => {
    const handleStartQuiz = () => navigation.navigate('Quiz', { id })
    const handleAddCard = () => navigation.navigate('CardAdd', { id })
    const handleDelCard = () => {
        dispatch(delDeck(id))
        navigation.pop()
    }

    return deck ?
        <KeyboardAvoidingView
            style={styles.css.container}
            behavior="padding" enabled>
            <View style={[{flex:1},styles.css.row]}>
                <Text style={styles.css.title}>{deck.title}</Text>
                <Text>{deck.questions.length} cards</Text>
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
        </KeyboardAvoidingView> :
        <Text>Unfounded deck {id}</Text>

}

function mapStateToProps({ decks }, { navigation }) {
    const { id } = navigation.state.params
    return { id, deck: decks[id] }
}

export default connect(mapStateToProps)(DeckDetail)
