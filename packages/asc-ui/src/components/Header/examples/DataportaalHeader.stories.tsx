import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { css } from '@datapunt/asc-core'
import { Header, styles } from '../../../index'
import SearchBar from '../../SearchBar'
import SearchBarToggle from '../../SearchBarToggle/SearchBarToggle'
import MenuInline from '../../Menu/MenuInline'
import MenuToggle from '../../Menu/MenuToggle'
import MenuItem from '../../Menu/MenuItem'
import MenuFlyOut from '../../Menu/MenuFlyOut'

const DataportaalHeaderWrapperStyle = css`
  ${styles.HeaderContentStyle} {
    justify-content: flex-end;
  }

  ${styles.HeaderNavigationStyle} > ${styles.SearchBarStyle} {
    flex-grow: 1;

    ${styles.TextFieldStyle} {
      flex-grow: 0;
      width: 100%;
      max-width: 430px;
    }
  }
`

// MenuToggle should take an array of children, wrapping components in Fragments will return a string..
const menuChildren = [
  <MenuFlyOut label="Categorieën">
    <MenuItem href="#" onClick={() => action('redux')}>
      Kaart
    </MenuItem>
    <MenuItem href="#" onClick={() => action('redux')}>
      Panoramabeelden
    </MenuItem>
    <MenuItem href="#" onClick={() => action('redux')}>
      Datasets
    </MenuItem>
    <MenuItem href="#" onClick={() => action('redux')}>
      Data services
    </MenuItem>
  </MenuFlyOut>,
  <MenuFlyOut label="Over">
    <MenuItem href="#" onClick={() => action('redux')}>
      Privacy en informatiebeveiliging
    </MenuItem>
    <MenuItem href="#" onClick={() => action('redux')}>
      Beschikbaarheid en kwaliteit data
    </MenuItem>
    <MenuItem href="#" onClick={() => action('redux')}>
      Technisch beheer en werkwijze
    </MenuItem>
    <MenuItem title="Contact" href="mailto:datapunt@amsterdam.nl">
      Contact
    </MenuItem>
  </MenuFlyOut>,
  <MenuItem onClick={() => action('Show feedback form')}>Feedback</MenuItem>,
  <MenuItem href="/help">Help</MenuItem>,
  <MenuFlyOut label="Jon Doe">
    <MenuItem onClick={() => action('Log out')}>Uitloggen</MenuItem>
  </MenuFlyOut>,
]

const MenuDefault = (props: any) => (
  <MenuInline {...props}>{menuChildren}</MenuInline>
)

const MenuMobile = (props: any) => (
  <MenuToggle {...props} align="right">
    {menuChildren}
  </MenuToggle>
)

const DataportaalHeader: React.FC<{}> = () => (
  <Header
    tall
    title="Data en informatie"
    homeLink="http://data.amsterdam.nl"
    fullWidth={false}
    css={DataportaalHeaderWrapperStyle}
    navigation={
      <>
        <SearchBar
          showAt="tabletM"
          placeholder="Enter the search text"
          onChange={() => {
            action(`text changed`)
          }}
          onSubmit={() => {
            action(`button clicked`)
          }}
        />
        <SearchBarToggle
          align="left"
          hideAt="tabletM"
          placeholder="Enter the search text"
          onChange={() => {
            action(`text changed`)
          }}
          onSubmit={() => {
            action(`button clicked`)
          }}
        />
        <MenuDefault showAt="tabletM" />
        <MenuMobile hideAt="tabletM" />
      </>
    }
  />
)

storiesOf('Composed/Header', module).add(
  'implementation for dataportaal',
  () => <DataportaalHeader />,
)