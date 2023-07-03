import React from 'react'
import { IconProps } from 'phosphor-react'

import { CheckoutSessionContainer, ICON_COLORS } from './style'

interface ICheckoutSession {
  children: React.ReactNode
  titleText: string
  subtitleText: string
  Icon: IconProps
  iconColor: keyof typeof ICON_COLORS
}

export function CheckoutSession({
  children,
  titleText,
  subtitleText,
  Icon,
  iconColor,
}: ICheckoutSession) {
  return (
    <CheckoutSessionContainer iconColor={iconColor}>
      <div className="title">
        <>{Icon}</>
        <h3>{titleText}</h3>
        <p>{subtitleText}</p>
      </div>
      {children}
    </CheckoutSessionContainer>
  )
}
