import React from 'react'

import selectImg from "./select.png"
import selectedImg from "./selected.png"

import './quiz.css'

export default class Quiz extends React.Component  {
    constructor(props) {
        super(props)

        this.state = {
            currentQuestionIndex: 0,
            currentQuestion: {},
            currentAnswer: [false,false,false,false], //[a,b,c,d]
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
        let answers = [];
        for(let i = 0; i < this.state.questions.length; i++ ) {
            answers.push([false,false,false,false]);
        }
        this.setState({ 
            currentQuestion: this.state.questions[this.state.currentQuestionIndex],
            answers: answers
        })
    }

    onAnswerSelect(selectedAnswerIndex) {
        let answer = [false, false, false, false];
        answer[selectedAnswerIndex]  = true;
        this.setState({ currentAnswer: answer});
    }

    onClickBackBtn() {
        if(this.state.currentQuestionIndex === 0) {
            this.props.history.push("/");
        }
        this.getPreviousQuestion()
    }
    
    onClickNextBtn() {
        if (this.checkIfReslutReady()) {
            this.goToReslutPrezentation()
        } 
        else {
            this.saveAnswer();
            this.getNextQuestion();
        }
    }

    getPreviousQuestion() {
        if(this.state.currentQuestionIndex - 1 >= 0) {
            this.getQuestion(this.state.currentQuestionIndex - 1)
        }
    }

    getNextQuestion() {
        if(this.state.currentQuestionIndex + 1 < this.state.questions.length) {
            this.getQuestion(this.state.currentQuestionIndex + 1)
        }
    }

    getQuestion(index) {
        this.setState({ 
            currentQuestion: this.state.questions[index],
            currentQuestionIndex: index,
            currentAnswer: this.state.answers[index]
        });
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
            this.props.history.push("/result/impreza");
        }
    }

    saveAnswer() {
        let answers = this.state.answers;
        answers[this.state.currentQuestionIndex] = this.state.currentAnswer;
        this.setState({
            answers: answers,
        });  
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
                <li>
                    {this.state.currentAnswer[0] ? 
                        <img src={selectedImg} onClick={() => this.onAnswerSelect(0)} alt=""  width="50" height="45"/> :
                        <img src={selectImg} onClick={() => this.onAnswerSelect(0)} alt=""  width="50" height="45"/>}
                    {this.state.currentQuestion.a.value}
                 </li>
                <li>
                    {this.state.currentAnswer[1] ? 
                        <img src={selectedImg} onClick={() => this.onAnswerSelect(1)} alt=""  width="50" height="45"/> :
                        <img src={selectImg} onClick={() => this.onAnswerSelect(1)} alt=""  width="50" height="45"/>}
                    {this.state.currentQuestion.b.value}
                </li>
                <li>
                    {this.state.currentAnswer[2] ? 
                        <img src={selectedImg} onClick={() => this.onAnswerSelect(2)} alt=""  width="50" height="45"/> :
                        <img src={selectImg} onClick={() => this.onAnswerSelect(2)} alt=""  width="50" height="45"/>}
                    {this.state.currentQuestion.c.value}
                    </li>
                <li>
                    {this.state.currentAnswer[3] ? 
                        <img src={selectedImg} onClick={() => this.onAnswerSelect(3)} alt=""  width="50" height="45"/> :
                        <img src={selectImg} onClick={() => this.onAnswerSelect(3)} alt=""  width="50" height="45"/>}
                    {this.state.currentQuestion.d.value}
                    </li>
                </div>
            </div>
        )
    }
}