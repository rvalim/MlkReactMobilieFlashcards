import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert, Text, View, Button, TextInput } from 'react-native'

const initialState = {
    answeredId: [],
    answers: {},
    popedCard: null,
    quizFinish: false
}

class Quiz extends Component {
    constructor(props) {
        super(props)

        this.state = initialState
    }

    componentDidMount() {
        this.pop()
    }

    reset() {
        this.setState(
            initialState, 
            () => this.pop())
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

    getPaging(){
        return `${this.state.answeredId.length + 1} / ${this.props.cards.length}`
    }

    formatCard(card) {
        if (!card) return
        return (
            <View key={card.id}>
                <Text>{this.getPaging()}</Text>
                <Text>{card.question}</Text>
                <Button
                    title="Answer"
                    onPress={() => Alert.alert('Answer', card.answer)} />
                <Button
                    title="Correct"
                    onPress={() => this.handleAnswer(card.id, true)} />
                <Button
                    title="Incorrect"
                    onPress={() => this.handleAnswer(card.id, false)} />
            </View>
        )
    }

    showScore() {
        const { answers, quizFinish } = this.state
        if (!quizFinish) return

        const {navigation} = this.props
        const counter = {}
        Object.keys(answers).forEach(p => counter[answers[p]] = (counter[answers[p]] || 0) + 1)

        return (
            <View>
                <Text>Questions marked as incorret: {counter['false']}</Text>
                <Text>Questions marked as correct: {counter['true']}</Text>
                <Button
                    title="Restart Quiz"
                    onPress={() => this.reset()} />
                <Button
                    title="Back to Deck"
                    onPress={() => navigation.pop()} />
                
            </View>
        )
    }

    pop() {
        const { cards } = this.props
        const { answeredId } = this.state
        const popedCard = cards.filter(p => answeredId.indexOf(p.id) === -1).pop()
        this.setState({ popedCard })

        if (!popedCard)
            this.setState({ quizFinish: true })
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