import React from 'react'

import selectImg from "./select.png"
import selectedImg from "./selected.png"
import Logo from "./think.gif"
import './quiz.css'

export default class Quiz extends React.Component  {
    constructor(props) {
        super(props)

        this.state = {
            canNext: false,
            currentQuestionIndex: 0,
            currentQuestion: {},
            currentAnswer: [false,false,false,false], //[a,b,c,d]
            result: {
                impreza: 0, // 1
                sport: 0,   // 2
                nauka: 0,   // 3
                kultura: 0  // 4
            },
            answers: [],
            answerTypes: {
                a: 0, b: 1, c:2, d:3
            },
            questions: [
                {
                    questionValue:"JAKI JEST WEDŁUG CIEBIE NAJLESZY FILAR?",
                    answers:[{
                        value: "sport", key: 2
                    },
                    {
                        value: "impreza", key: 1
                    },
                    {
                        value: "kultura", key: 4
                    },
                    {
                        value: "nauka", key: 3
                    }]
                },
                {
                    questionValue:"JAKI JEST WEDŁUG CIEBIE SUPER EKSTRA NAJLESZY FILAR?",
                    answers:[{
                        value: "sport", key: 2
                    },
                    {
                        value: "impreza", key: 1
                    },
                    {
                        value: "kultura", key: 4
                    },
                    {
                        value: "nauka", key: 3
                    }]
                },
                {
                    questionValue:"DLACZEGO  UWAŻASZ ŻE IMPREZA?",
                    answers:[{
                        value: "sport", key: 2
                    },
                    {
                        value: "kultura", key: 4
                    },
                    {
                        value: "impreza", key: 1
                    },
                    {
                        value: "nauka", key: 3
                    }]
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
            answers: answers,
            result: {
                impreza: 0, // 1
                sport: 0,   // 2
                nauka: 0,   // 3
                kultura: 0  // 4
            }
        })
    }

    onAnswerSelect(selectedAnswerIndex) {
        let answer = [false, false, false, false];
        answer[selectedAnswerIndex]  = true;
        this.setState({ currentAnswer: answer, canNext: true});
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
            this.setState({canNext: false})
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
        let arr = [result.impreza, result.sport, result.nauka, result.kultura];
        arr.sort();
        let max = arr[arr.length-1];
        if (max === result.impreza) {
            this.redirectToResultSite(1);
        }
        else if (max === result.sport) {
            this.redirectToResultSite(2);
        }
        else if (max === result.nauka) {
            this.redirectToResultSite(3);
        }
        else if (max === result.kultura) {
            this.redirectToResultSite(4);
        }
    }

    calculateResult() {
        let result = this.state.result
        for (let i = 0; i < this.state.answers.length; i++) {
            let answerBoolArray = this.state.answers[i];
            if(i == this.state.answers.length-1) {
                answerBoolArray = this.state.currentAnswer;
            }
            let answerPosistion = -1
            for(let j = 0; j < 4; j++) {
                if (answerBoolArray[j] === true) {
                    answerPosistion = j;
                    break;
                }
            }
            let question = this.state.questions[i];
            if (answerPosistion>=0) {
                let answer = question.answers[answerPosistion];
                if (answer.key === 1) {
                    result.impreza += 1;
                }
                else if (answer.key === 2) {
                    result.sport += 1;
                }
                else if (answer.key === 3) {
                    result.nauka += 1;
                }
                else if (answer.key === 4) {
                    result.kultura += 1;
                }
            }
        }
        this.setState({result: result})
        return result
    }

    redirectToResultSite(redirectSiteNumber) {
        if(redirectSiteNumber === 1) {
            this.props.history.push("/result/impreza");
        } else if(redirectSiteNumber === 2) {
            this.props.history.push("/result/sport");
        }else if(redirectSiteNumber === 3) {
            this.props.history.push("/result/nauka");
        }else if(redirectSiteNumber === 4) {
            this.props.history.push("/result/kultura");
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
        const logo  = {
            backgroundImage: `url(${Logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }

        return (
            <div className="quiz_component">
               <div className="quiz_question green">
                    <p>{this.state.currentQuestion.questionValue}</p>
                    <button className="back_btn" onClick={() => this.onClickBackBtn()}>COFNIJ</button>
                    <button className="next_btn" disabled={!this.state.canNext} onClick={() => this.onClickNextBtn()}>DALEJ</button>
                </div>
                <div className="think" style={logo}></div>
                <div className="quiz_answers">
                <li>
                    {this.state.currentAnswer[0] ? 
                        <img src={selectedImg} onClick={() => this.onAnswerSelect(0)} alt=""  width="50" height="45"/> :
                        <img src={selectImg} onClick={() => this.onAnswerSelect(0)} alt=""  width="50" height="45"/>}
                    {this.state.currentQuestion.answers[0].value}
                 </li>
                <li>
                    {this.state.currentAnswer[1] ? 
                        <img src={selectedImg} onClick={() => this.onAnswerSelect(1)} alt=""  width="50" height="45"/> :
                        <img src={selectImg} onClick={() => this.onAnswerSelect(1)} alt=""  width="50" height="45"/>}
                    {this.state.currentQuestion.answers[1].value}
                </li>
                <li>
                    {this.state.currentAnswer[2] ? 
                        <img src={selectedImg} onClick={() => this.onAnswerSelect(2)} alt=""  width="50" height="45"/> :
                        <img src={selectImg} onClick={() => this.onAnswerSelect(2)} alt=""  width="50" height="45"/>}
                    {this.state.currentQuestion.answers[2].value}
                    </li>
                <li>
                    {this.state.currentAnswer[3] ? 
                        <img src={selectedImg} onClick={() => this.onAnswerSelect(3)} alt=""  width="50" height="45"/> :
                        <img src={selectImg} onClick={() => this.onAnswerSelect(3)} alt=""  width="50" height="45"/>}
                    {this.state.currentQuestion.answers[3].value}
                    </li>
                </div>
            </div>
        )
    }
}