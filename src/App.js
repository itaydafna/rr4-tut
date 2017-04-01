import React from 'react';
import {
    BrowserRouter,
    HashRouter,
    MemoryRouter,
    StaticRouter,
    Route,
    Link,
} from 'react-router-dom';

import './App.css'

const LinksRoutes = () => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route exact path="/about" render={() => <h1>About</h1>} />
    </div>
)

const forceRefresh = () => {
    console.log(new Date())
    return true
}

const BrowserRouterApp = () => (
    <BrowserRouter forceRefresh={forceRefresh()}>
        <LinksRoutes />
    </BrowserRouter>
)

const HashRouterApp = () => (
    <HashRouter hashType="noslash">
        <LinksRoutes />
    </HashRouter>
)

const MemoryRouterApp = () => (
    <MemoryRouter
        initialEntries={['/', '/about']}
        initialIndex={0}
    >
        <LinksRoutes />
    </MemoryRouter>
)

const StaticRouterApp = () => (
    <StaticRouter
       location="/about" context={{}}
    >
        <LinksRoutes />
    </StaticRouter>
)


export default StaticRouterApp
