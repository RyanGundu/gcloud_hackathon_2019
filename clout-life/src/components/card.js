import React, {Component} from 'react';
import '../css/card.css'

class Card extends Component {

    render () {
        return (
            <div id="card">
                <div className="card">
                <img className="card-img-top" src={require(`../images/img${this.props.index}.jpg`)} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.place}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Rank #{this.props.rank}</li>
                    <li className="list-group-item">Density: {this.props.popDensity}</li>
                </ul>
                {/* <div className="card-body">
                    <a href="#" className="card-link">More</a>
                </div> */}
                </div>
            </div>
        )
    }
}


export default Card;