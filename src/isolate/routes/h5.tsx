
import { RouteObject } from 'react-router-dom';

import { Suspense, lazy } from 'react';

const Home = lazy(() => import('../../pages'));

export const subRoutes:RouteObject[] =  [{
    path: '/myhome',
    element: <Suspense fallback={ 'loading...'} > <Home /></Suspense >
}];