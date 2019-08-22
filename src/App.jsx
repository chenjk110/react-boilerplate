import React, { Component } from 'react'

import router from '@/routes'

/* inject routes */
/* inject store */
/* inject dev tool */

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div>
      {router}
    </div>);
  }
}