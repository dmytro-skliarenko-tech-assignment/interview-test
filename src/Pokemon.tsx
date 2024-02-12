import {FC} from "react";

export const Pokemon: FC<any> = (props) => {
    return (
        <div className="pokemon">
            <button className={`pokemon-button ${props.selectedName === props.name && 'pokemon-selected'}`} onClick={() => props.onSelect(props.name)}>
                {props.name}
            </button>
        </div>
    )
}
