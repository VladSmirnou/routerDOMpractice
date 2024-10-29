import { Outlet } from 'react-router-dom';
import { PokemonNaturesList } from './PokemonNaturesList/PokemonNaturesList';

export type Pockemon = {
    id: number;
    name: string;
    nature: string;
};

type Props = {
    pokemons: Array<Pockemon>;
};

export const Pokemons = (props: Props) => {
    const pockemonNatures = props.pokemons.map(({ nature }) => nature);
    const s = {
        display: 'flex',
    };
    return (
        <div style={s}>
            <PokemonNaturesList pockemonNatures={pockemonNatures} />
            <Outlet context={props.pokemons} />
        </div>
    );
};
