import React from 'react'


import './quiz.css'

export default class Quiz extends React.Component  {
    constructor(props) {
        super(props)

        this.state = {
            currentQuestionIndex: 0,
            currentQuestion: {},
            result: 0,
            answers: [],
            questions: [
                {
                    questionValue:"JAKI JEST WEDŁUG CIEBIE NAJLESZY FILAR?",
                    a: {
                        value: "Impreza", key: "1"
                    },
                    b: {
                        value: "Impreza", key: "1"
                    },
                    c: {
                        value: "Impreza", key: "1"
                    },
                    d: {
                        value: "Impreza", key: "1"
                    },
                },
                {
                    questionValue:"DLACZEGO UWAŻASZ ŻE IMPREZA?",
                    a: {
                        value: "Odpowiedzi musza być krutkie", key: "1"
                    },
                    b: {
                        value: "Pytania też", key: "1"
                    },
                    c: {
                        value: "Ludzie nie lubią dużo czytac", key: "1"
                    },
                    d: {
                        value: "i ma być śmiesznie", key: "1"
                    },
                }
            ]
        }
    }

    componentWillMount() {
        this.setState({ currentQuestion: this.state.questions[this.state.currentQuestionIndex]})
    }

    getNextQuestion() {
        if(this.state.currentQuestionIndex + 1 <= this.state.questions.length) {
            this.getQuestion(this.state.currentQuestionIndex + 1)
        }
    }

    getPreviousQuestion() {
        if(this.state.currentQuestionIndex + 1 < this.state.questions.length) {
            this.getQuestion(this.state.currentQuestionIndex - 1)
        }
    }

    getQuestion(index) {
        this.setState({ 
            currentQuestion: this.state.questions[index],
            currentQuestionIndex: index
        });
    }

    onClickBackBtn() {
        if(this.state.currentQuestionIndex === 0) {
            this.props.history.push("/quiz");
        }
        this.getPreviousQuestion()
    }
    
    onClickNextBtn() {
        if (this.checkIfReslutReady()) {
            this.goToReslutPrezentation()
        } 
        else {
            this.getNextQuestion();
        }
    }

    checkIfReslutReady() {
        return this.state.currentQuestionIndex === this.state.questions.length-1;
    }

    goToReslutPrezentation() {
        let result = this.calculateResult()
        if (result > 0) {
            this.redirectToResultSite(result);
        }
    }

    calculateResult() {
        return 1;    
    }

    redirectToResultSite(result) {
        if(result === 1) {
            debugger
            this.props.history.push("/result/impreza");
        }
    }
    


    render() {
        return (
            <div className="quiz_component">
               <div className="quiz_question green">
                    <p>{this.state.currentQuestion.questionValue}</p>
                    <button className="back_btn" onClick={() => this.onClickBackBtn()}>COFNIJ</button>
                    <button className="next_btn" onClick={() => this.onClickNextBtn()}>DALEJ</button>
                </div>
                <div className="quiz_answers">
                <span>{this.state.currentQuestion.a.value}</span>
                <span>{this.state.currentQuestion.b.value}</span>
                <span>{this.state.currentQuestion.c.value}</span>
                <span>{this.state.currentQuestion.d.value}</span>
                </div>
            </div>
        )
    }
}