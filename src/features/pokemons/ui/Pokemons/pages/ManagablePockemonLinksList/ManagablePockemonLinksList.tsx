import {
    Navigate,
    useOutletContext,
    useParams,
    useSearchParams,
} from 'react-router-dom';
import { Pockemon } from '../../Pokemons';
import { PockemonLinksList } from './PockemonLinksList/PockemonLinksList';
import { SettingsPannel } from './SettingsPannel/SettingsPannel';

type NatureParams = {
    nature: string;
};

export const ManagablePockemonLinksList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const pockemons: Array<Pockemon> = useOutletContext();
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    const params = useParams<NatureParams | {}>();
    const nature = (params as NatureParams).nature;

    if (nature) {
        if (!/^(fire|lightning|earth|water|all)$/.test(nature)) {
            return <Navigate to={'/pokemons/'} />;
        }
    }

    const order = searchParams.get('order');
    const limit = searchParams.get('limit');

    const setLimit = (limit: string) => {
        setSearchParams((prev) => {
            prev.set('limit', limit);
            return prev;
        });
    };

    const setOrder = (order: 'asc' | 'desc') => {
        setSearchParams((prev) => {
            prev.set('order', order);
            return prev;
        });
    };

    let filteredPockemons = pockemons;

    if (Object.hasOwn(params, 'nature')) {
        filteredPockemons = pockemons.filter((pockemon) => {
            return pockemon.nature === nature;
        });
    }

    if (limit) {
        filteredPockemons = filteredPockemons.slice(0, +limit);
    }

    if (order) {
        if (order === 'desc') {
            filteredPockemons = [...filteredPockemons].reverse();
        }
    }

    return (
        <div>
            <SettingsPannel
                onSetLimit={setLimit}
                setOrder={setOrder}
                order={order}
                limit={limit}
            />
            <PockemonLinksList pockemons={filteredPockemons} />
        </div>
    );
};
