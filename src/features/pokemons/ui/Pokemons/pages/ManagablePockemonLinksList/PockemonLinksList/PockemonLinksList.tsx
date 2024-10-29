import { Pockemon } from '../../../Pokemons';
import { PockemonLink } from './PockemonLink/PockemonLink';

type Props = {
    pockemons: Array<Pockemon>;
};

export const PockemonLinksList = (props: Props) => {
    const jsxPockemonLinks = props.pockemons.map((pockemon) => {
        return <PockemonLink key={pockemon.id} pockemon={pockemon} />;
    });
    return <ul>{jsxPockemonLinks}</ul>;
};
