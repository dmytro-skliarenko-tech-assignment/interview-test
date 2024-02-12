import {useEffect, useState} from "react";
import './pokemons.css'
import {Pokemon} from "./Pokemon";

const calculateVersion = () => {
    let result = 0;
    let i = 0;
    while (i < 100000000) {
        result += Math.sqrt(i) + Math.random();
        i++;
    }
    return result;
}

/*
    Endpoint information is here https://pokeapi.co/docs/v2#pokemon
 */

export const Pokemons = () => {
    let version = useState(calculateVersion());
    let pokState = useState(undefined);
    let selectedPokemon: any = (pokState[0] as any)?.results?.[0]?.name

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon').then((a) => a.json()).then((b) => pokState[1](b));
    }, []);

    if (pokState === undefined) {
        return null;
    }

    const pokemons = (pokState[0] as any)?.results.map((p: any) => {
        return <Pokemon name={p.name} selectedName={selectedPokemon} onSelect={(name: any) => (selectedPokemon = name)}/>
    })

    return (
        <div className="container">
            <h1>Pokemons {version[0]}</h1>
            <div className="pokemons">
                {
                    pokemons
                }
            </div>
        </div>
    )
}