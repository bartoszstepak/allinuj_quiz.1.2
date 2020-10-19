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

        const logo  = {
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
                    <p>qweqweqweqwe</p>
                    <button className="back_btn" style={buttonColors} onClick={() => this.props.history.push('/')}>Zagraj ponownie</button>
                    <a rel="noopener noreferrer" href="https://www.facebook.com/events/360442518612991" target="_blank">
                        <button className="link_button">Zobacz rekrutację</button>
                    </a>                </div>
            </div>
        )
    }
}