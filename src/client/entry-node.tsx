/**
 * inspired by:
 * @see https://github.com/pagespeed-green/react-ssr/blob/master/src/AppSsr.jsx
 * @see https://github.com/pagespeed-green/react-ssr/blob/master/tools/ssr.js#L57
 */
import React from 'react'
import { StaticRouter } from 'react-router-dom'

import App from './app'

const AppSSR = ({ url }) => (
  <StaticRouter location={url}>
    <App />
  </StaticRouter>
)

export default AppSSR
