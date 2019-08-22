import React, { PureComponent } from 'react'

import classNames from 'class-names'

import '@/styles/components/common/button.css'

export default class BaseButtonWrap extends PureComponent {

  render() {
    const {
      children,
      append,
      prepend,
      disabled,
      type,
      className,
      ...restProps
    } = this.props

    const classes = classNames(
      {
        [`btn`]: true,
        [`btn--${type}`]: true,
        [`btn--disabled`]: disabled,
      },
      className
    );

    return (
      <div
        className={classes}
        {...restProps}
      >
        {prepend}
        {children}
        {append}
      </div>
    );
  }
}