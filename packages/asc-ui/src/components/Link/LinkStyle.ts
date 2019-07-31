import styled, { css, Theme } from '@datapunt/asc-core'
import { color } from '../../utils'
import { focusStyleText, svgFill } from '../../utils/themeUtils'
import Typography, { TypographyProps } from '../Typography'
import IconStyle from '../Icon/IconStyle'

export const BlankLinkStyleCSS = css`
  display: inline-block;
  text-decoration: none;
  color: inherit;
`
export const InlineLinkStyleCSS = ({
  theme,
}: {
  theme: Theme.ThemeInterface
}) => css`
  display: inline-block;
  color: ${color('primary')({ theme })};

  &:hover {
    color: ${color('secondary')};
  }
`
export const DefaultLinkStyleCSS = ({
  theme,
}: {
  theme: Theme.ThemeInterface
}) => css`
  display: flex;
  color: ${color('tint', 'level6')({ theme })};
  text-decoration: none;
  font-weight: 700;

  ${IconStyle} {
    margin: 3px;
  }

  &:hover {
    color: ${color('secondary')({ theme })};
    text-decoration: underline;
    ${IconStyle} {
      ${svgFill('secondary')({ theme })};
    }
  }
`

type TypeLink = 'default' | 'inline' | 'blank' | 'default-chevron'

export const getLinkType = (linkType: TypeLink = 'default') => ({
  theme,
}: {
  theme: Theme.ThemeInterface
}) => {
  switch (linkType) {
    case 'blank':
      return BlankLinkStyleCSS
    case 'inline':
      return InlineLinkStyleCSS({ theme })
    case 'default':
    case 'default-chevron':
      return DefaultLinkStyleCSS({ theme })
    default:
      return ''
  }
}

export type Props = {
  linkType?: TypeLink
} & TypographyProps

export default styled(Typography)<Props>`
  ${focusStyleText()}
  ${({ linkType }) => getLinkType(linkType)}
`
