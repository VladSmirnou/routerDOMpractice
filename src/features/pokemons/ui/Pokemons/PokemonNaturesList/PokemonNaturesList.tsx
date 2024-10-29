import { NavLink } from 'react-router-dom';
import { getClassName } from '@/common/getClassName';
import s from '../../../../../common/styles/Link.module.css';

type Props = {
    pockemonNatures: Array<string>;
};

export const PokemonNaturesList = (props: Props) => {
    const pockemonNatures: Array<string> = [];
    props.pockemonNatures.forEach((nature) => {
        if (!pockemonNatures.includes(nature)) {
            pockemonNatures.push(nature);
        }
    });

    const jsxPockemonNatures = pockemonNatures.map((nature, idx) => {
        return (
            <li key={idx}>
                <NavLink to={nature} className={getClassName(s.link, s.active)}>
                    {nature}
                </NavLink>
            </li>
        );
    });

    jsxPockemonNatures.push(
        <li key={'pokemons'}>
            <NavLink
                to={'/pokemons'}
                end
                className={getClassName(s.link, s.active)}
            >
                all
            </NavLink>
        </li>,
    );
    return <ul>{jsxPockemonNatures}</ul>;
};
