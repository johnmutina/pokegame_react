import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render(){
        let imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
        function imgId(id){
            if(id < 10){
                return `00${id}`
            } else if (id < 100) {
                return `0${id}`;
            } else {
                return id;
            } 
        };
        return (
            <div className="Pokecard-container">
                <div className="Pokecard-item">
                    <h2 className="Pokecard-name">{this.props.name}</h2>
                    <img className="Pokecard-img" src={`${imgUrl}${imgId(this.props.id)}.png`} alt={this.props.name}></img>
                    <p>Type: {this.props.type}</p>
                    <p>EXP: {this.props.exp}</p>
                </div>
            </div>
        )
    }
}

export default Pokecard;