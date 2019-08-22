import React, { PureComponent } from 'react'

import {
  Button
} from '@/components/common'

export default class Home extends PureComponent {
  render() {
    return (
      <>
        <h1>Home Page</h1>
        <Button
          text="Primary"
        />
      </>
    )
  }
}