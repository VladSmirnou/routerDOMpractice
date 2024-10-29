import {
    Link,
    Navigate,
    useNavigate,
    useOutletContext,
    useParams,
} from 'react-router-dom';
import { Pockemon as P } from '../../Pokemons';

export const Pockemon = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const pokemonId = id ?? 0;

    const pokemons: Array<P> = useOutletContext();
    const pokemon = pokemons.find((p) => p.id === +pokemonId);

    if (pokemon) {
        return (
            <div>
                <div>{pokemon.id}</div>
                <div>{pokemon.name}</div>
                <div>{pokemon.nature}</div>
                <Link to={`../${pokemon.id}/description`} relative="path">
                    pokemon description
                </Link>{' '}
                <br />
                <button onClick={() => navigate('..')}>back</button>
            </div>
        );
    }
    return <Navigate to={'../pokemon/error'} />;
};
