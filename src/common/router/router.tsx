import App from '@/app/App';
import { Main } from '@/app/Main';
import { pokemonApi } from '@/features/pokemons/api/api';
import { ManagablePockemonLinksList } from '@/features/pokemons/ui/Pokemons/pages/ManagablePockemonLinksList/ManagablePockemonLinksList';
import { Pockemon } from '@/features/pokemons/ui/Pokemons/pages/Pockemon/Pockemon';
import { PockemonDescription } from '@/features/pokemons/ui/Pokemons/pages/PockemonDescription/PockemonDescription';
import { Pokemons } from '@/features/pokemons/ui/Pokemons/Pokemons';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Admin } from '../components/pages/Admin/Admin';
import { ErrorPage } from '../components/pages/Error/Error';
import { HomePage } from '../components/pages/Home/Home';
import { ProtectedRoute } from '../components/pages/Admin/ProtectedAdmin';

const pokemons = pokemonApi.getPokemons();

const publicAppRoutes: Array<RouteObject> = [
    {
        path: 'child',
        element: <p>replace main</p>,
    },
    {
        element: <Main />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: 'pokemons',
                element: <Pokemons pokemons={pokemons} />,
                children: [
                    {
                        index: true,
                        element: <ManagablePockemonLinksList />,
                    },
                    {
                        path: ':nature',
                        element: <ManagablePockemonLinksList />,
                    },
                    {
                        path: 'pokemon/:id',
                        element: <Pockemon />,
                    },
                    {
                        path: 'pokemon/:id/description',
                        element: <PockemonDescription />,
                    },
                    {
                        path: 'pokemon/error',
                        element: <p>pokemon doesnt exist</p>,
                    },
                ],
            },
        ],
    },
];

const protectedRoutes = [
    {
        path: '/admin',
        element: <Admin />,
    },
];

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: publicAppRoutes,
    },
    {
        element: <ProtectedRoute />,
        children: protectedRoutes,
    },
]);
