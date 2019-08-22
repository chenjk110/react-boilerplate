import React, { PureComponent } from 'react'

/** you can custom fallback in need */
export class PageLoadingFallback extends PureComponent {
  render() {
    return (
      <div>
        <p>Page Loading...</p>
      </div>
    )
  }
}

export default PageLoadingFallback