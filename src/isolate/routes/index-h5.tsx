
import { RouteObject } from 'react-router-dom';

import { Suspense, lazy } from 'react';

const Home = lazy(() => import('../../pages'));
const ListSearch = lazy(() => import('../../pages/list-search'));

export const subRoutes:RouteObject[] =  [{
    path: '/myhome',
    element: <Suspense fallback={ 'loading...'} > <Home /></Suspense >
},{
    path: 'list-search',
    element:  <Suspense fallback={ 'loading...'} > <ListSearch /></Suspense >
}];