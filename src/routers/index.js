import React from 'react'
// import SRouter from '../views/sRouter/sRouter'
// import Test from '../views/test/test'

const SRouter = React.lazy(() => import('../views/sRouter/sRouter'));
const Test = React.lazy(() => import('../views/test/test'));
const ReduxTest = React.lazy(() => import('../views/reduxTest/reduxTest'));
const Home = React.lazy(() => import('../views/home/Home'));
const LifeCycle = React.lazy(() => import('../views/LifeCycle/LifeCycle'));

export default [
    {
        path: '/',
        component: Home,
        sNavTitle: '首页'
    },
    {
        path: '/sRouter/:id',
        component: SRouter,
        sNavTitle: '路由'
    },
    {
        path: '/test',
        component: Test,
        sNavTitle: '测试'
    },
    {
        path: '/reduxTest',
        component: ReduxTest,
        sNavTitle: 'redux'
    },
    {
        path: '/LifeCycle',
        component: LifeCycle,
        sNavTitle: '生命周期'
    }
]