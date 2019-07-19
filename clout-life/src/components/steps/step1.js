import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../css/steps.css'

class Step1 extends Component {

    constructor(props) {
        super(props)
        this.props.dispatch({type: "RESET_ALL", value: 0})
    }

    handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                return this.props.dispatch({type: "F_NAME", value: e.target.value})
            case "lname":
                return this.props.dispatch({type: "L_NAME", value: e.target.value})
            case "age":
                return this.props.dispatch({type: "AGE", value: e.target.value})
            default:
                return;

        }
    }

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
                        <input onChange={e => this.handleChange(e)} type="text" name="name" className="form-control" placeholder="First Name"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={e => this.handleChange(e)} type="text" name="lname" className="form-control" placeholder="Last Name"/>
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input onChange={e => this.handleChange(e)} type="text" name="age" className="form-control" placeholder="Age"/>
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