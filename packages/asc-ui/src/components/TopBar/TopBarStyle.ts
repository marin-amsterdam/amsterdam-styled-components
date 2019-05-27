import styled from '@datapunt/asc-core'
import { flexboxMinHeightFix } from '../shared/ie-fixes'
import { getColorFromTheme } from '../../utils'

export type Props = {
  backgroundColor?: string
}

const TopBarStyle = styled.header<Props>`
  display: flex;
  position: relative;
  align-items: center;
  z-index: 0;
  padding: 0 15px;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || getColorFromTheme(theme, 'tint', 'level1')};
  ${flexboxMinHeightFix()};
`

export default TopBarStyle