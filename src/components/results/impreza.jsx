import React from 'react'
import Background from './img/im.png'
import Logo from './img/allinuj.png'

import './result.scss'

export default class Impreza extends React.Component {
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
            backgroundColor: '#883E95'
        }


        return (
            <div className="reslut_component">
                <div class="pyro">
                    <div class="before"></div>
                    <div class="after"></div>
                </div>
                <div className="logo_photo" style={style}></div>
                <div className="allinuj_logo_absolute" style={logo}></div>
                <div className="final_text">
                    <p style={{ marginLeft: '-10px', fontSize: '3em' }}>Impreza: Gratulacje!</p>
                    <span style={{ color: "white", fontSize: "1.5em" }}>
                        Jesteś typem imprezowicza, dlatego idealnym filarem dla Ciebie jest Impreza! Jesteś otwartą osobą, która zaraża ludzi swoją pozytywną energią i uśmiechem. Potrafisz sprawić, że ludzie czują się przy tobie świetnie! Rozkręcasz każdą większą imprezę czy skromną domówkę. Gdy wchodzisz na balety każdy wie, że impreza zaczyna się właśnie teraz! Nie straszne Ci poranne powroty do domu ani spontaniczne wyjście na miasto. Lubisz pyszne drinki i smaczne przekąski!
                    </span><br /><br /><br />
                    <button className="back_btn" style={buttonColors} onClick={() => this.props.history.push('/')}>Zagraj ponownie</button>
                    <a rel="noopener noreferrer" href="https://www.facebook.com/events/360442518612991" target="_blank">
                        <button className="next_btn">Zobacz rekrutację</button>
                    </a>
                </div>
            </div>
        )
    }
}