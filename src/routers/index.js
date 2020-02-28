import React from 'react'
// import SRouter from '../views/sRouter/sRouter'
// import Test from '../views/test/test'

const SRouter = React.lazy(() => import('../views/sRouter/sRouter'));
const Test = React.lazy(() => import('../views/test/test'));
const ReduxTest = React.lazy(() => import('../views/reduxTest/reduxTest'));

export default [
    {
        path: '/sRouter/:id',
        component: SRouter
    },
    {
        path: '/test',
        component: Test
    },
    {
        path: '/reduxTest',
        component: ReduxTest
    }
]