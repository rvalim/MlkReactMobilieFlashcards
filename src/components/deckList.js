import React from 'react'
import { connect } from 'react-redux'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import * as styles from '../utils/style'

const DeckList = ({ decks, navigation }) => {
    const handleTouch = (id) => {
        navigation.navigate('DeckDetail', { id })
    }

    const formatDeck = (deck) => {
        return (
            <TouchableOpacity
                key={deck.id}
                onPress={() => handleTouch(deck.id)}
                style={styles.css.row}>
                <View>
                    <Text style={styles.css.titleList}>{deck.title}</Text>
                    <Text>{deck.questions.length} cards</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const keys = Object.keys(decks)

    return <ScrollView style={styles.css.container}>
            {keys.length? keys.map(p => formatDeck(decks[p]))
            :<View style={[{flex:1},styles.css.row]}> 
                <Text style={styles.css.title}>You have no decks yet!</Text>
            </View>}
        </ScrollView>
}

function mapStateToProps({ decks }) {
    return { decks }
}

export default connect(mapStateToProps)(DeckList)

