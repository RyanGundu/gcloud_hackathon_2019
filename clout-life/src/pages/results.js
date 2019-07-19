import React, {Component} from 'react'
import axios from 'axios';
import {connect} from 'react-redux'
import Card from '../components/card'
import Loader from '../components/loader'

import '../css/results.css'
class Results extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            results: [1,2,3,1,1,1,1,1],
            images: [1,2,3,4,5,6,7]
        }

        let weather = 'NA'
        switch(this.props.weather) {
            case "Warm":
                weather = "HI"
                break;
            case "Average":
                weather = "HI"
                break;
            case "Low":
                weather = "LO"
                break;
            default:
                weather = "NA"
        }

        let col = this.props.costOfLiving
        if (isNaN(this.props.costOfLiving)) {
            col = 1400
        }

        let industryMap = {
            "Oil, Gas and Mining": "OGM",
            "Manufacturing": "Manufacturing",
            "Agriculture":"Agriculture",
            "Education": "Education",
            "Government": "Government",
            "Information Technology": "Information",
            "Retail": "Retail",
            "Real estate": "Realestate",
            "Hospitality": "Hospitality",
            "Healthcare": "Healthcare",
            "Entertainment": "Entertainment",
            "Construction": "Construction"
        }

        let industry = industryMap[this.props.industry]
        console.log(industry);

        let reqStr = `https://us-central1-protean-booth-247114.cloudfunctions.net/testFunc?industry=${industry}&col=${col}&weather=${weather}`

        axios.get(reqStr)
        .then((response) => {
            console.log(response)
            this.setState({results: response.data});
        })
        .catch(()=> {
            this.setState({results: []});
        })
        .finally(()=> {
            this.setState({isLoading: false});
        })

    }

    render () {

        return (
            <div id="results">
                <button onClick={()=>this.props.history.push('/data-collection')} type="button" className="back-btn  btn btn-outline-light">Back to questions</button>
                <h1 className="title text-center">Here are the top places for you {this.props.fName}</h1>
                <div className="result-box">
                    
                    <div className="row">
                        { !this.state.isLoading ? this.state.results.map((value, index) => {
                            return <Card 
                            key={index}
                            rank={index+1}
                            place={value[0]}
                            popDensity= {value[2]}
                            index={(index%7)+1}
                            />
                        })
                        : <Loader/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fName: state.fName,
        lName: state.lName,
        industry: state.industry,
        costOfLiving: state.costOfLiving,
        weather: state.weather,
        age: state.age,
    }
}

export default connect(mapStateToProps)(Results);