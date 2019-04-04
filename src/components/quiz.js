import React from 'react'
import { connect } from 'react-redux'
import { Alert, Text, View, Button, TextInput } from 'react-native'

const Quiz = ({ cards }) => {
    const formatCard = (card) => {
        <View key={card.id}>
            <Text>{card.title}</Text>
        </View>
    }

    return <View>
            {cards.length?
            cards.map(p => formatCard(p)):
            <Text>You can't answer quizes without cards</Text>}
        </View>
}

function mapStateToProps({ decks, cards }, { navigation }) {
    const {id} = navigation.state.params
    
    return {
        cards: decks[id].cards.map(p => cards[p])
    }
}

export default connect(mapStateToProps)(Quiz)