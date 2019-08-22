import React, { PureComponent } from 'react'

import classNames from 'class-names'

import '@/styles/components/common/button.css'

import { BaseButtonWrap } from '.'

export default class Button extends PureComponent {
  render() {

    const {
      text,
      children,
      disabled,
      loading,
      onClick,
      ...restProps
    } = this.props

    const btnElmClasses = classNames(
      `btn__button`,
    )
    
    return (
      <BaseButtonWrap
        {...restProps}
      >
        <button
          className={btnElmClasses}
          disabled={loading || disabled}
          onClick={onClick}
        >{text}</button>
      </BaseButtonWrap>
    )
  }
}