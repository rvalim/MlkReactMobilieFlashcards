import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert, Text, View, Button } from 'react-native'
import * as styles from '../utils/style'

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
            <View>
                <Text>{this.getPaging()}</Text>
                <Text style={styles.css.title}>{card.question}</Text>
                <Button
                    style={styles.btn}
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
                <Text>Questions marked as incorret: {counter['false'] || 0}</Text>
                <Text>Questions marked as correct: {counter['true'] || 0}</Text>
                <Button
                    title="Restart Quiz"
                    onPress={() => this.reset()} />
                <Button
                    title="Back to Deck"
                    onPress={() => navigation.pop()} />
                
            </View>
        )
    }

    hasCards(){
        return this.props.cards.length > 0
    }

    pop() {
        if (!this.hasCards()) return 

        const { cards } = this.props
        const { answeredId } = this.state
        const popedCard = cards.filter(p => answeredId.indexOf(p.id) === -1).pop()
        this.setState({ popedCard })

        if (!popedCard)
            this.setState({ quizFinish: true })
    }

    render() {
        return (
            <View style={styles.css.container}>
                <View style={[{flex:1},styles.css.row]}> 
                {this.hasCards() ?
                    this.formatCard(this.state.popedCard): 
                    <Text style={styles.css.noDataText}>You can't answer quizes without cards</Text>
                }
                {this.showScore()}
                </View>
            </View>
        )
    }
}

function mapStateToProps({ decks }, { navigation }) {
    const { id } = navigation.state.params

    return {
        cards: decks[id].questions
    }
}

export default connect(mapStateToProps)(Quiz)