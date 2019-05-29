import * as React from 'react'
import { action } from '@storybook/addon-actions'
import styled from '@datapunt/asc-core'
import { ReactComponent as ChevronRight } from '@datapunt/asc-assets/lib/Icons/ChevronRight.svg'
import { ReactComponent as ChevronDown } from '@datapunt/asc-assets/lib/Icons/ChevronDown.svg'
import { ReactComponent as ExternalLink } from '@datapunt/asc-assets/lib/Icons/ExternalLink.svg'
import { ReactComponent as MenuIcon } from '@datapunt/asc-assets/lib/Icons/Menu.svg'
import BoxWrapper from '../../../internals/Box/BoxWrapper'
import Header from '../Header'

import HeaderNavigationStyle from '../HeaderNavigationStyle'
import ContentFiller from '../../../internals/ContentFiller/ContentFiller'
import Menu from '../../Menu/Menu'
import { MenuItem, MenuLabel } from '../../..'
import SubMenu from '../../Menu/SubMenu'
import { breakpoint } from '../../../utils'
import MenuBarStyle from '../../Menu/MenuBarStyle'
import MenuDropDownStyle from '../../Menu/MenuDropDownStyle'
import HeaderWrapperStyle from '../HeaderWrapperStyle'
import SearchBarStyle from '../../SearchBar/SearchBarStyle'
import SearchBarMobile from '../../SearchBar/SearchBarMobile'
import SearchBar from '../../SearchBar'
import SearchBarMobileStyle from '../../SearchBar/SearchBarMobileStyle'

const outsideBackgoundColor = '#E6E6E6'
const contentBackgrountColor = '#ffffff'

const DataportaalHeaderWrapperStyle = styled(HeaderWrapperStyle)`
  ${HeaderNavigationStyle} {
    justify-content: flex-end;
  }

  ${SearchBarMobileStyle} {
    @media screen and ${breakpoint('min-width', 'tabletM')} {
      display: none;
    }
    & > div {
    }
  }

  ${SearchBarStyle} {
    @media screen and ${breakpoint('max-width', 'tabletM')} {
      display: none;
    }

    flex-grow: 1;

    & > div {
      flex-grow: 0;
      width: 100%;
      max-width: 430px;
    }
  }

  ${MenuBarStyle} {
    @media screen and ${breakpoint('max-width', 'tabletM')} {
      display: none;
    }
  }

  ${MenuDropDownStyle} {
    @media screen and ${breakpoint('min-width', 'tabletM')} {
      display: none;
    }
  }
`
const DesktopSearchBar: React.FC<{}> = () => {
  const [searchText, setText] = React.useState('')
  return (
    <SearchBar
      placeholder="Enter the search text"
      onTextChanged={(text: string) => {
        setText(text)
        action(`text changed: ${searchText}`)
      }}
      onSearch={() => {
        action(`button clicked: ${searchText}`)
      }}
      text={searchText}
    />
  )
}

const MobileSearchBar: React.FC<{}> = () => {
  const [searchText, setText] = React.useState('')
  return (
    <SearchBarMobile
      placeholder="Enter the search text"
      onTextChanged={(text: string) => {
        setText(text)
        action(`text changed: ${searchText}`)
      }}
      onSearch={() => {
        action(`button clicked: ${searchText}`)
      }}
      text={searchText}
    />
  )
}

const MenuDesktop = (
  <Menu>
    <MenuItem onClick={action('click')}>One</MenuItem>
    <SubMenu label="Two">
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        One
      </MenuItem>
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        Two
      </MenuItem>
      <MenuLabel>Two</MenuLabel>
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        One
      </MenuItem>
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        Two
      </MenuItem>
      <MenuItem icon={<ExternalLink />} onClick={action('click')}>
        Show more
      </MenuItem>
    </SubMenu>
    <MenuItem onClick={action('click')}>Three</MenuItem>
  </Menu>
)

const MenuMobile = (
  <Menu icon={<MenuIcon />} mobile>
    <MenuItem onClick={action('click')}>One</MenuItem>
    <SubMenu arrowIcon={<ChevronDown />} label="Two">
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        One
      </MenuItem>
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        Two
      </MenuItem>
      <MenuLabel>Two</MenuLabel>
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        One
      </MenuItem>
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        Two
      </MenuItem>
      <MenuItem icon={<ExternalLink />} onClick={action('click')}>
        Show more
      </MenuItem>
    </SubMenu>
    <MenuItem onClick={action('click')}>Three</MenuItem>
  </Menu>
)

const HeaderTallDataportaalStory: React.FC<{}> = () => {
  return (
    <BoxWrapper backgroundColor={outsideBackgoundColor}>
      <Header
        tall
        title="Data en informatie"
        homeLink="http://data.amsterdam.nl"
        fullWidth={false}
        styledComponent={DataportaalHeaderWrapperStyle}
        navigation={
          <>
            <DesktopSearchBar />
            <MobileSearchBar />
            {MenuDesktop}
            {MenuMobile}
          </>
        }
      >
        <a>Link</a>
      </Header>
      <ContentFiller
        backgroundColor={contentBackgrountColor}
        maxWidth="1800px"
        headerSize="tall"
      />
    </BoxWrapper>
  )
}

export default HeaderTallDataportaalStory