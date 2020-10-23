import React from 'react'
import Background from './img/na.png'
import Logo from './img/allinuj.png'
import Logo2 from './img/n.png'

import './result.scss'

export default class Nauka extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            width: 0, height: 0,

        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

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
            backgroundColor: '#921C1C'
        }

        const logo2 = {
            backgroundImage: `url(${Logo2})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '300px',
            width: '300px',
            margin: 'auto',
            marginBottom: '20px'
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
                    <p style={{ marginLeft: '-10px' }}>Nauka: Gratulacje!</p>
                    {this.state.width < 1200 ?  <div  style={logo2}></div> : ""}
                    <span style={{ color: "white", fontSize: "1.5em" }}>
                    Jesteś człowiekiem wiedzy i filar nauka czeka na Ciebie! Masz otwarty umysł, a swoimi spostrzeżeniami potrafisz zainteresować każdego. Uwielbiasz poznawać świat i ludzi, każda nowość jest dla Ciebie intrygującym materiałem do analizy i dyskusji. Tematy tabu? Nie istnieją! Twoją misją jest uświadamianie ludzi i mówienie głośno o tym, co może kontrowersyjne, ale potrzebne! Prowadzenie spotkań z inspirującymi naukowcami czy podróżnikami to Twoje marzenie. Ciekawość świata pragnie zaspokojenia, a Twoja wiedza chcę się sobą dzielić!                     
                    </span> <br/><br/><br/>
                    <button className="back_btn" style={buttonColors} onClick={() => this.props.history.push('/')}>Zagraj ponownie</button>
                    <a rel="noopener noreferrer" href="https://www.facebook.com/events/360442518612991" target="_blank">
                        <button className="next_btn">Zobacz rekrutację</button>
                    </a>
                </div>
            </div>
        )
    }
}