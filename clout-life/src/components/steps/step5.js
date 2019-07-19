import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';

class Step5 extends Component {

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
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="make this a dropdown"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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