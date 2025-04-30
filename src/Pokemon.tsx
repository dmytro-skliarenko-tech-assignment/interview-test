import {FC, useEffect, useState} from "react";

export const Pokemon: FC<any> = (props) => {
    const [pokemon, setPokemonState] = useState<any>(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.p.name}`).then((a) => a.json()).then((b) => setPokemonState(b));
    }, []);

    return (
        <div className="pokemon">
            <button className={`pokemon-button ${props.selectedPokemon?.name === pokemon?.name && 'pokemon-selected'}`} onClick={() => props.onSelect(pokemon)}>
                {pokemon?.name}
            </button>
        </div>
    )
}
