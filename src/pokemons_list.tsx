import {useEffect, useMemo, useState} from "react";
import './pokemons.css'
import {Pokemon} from "./Pokemon";
import {calculateVersion} from "./Utilities";

/*
    Endpoint information is here https://pokeapi.co/docs/v2#pokemon
 */

export const Pokemons_list = () => {
    let version = useState(calculateVersion());
    let pokState = useState(undefined);
    let selectedPokemon: any = (pokState[0] as any)?.results?.[0]

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon').then((a) => a.json()).then((b) => pokState[1](b));
    }, []);


    const pokemons = useMemo(() => (pokState[0] as any)?.results.map((p: any) => {
        return <Pokemon p={p} selectedPokemon={selectedPokemon} onSelect={(pokemon: any) => {
            selectedPokemon = pokemon;
        }}/>
    }), [pokState[0]]);

    const pokemonInfo = useMemo(() => <div className="pokemonInfo">
        <div className="photos">
            <img className="photo" src={selectedPokemon?.sprites?.front_default}/>
            <img className="photo" src={selectedPokemon?.sprites?.back_default}/>
        </div>

        <div className="info">
            <p>{selectedPokemon?.name}</p>
            <p>Height: {selectedPokemon?.height}</p>
            <p>Weight: {selectedPokemon?.weight}</p>
            <p>Abilities: {selectedPokemon?.abilities?.map((a: any) => a.ability.name).join(', ')}</p>
        </div>
    </div>,[]);

    if (pokState === undefined) {
        return null;
    }

    return (
        <div className="container">
            <p className={"Header"}>
                <h1>Pokemons {version[0]}</h1>
                <button className="update_version-button" onClick={() => version[1](calculateVersion())}>Update
                    Version
                </button>
            </p>
            <div className="content">
                <div className="list">
                    <div className="pokemons">
                        {
                            pokemons
                        }
                    </div>
                </div>

                {pokemonInfo}
            </div>
        </div>
    )
}