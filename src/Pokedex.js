import React, { Component } from 'react'
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render(){
        return (
            <div>
                {this.props.isWinner === true ? <h1 className="Pokedex-win">Winner!</h1> : <h1 className="Pokedex-lose">Loser!</h1>}
                <div className="Pokedex-container">
                    {this.props.data.map(p => <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>)}
                </div>
            </div>
        )
    }
}

export default Pokedex;