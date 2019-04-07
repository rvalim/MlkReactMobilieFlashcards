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

    return keys.length? 
        <ScrollView style={styles.css.container}>
             {keys.map(p => formatDeck(decks[p]))}
        </ScrollView>
        :<View style={[{flex:1},styles.css.container]}>
            <View style={[{flex:1},styles.css.row]}> 
                <Text style={styles.css.noDataText}>You have no decks yet!</Text>
            </View>
        </View>
}

function mapStateToProps({ decks }) {
    return { decks }
}

export default connect(mapStateToProps)(DeckList)

