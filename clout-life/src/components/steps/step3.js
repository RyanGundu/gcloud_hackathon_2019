import React, {Component} from 'react'
import {connect} from 'react-redux'

class Step3 extends Component {

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
            <div id="step3">
                <div>
                    <div className="form-group">
                        <label>What is your ideal cost of living?</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Monthly Cost"/>
                        <small id="emailHelp" className="form-text text-muted">USA average: $1,400</small>
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

export default connect(mapStateToProps)(Step3);