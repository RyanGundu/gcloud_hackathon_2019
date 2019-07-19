import React, {Component} from 'react';
import Stepper from 'react-stepper-horizontal';
import {connect} from 'react-redux'
import '../css/stepBar.css'

class StepBar extends Component {

    render () {
        return (
            <div id="step-bar">
                <Stepper steps={ 
                    [{title: 'Step One'}, 
                    {title: 'Step Two'},
                    {title: 'Step Three'}, 
                    {title: 'Step Four'},
                    {title: 'Step Five'}] } 
                    activeStep={this.props.step}
                    defaultBarColor="white"
                    completeBarColor="#5096FF"
                    circleFontSize={0}
                    defaultTitleColor="white"
                    completeTitleColor="#5096FF"
                    activeTitleColor="green"
                    completeBorderColor="green"
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {step: state.step}
}

export default connect(mapStateToProps)(StepBar);