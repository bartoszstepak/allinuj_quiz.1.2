import React from 'react'
import Background from './img/sp.png'
import Logo from './img/allinuj.png'

import './result.scss'

export default class Sport extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        const style = {
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        };

        const logo = {
            backgroundImage: `url(${Logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }

        const buttonColors = {
            backgroundColor: '#255D9A'
        }


        return (
            <div className="reslut_component">
                <div class="pyro">
                    <div class="before"></div>
                    <div class="after"></div>
                </div>
                <div className="logo_photo" style={style}></div>
                <div className="allinuj_logo_absolute" style={logo}></div>
                <div className="final_text green">
                    <p style={{ fontSize: '3em' }}>Kultura: Gratulacje!</p>
                    <span style={{ color: "white", fontSize: "1.5em" }}>
                        Jesteś  typem sportowego świra, oczywiście w samych pozytywach tego słowa znaczeniu! Lubisz wyzwania i z determinacją osiągasz kolejne postawione sobie cele. Dobrze wiesz, że w zdrowym ciele, zdrowy duch. Ważne jest dla Ciebie prowadzenie zdrowego i aktywnego stylu życia! Bieganie, siłownia czy sporty zespołowe nie są Ci obce. Czujesz się w tym jak ryba w wodzie. Jednak sportowiec to nie tylko ciągłe ćwiczenia, ale też czas na odpoczynek czy zabawę.  Z pewnością wtedy lubisz również oglądnąć dobry film, czy sięgnąć po książkę czy spędzić miło czas w towarzystwie! Oby tak dalej!
                    </span><br/><br/><br/>
                    <button className="back_btn" style={buttonColors} onClick={() => this.props.history.push('/')}>Zagraj ponownie</button>
                    <a rel="noopener noreferrer" href="https://www.facebook.com/events/360442518612991" target="_blank">
                        <button className="next_btn">Zobacz rekrutację</button>
                    </a>
                </div>
            </div>
        )
    }
}