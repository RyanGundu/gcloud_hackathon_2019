import React, {Component} from 'react'
import '../css/landing.css'

class Landing extends Component {

    start = (e) => {
        e.preventDefault();
        this.props.history.push('/data-collection')
    }

    render () {
        return (
            <div id="landing">
                <div className="main-box">
                    <h1 className="title">FIND YOUR NEXT LOCATION</h1>
                    <button onClick={this.start} type="button" className="start-btn btn-lg btn btn-outline-light">Begin your journey</button>
                </div>
            </div>
        )
    }
}

export default Landing;