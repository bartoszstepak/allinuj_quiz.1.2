import React from 'react'


import './dashboard.css'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    onClickPlayButton() {
        this.props.history.push("/quiz");    
    }
    


    render() {
        return (
            <div className="dashboard_component">
               <div className="dashboard_title">
                   <span>SPARWDŹ KTÓRY <br/><span className="green">FILAR</span> JEST DLA <span className="green">CIEBIE</span></span>
               </div>
               <div className="dashboard_buttons">
                    <a rel="noopener noreferrer" href="https://www.facebook.com/events/360442518612991" target="_blank">
                        <button className="link_button">IDŹ DO REKRUTACJI</button>
                    </a>
                    <button className="play_button" onClick={() => this.onClickPlayButton()}>GRAJ</button>
               </div>
            </div>
        )
    }
}