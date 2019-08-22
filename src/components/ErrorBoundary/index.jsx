import React, { Component } from 'react'

export class ErrorBoundary extends Component {
  static getDerivedStateFromError(props, state) {
    return {
      ...state,
      isFault: true
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      info: '',
      isFault: false
    }
  }

  componentDidCatch(error, info) {
    /* update error info */
    this.setState({ error, info })

    /* other fallback actions */
    // ...
  }

  render() {
    const { children } = this.props
    const { isFault, info } = this.state
    return (
      isFault ? (
        <div>{info}</div>
      ) : children
    );
  }
}

export default ErrorBoundary