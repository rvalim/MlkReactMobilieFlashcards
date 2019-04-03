import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

class DeckList extends Component {
    render() {
        return (
            <View>
                <Text>And the new Deck's title is...</Text>
                <TextInput placeholder="Example: About Animals"></TextInput>
                <Button>Create Deck</Button>
            </View>
        )
    }
}

function mapStateToProps({ decks }) {
    return { decks }
}

export default connect(mapStateToProps)(DeckList)