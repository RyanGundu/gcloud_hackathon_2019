import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../css/steps.css'

class Step1 extends Component {

    next = (e) => {
        e.preventDefault();
        this.props.dispatch({type: "UP_STEP"})
        this.props.nextStep()

    }

    render () {
        return (
            <div id="step1">
                <div>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="email" className="form-control" placeholder="First Name"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name"/>
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="text" className="form-control" placeholder="Age"/>
                    </div>
                    <button onClick={this.next} className="btn btn-primary btn-next">Next</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {step: state.step}
}

export default connect(mapStateToProps)(Step1);