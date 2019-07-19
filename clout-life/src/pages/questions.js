import React, {Component} from 'react';
import StepWizard from 'react-step-wizard';
import StepBar from '../components/stepBar'
import Step1 from '../components/steps/step1'
import Step2 from '../components/steps/step2'
import Step3 from '../components/steps/step3'
import Step4 from '../components/steps/step4'
import Step5 from '../components/steps/step5'
import '../css/questions.css'

class Questions extends Component {

    render () {
        return (
            <div id="questions">
                <StepBar/>
                <div className="q-box">
                    <StepWizard>
                        <Step1/>
                        <Step2/>
                        <Step3/>
                        <Step4/>
                        <Step5/>
                    </StepWizard>
                </div>
            </div>
        )
    }
}

export default Questions;