import { NavLink } from 'react-router-dom';
import { Pockemon } from '../../../../Pokemons';

type Props = {
    pockemon: Pockemon;
};

export const PockemonLink = (props: Props) => {
    const { id, name, nature } = props.pockemon;
    return (
        <li>
            <NavLink to={`/pokemons/pokemon/${id}`}>
                name: {name}, nature: {nature}
            </NavLink>
        </li>
    );
};
