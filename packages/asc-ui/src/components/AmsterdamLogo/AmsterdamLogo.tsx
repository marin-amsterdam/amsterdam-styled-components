import React from 'react'
import { LogoProps } from '../Header/HeaderLogoText'
import Hidden from '../Hidden'
import AmsterdamLogoStyle, {
  LogoShortStyle,
  LogoTallStyle,
  LogoTitleStyle,
} from './AmsterdamLogoStyle'

const AmsterdamLogo: React.FC<LogoProps> = ({ tall, ...otherProps }) => (
  <AmsterdamLogoStyle tall={tall} {...otherProps}>
    {tall ? (
      <>
        <Hidden minBreakpoint="laptopM">
          <LogoShortStyle />
        </Hidden>
        <Hidden maxBreakpoint="laptopM">
          <LogoTallStyle />
        </Hidden>
      </>
    ) : (
      <LogoShortStyle />
    )}
    <LogoTitleStyle srOnly>Gemeente Amsterdam</LogoTitleStyle>
  </AmsterdamLogoStyle>
)

export default AmsterdamLogo
