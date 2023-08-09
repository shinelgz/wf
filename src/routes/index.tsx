
import {RouteObject} from  'react-router-dom';

import { Suspense, lazy } from 'react';

const Home = lazy( () => import('../pages'));
const List = lazy( () => import('../pages/list'))


export const routes: RouteObject[] = [{
    path: '/',
    element: <Suspense fallback={'loading...'}><Home /></Suspense>
}, {
    path: '/home',
    element: <Suspense fallback={'loading...'}><Home /></Suspense>
},{
    path: '/list',
    element: <Suspense fallback={'loading...'}><List /></Suspense>
}]