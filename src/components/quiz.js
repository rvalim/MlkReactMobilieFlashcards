import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert, Text, View, Button, TextInput } from 'react-native'

class Quiz extends Component {
    constructor(props) {
        super(props)

        this.state = {
            answeredId: [],
            answers: {},
            popedCard: null, 
            quizFinish: false
        }
    }

    componentDidMount(){
        this.pop()
    }

    handleAnswer(id, isCorrect) {
        this.setState((prev, props) => {
            return {
                answers: {
                    ...prev.answers,
                    [id]: isCorrect.toString()
                }
                , answeredId: [
                    ...prev.answeredId,
                    id
                ]
            }
        }, () => this.pop())
    }

    formatCard(card) {
        if (!card) return
        return (
            <View key={card.id}>
                <Text>{card.question}</Text>
                <Button
                    title="Correct"
                    onPress={() => this.handleAnswer(card.id, true)} />
                <Button
                    title="Incorrect"
                    onPress={() => this.handleAnswer(card.id, false)} />
            </View>
        )
    }

    showScore(){
        const {answeredId, answers, quizFinish} = this.state
        if (!quizFinish) return 

        const counter = {}
        Object.keys(answers).forEach(p => counter[answers[p]] = (counter[answers[p]] || 0) + 1)

        return (
            <View>
                <Text>false: {counter['false']}</Text>
                <Text>true: {counter['true']}</Text>
            </View>
        )
    }

    pop() {
        const {cards} = this.props
        const {answeredId} = this.state
        const popedCard = cards.filter(p => answeredId.indexOf(p.id) === -1).pop()
        this.setState({popedCard})
        
        if (!popedCard)
            this.setState({quizFinish:true})
    }

    render() {
        return (
            <View>
                {this.props.cards ? 
                this.formatCard(this.state.popedCard)
                : <Text>You can't answer quizes without cards</Text>}
                {this.showScore()}
            </View>
        )
    }
}

function mapStateToProps({ decks, cards }, { navigation }) {
    const { id } = navigation.state.params

    return {
        cards: decks[id].cards.map(p => cards[p])
    }
}

export default connect(mapStateToProps)(Quiz)