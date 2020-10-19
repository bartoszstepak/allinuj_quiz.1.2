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

        return (
            <div className="reslut_component">
              <div className="logo_photo" style={style}></div>
              <div className="allinuj_logo_absolute" style={logo}></div>
                <div className="final_text green">
                    <p>qweqweqweqwe</p>
                    <button className="back_btn">COFNIJ</button>
                    <button className="next_btn">DALEJ</button>
                </div>
            </div>
        )
    }
}