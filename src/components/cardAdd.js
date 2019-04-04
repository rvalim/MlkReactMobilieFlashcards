import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert, Text, View, Button, TextInput } from 'react-native'
import {addCard} from '../actions/card'

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
        const {deckId, dispatch, navigation} = this.props
        dispatch(addCard(deckId, question, answer))
        navigation.pop()
    }

    render() {
        return (
            <View>
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
                    onPress={this.handleSubmit.bind(this)} />
            </View>
        )
    }
}

function mapStateToProps({ }, { navigation }) {
    const { id : deckId } = navigation.state.params
    return { deckId }
}

export default connect(mapStateToProps)(CardAdd)