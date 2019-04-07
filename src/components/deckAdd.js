import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert, Text, View, KeyboardAvoidingView, Button, TextInput } from 'react-native'
import { addDeck } from '../actions/deck'
import { generateUID } from '../utils/helper'
import * as styles from '../utils/style'

class DeckAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deckName: ''
        }
    }

    handlerNewDeck() {
        const { dispatch, navigation } = this.props
        const { deckName } = this.state

        if (!deckName) {
            Alert.alert('Warning', 'Title Deck must need be informed!')
            return;
        }

        const key = generateUID()

        dispatch(addDeck(key, deckName))
        this.setState({ deckName: '' })

        navigation.navigate('DeckDetail', { id: key })
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.css.container} behavior="padding" enabled>
                <View style={[{ flex: 1 }, styles.css.row]}>
                    <Text style={[styles.css.title]}>And the new Deck's title is...</Text>
                    <TextInput
                        style={styles.css.input}
                        value={this.state.deckName}
                        onChangeText={(deckName) => this.setState({ deckName })}
                        placeholder="Example: About Animals"></TextInput>
                    <View style={styles.css.button}>
                        <Button
                            title="Create Deck"
                            onPress={this.handlerNewDeck.bind(this)} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps({ decks }) {
    return { decks }
}

export default connect(mapStateToProps)(DeckAdd)
