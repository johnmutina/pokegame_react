import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css';

let pokemon = [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
]

class Pokegame extends Component {
    render(){
        let pokedex1 = [];
        let pokedex2 = [...pokemon];
        let pokedexScore = function (arr){
            let accumulator = 0;
            for(let i = 0; i < arr.length; i ++) {
                accumulator += arr[i].base_experience;
            }
            return accumulator;
        }
        while(pokedex1.length < pokedex2.length){
            let randPick = Math.floor(Math.random() * pokedex2.length);
            pokedex1.push(pokedex2[randPick]);
            pokedex2.splice(randPick, 1);
        }
        return (
            <div>
                <h1 className="Pokegame-title">Pokegame</h1>
                <Pokedex data={pokedex1} score={pokedexScore(pokedex1)} isWinner={(pokedexScore(pokedex1) > pokedexScore(pokedex2)) ? true : false}/>
                <Pokedex data={pokedex2} score={pokedexScore(pokedex2)} isWinner={(pokedexScore(pokedex2) > pokedexScore(pokedex1)) ? true : false}/>
            </div>
        )
    }
};

export default Pokegame;
