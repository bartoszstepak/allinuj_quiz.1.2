import React from 'react'
import { Link } from 'react-router-dom';


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
              
            </div>
        )
    }
}