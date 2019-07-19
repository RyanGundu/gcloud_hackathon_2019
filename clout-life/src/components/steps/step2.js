import React, {Component} from 'react'
import {connect} from 'react-redux'

class Step2 extends Component {

    next = (e) => {
        e.preventDefault();
        this.props.dispatch({type: "UP_STEP"})
        this.props.nextStep()

    }

    back = (e) => {
        e.preventDefault();
        this.props.dispatch({type: "DOWN_STEP"})
        this.props.goToStep(this.props.step)
    }

    render () {
        return (
            <div id="step2">
                <div>
                    <div className="form-group">
                    <label>Select your industry:</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Education</option>
                        <option>IT</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    </div>
                    <button onClick={this.back} className="btn btn-primary">Back</button>
                    <button onClick={this.next} className="btn btn-primary btn-next">Next</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {step: state.step}
}

export default connect(mapStateToProps)(Step2);