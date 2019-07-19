import React, {Component} from 'react'
import {connect} from 'react-redux'

class Step2 extends Component {

    handleChange = (e) => {
        console.log(e.target.value)
        this.props.dispatch({type: "INDUSTRY", value: e.target.value})
    }

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
                    <select onChange={e => this.handleChange(e)} className="form-control" id="exampleFormControlSelect1">
                        <option>Oil, Gas and Mining</option>
                        <option>Manufacturing</option>
                        <option>Agriculture</option>
                        <option>Education</option>
                        <option>Government</option>
                        <option>Information Technology</option>
                        <option>Retail</option>
                        <option>Real estate</option>
                        <option>Hospitality</option>
                        <option>Healthcare</option>
                        <option>Entertainment</option>
                        <option>Construction</option>
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