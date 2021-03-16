import React from 'react'
import Background from './img/ku.png'
import Logo from './img/allinuj.png'
import Logo2 from './img/k.png'

import './result.scss'

export default class kultura extends React.Component {
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

        const logo = {
            backgroundImage: `url(${Logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }

        const buttonColors = {
            backgroundColor: '#9C815B'
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
                    <p style={{ fontSize: '3em' }}>Kultura: Gratulacje!</p>
                    {this.state.width < 1200 ?  <div  style={logo2}></div> : ""}
                    <span style={{ color: "white", fontSize: "1.5em" }}>
                    Jesteś człowiekiem kultury! W piątki chodzisz do kina, a wino Ci najbardziej smakuje na wernisażach, to dwa z wielu powodów, dla których filar Kultura powinien na stałe zagościć w Twoim życiu. Masz zapał do poznawania krakowskich artystów, a muzyka jest lekiem na każde Twoje zmartwienie. Urokliwe spacery i odkrywanie Krakowskich zakamarków nie jest Ci obce. Moda? Jasne! Cenisz sobie elegancję i styl, jednak nie zamykasz się w jednym trendzie.                    
                    </span><br /><br/><br/>
                    <button className="back_btn" style={buttonColors} onClick={() => this.props.history.push('/')}>Zagraj ponownie</button>
                    <a rel="noopener noreferrer" href="https://www.facebook.com/events/238086861383992" target="_blank">
                        <button className="next_btn">Zobacz rekrutację</button>
                    </a>
                </div>
            </div>
        )
    }
}
