import { Link, useOutletContext, useParams } from 'react-router-dom';
import { Pockemon as P } from '../../Pokemons';

export const PockemonDescription = () => {
    const pokemons: Array<P> = useOutletContext();
    const { id } = useParams<{ id: string }>();
    const pokemonId = id ?? 0;

    const pokemon = pokemons.find((p) => p.id === +pokemonId);
    return (
        <div>
            <p>
                Pokemon <b>{pokemon?.name}</b> is very cool!
            </p>
            <div>
                <Link to={'..'} relative="path">
                    back to the pokemon data
                </Link>
            </div>
            <div>
                <Link to={'..'}>back to the pokemon list</Link>
            </div>
        </div>
    );
};
