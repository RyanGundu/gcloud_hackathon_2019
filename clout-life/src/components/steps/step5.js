import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';

class Step5 extends Component {

    handleChange = (e) => {
        let input = e.target.value
        if (input === 'Average') {
            input = 'NA'
        }
        this.props.dispatch({type: "P_DENSITY", value: input})
    }

    next = (e) => {
        e.preventDefault();
        this.props.history.push('/results')
    }

    back = (e) => {
        e.preventDefault();
        this.props.dispatch({type: "DOWN_STEP"})
        this.props.goToStep(this.props.step)
    }

    render () {
        return (
            <div id="step5">
                <div>
                    <div className="form-group">
                        <label>Population density preference:</label>
                        <select onChange={e => this.handleChange(e)} className="form-control" id="exampleFormControlSelect1">
                            <option>Average</option>
                            <option>High density</option>
                            <option>Low density</option>
                        </select>
                        {/* <small className="form-text text-muted">Give reference to new york</small> */}
                    </div>
                    <button onClick={this.back} className="btn btn-primary">Back</button>
                    <button onClick={this.next} className="btn btn-primary btn-next">Done</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {step: state.step}
}

export default withRouter(connect(mapStateToProps)(Step5));