import React, { lazy } from 'react'

/** Login Page Component */
export const Login = lazy(() => import(
  /* webpackChunkName: "login-page" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */
  '@/pages/Login'
))

/** Home Page Component */
export const Home = lazy(() => import(
  /* webpackChunkName: "home-page" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */
  '@/pages/Home'
))

/** NotFound Page Component */
export const NotFound = lazy(() => import(
  /* webpackChunkName: "not-found-page" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */
  '@/pages/NotFound'
))
