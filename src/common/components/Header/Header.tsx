import { NavLink } from 'react-router-dom';
import { getClassName } from '@/common/getClassName';
import s from '../../styles/Link.module.css';

export const Header = () => {
    const st = {
        listStyle: 'none',
        display: 'flex',
        columnGap: '10px',
    };

    return (
        <header>
            <nav>
                <ul style={st}>
                    <li>
                        <NavLink
                            to="/"
                            className={getClassName(s.link, s.active)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="pokemons"
                            className={getClassName(s.link, s.active)}
                        >
                            PockemonList
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
