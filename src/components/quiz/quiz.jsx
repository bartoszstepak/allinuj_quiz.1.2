import React from 'react'

import selectImg from "./select.png"
import selectedImg from "./selected.png"
import Logo from "./think.gif"
import './quiz.css'

export default class Quiz extends React.Component  {
    constructor(props) {
        super(props)

        this.state = {
            width: 0, height: 0,
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
                    questionValue:"CO LUBISZ ROBIĆ W WOLNYM CZASIE?",
                    answers:[
                    {
                        value: "ISC NA MIASTO ZE ZNAJOMYMI", key: 1
                    },
                    {
                        value: "POBIEGAĆ", key: 2
                    },
                    {
                        value: "CHODZIĆ DO TEATRU ", key: 4
                    },
                    {
                        value: "CZYTAĆ KSIĄŻKI", key: 3
                    }]
                },
                {
                    questionValue:"JAKI PROJEKT ZROBIŁ NA TOBIE NAJWIĘKSZE WRAŻENIE? (JEŚLI JESZCZE o NICH NIE SŁYSZAŁEŚ/ŁAŚ TO ZAPRASZAMY NA FP ALL IN UJ NA FB)",
                    answers:[
                        {
                            value: "BOHATERUN", key: 2
                        },
                        {
                            value: "STUDENCKI STAND UP/ DISNEY KARAOKE", key: 1
                        },
                        {
                            value: "GALA CHODŹŻE DO TEATRU", key: 4
                        },
                        {
                            value: "TYDZIEŃ EDUKACJI SEKSUALNEJ", key: 3
                        }
                ]
                },
                {
                    questionValue:"JAKIE OKREŚLENIE PASUJE DO CIEBIE NAJBARDZIEJ?",
                    answers:[
                        {
                            value: "NAUKOWIEC", key: 3
                        },
                        {
                            value: "SPORTOWIEC", key: 2
                        },
                        {
                            value: "IMPREZOWICZ", key: 1
                        },
                        {
                            value: "ARTYSTYCZNA DUSZA", key: 4
                        }
                        
                ]
                },
                {
                    questionValue:"JAKI NAPÓJ WYBIERASZ NA SPOTKANIU ZE ZNAJOMYMI",
                    answers:[
                    
                    {
                        value: "DRINK ", key: 1
                    },
                    {
                        value: "WODA", key: 2
                    },
                    {
                        value: "WINO ", key: 4
                    },
                    {
                        value: "HERBATA", key: 3
                    }
                ]
                },
                {
                    questionValue:"JAKI FILM NAJCHĘTNIEJ BYŚ OBEJRZAŁ/OBEJRZAŁA:",
                    answers:[
                   
                    
                   
                    {
                        value: "ODYSEJA KOSMICZNA", key: 3
                    },
                    {
                        value: "SEX W WIELKIM MIEŚCIE", key: 1
                    },
                    {
                        value: "KOD DA VINCI", key: 4
                    },
                    {
                        value: "ROCKY", key: 2
                    }
                ]
                },
                {
                    questionValue:"Z KIM CHCIAŁABYŚ ZROBIĆ PANEL DYSKUSYJNY? ",
                    answers:[
                    
                    {
                        value: "DAWID PODSIADŁO", key: 1
                    },
                    {
                        value: "JAN KOMASA ", key: 4
                    },
                    {
                        value: "MARTYNA WOJCIECHOWSKA", key: 3
                    },
                    {
                        value: "IGA ŚWIĄTEK", key: 2
                    }
                ]
                },
                {
                    questionValue:"JAKI PRZEDMIOT W SZKOLE BYŁ TWOIM ULUBIONYM?",
                    answers:[
                    {
                        value: "WYCHOWANIE FIZYCZNE", key: 2
                    },
                    {
                        value: "ŻADEN, CHODZIŁEM_AM NA WAGARY", key: 1
                    },
                    {
                        value: "JĘZYK POLSKI", key: 4
                    },
                    {
                        value: "BIOLOGIA ", key: 3
                    }
                ]
                },
                {
                    questionValue:"JAKIE PRZEKĄSKI WYBRAŁBYŚ/WYBRAŁABYŚ NA SPOTKANIE TOWARZYSKIE? ",
                    answers:[
                   
                    {
                        value: "NACHOS ", key: 1
                    },
                    {
                        value: "BRUSCHETTA ", key: 4
                    },
                    {
                        value: "BISZKOPTY", key: 2
                    },
                    {
                        value: "PALUSZKI", key: 3
                    }
                ]
                },
                {
                    questionValue:"TWOJA UCZELNIA MARZEŃ TO:",
                    answers:[
                    {
                        value: "STANFORD", key: 2
                    },
                    {
                        value: "OXFORD ", key: 1
                    },
                    {
                        value: "JUILLIARD ", key: 4
                    },
                    {
                        value: "HARVARD ", key: 3
                    }
                ]
                },
                {
                    questionValue:" W LUDZIACH NAJBARDZIEJ LUBIĘ TO, GDY:",
                    answers:[
                    {
                        value: "MOTYWUJĄ MNIE DO SPĘDZANIA AKTYWNIE CZASU", key: 2
                    },
                    {
                        value: "MOGĘ Z NIMI ROZMAWIAĆ GODZINAMI NA DOWOLNE TEMATY", key: 3
                    },
                    {
                        value: "WSPÓLNIE DZIAŁAMY TWÓRCZO I POBUDZAĆ SWOJĄ KREATYWNOŚĆ", key: 4
                    },
                    {
                        value: "ZAPOMINAM PRZY NICH O ZMARTWIENIACH I DOBRZE SIĘ BAWIĘ", key: 1
                    }
                ]
                },
                {
                    questionValue:"GDYBYM MIAŁ/-A SUPER MOC TO BYŁOBY TO:",
                    answers:[
                        {
                            value: "CZYTANIE W MYŚLACH", key: 3
                        },
                    {
                        value: "NADLUDZKA SIŁA", key: 2
                    },
                    {
                        value: "ZARAŻANIE TAŃCEM I POZYTYWNĄ ENERGIĄ", key: 1
                    },
                    {
                        value: "OŻYWIANIE NARYSOWANYCH PRZEDMIOTÓW ", key: 4
                    }
                ]
                },
                {
                    questionValue:" MOJĄ NAJWIĘKSZĄ ZALETĄ JEST:",
                    answers:[{
                        value: "ENERGICZNOŚĆ", key: 2
                    },
                    {
                        value: "SPONTANICZNOŚĆ", key: 1
                    },
                    {
                        value: "KREATYWNOŚĆ", key: 4
                    },
                    
                    {
                        value: "OTWARTOŚĆ UMYSŁU ", key: 3
                    }]
                }
            ]
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }

    componentWillMount() {
        let answers = [];

        for(let i = 0; i < this.state.questions.length; i++ ) {
            answers.push([false,false,false,false]);
        }
        this.setState({ 
            currentQuestion: this.state.questions[this.state.currentQuestionIndex],
            answers: answers,
            canNext: false,
            result: {
                impreza: 0, // 1
                sport: 0,   // 2
                nauka: 0,   // 3
                kultura: 0  // 4
            }
        })
    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
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
            if(i === this.state.answers.length-1) {
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
                    {this.state.width < 1200 ? "" : <section>
                        <button className="back_btn" onClick={() => this.onClickBackBtn()}>COFNIJ</button>
                        <button className="next_btn" disabled={!this.state.canNext} onClick={() => this.onClickNextBtn()}>DALEJ</button>
                        </section>
                    }
                   
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
                {this.state.width < 1200 ? <section className="buttons_mobile">
                        <button className="next_btn" disabled={!this.state.canNext} onClick={() => this.onClickNextBtn()}>DALEJ</button>
                        <button className="back_btn" onClick={() => this.onClickBackBtn()}>COFNIJ</button>
                        </section> : ""
                    }
            </div>
        )
    }
}