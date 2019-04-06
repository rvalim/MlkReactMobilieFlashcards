import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, KeyboardAvoidingView, Button, TextInput } from 'react-native'
import { addCard } from '../actions/deck'
import * as styles from '../utils/style'

class CardAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: null,
            answer: null,
        }
    }

    handleSubmit() {
        const { question, answer } = this.state

        if (!question || !answer) {
            Alert.alert('Warning', 'All the fields must need be informed!')
            return;
        }

        const { deckId, dispatch, navigation } = this.props
        dispatch(addCard(deckId, question, answer))
        navigation.pop()
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.css.container}
                behavior="padding" enabled>
                <View
                    style={[{flex:1}, styles.css.row]}>
                    <TextInput
                        value={this.state.question}
                        onChangeText={(question) => this.setState({ question })}
                        placeholder="Portugal's Continent?"></TextInput>
                    <TextInput
                        value={this.state.answer}
                        onChangeText={(answer) => this.setState({ answer })}
                        placeholder="Europe"></TextInput>
                    <Button
                        title="Add Card"
                        styles={styles.css.button}
                        onPress={this.handleSubmit.bind(this)} />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps({ }, { navigation }) {
    const { id: deckId } = navigation.state.params
    return { deckId }
}

export default connect(mapStateToProps)(CardAdd)