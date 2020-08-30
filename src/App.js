import React from 'react'
import { Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import Dashboard from './Dashboard'

export default function App() {
    return (
        <main>
            <Route path="/" exact component={LandingPage} />
            <Route path="/dashboard" component={Dashboard} />
        </main>
    )
}