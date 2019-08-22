import React, { Suspense } from 'react'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'

import {
  PageLoadingFallback
} from '@/components'

import {
  Home,
  Login,
  NotFound
} from './pages'

export default (
  <Router>
    <header>
      <nav>
        <li><Link to="/main">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </nav>
    </header>
    <Suspense fallback={<PageLoadingFallback />}>
      <Switch>
        <Redirect path="/" to="/main" exact />
        <Route path="/login" component={Login} />
        <Route path="/main" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
)