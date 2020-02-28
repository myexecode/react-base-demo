import React from 'react'
// import SRouter from '../views/sRouter/sRouter'
// import Test from '../views/test/test'

const SRouter = React.lazy(() => import('../views/sRouter/sRouter'));
const Test = React.lazy(() => import('../views/test/test'));

export default [
    {
        path: '/sRouter/:id',
        component: SRouter
    },
    {
        path: '/test',
        component: Test
    }
]