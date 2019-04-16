import styled from '../../styled-components'

export type Props = {}

const HeaderStyle = styled.div<Props>`
  // TODO remove when ready
  display: flex;
  background-color: lightgrey;

  & > h1 {
    display: inline-block;
    margin: 20px 0;
    min-height: 34px;
    position: relative;
    font-size: 1.8125em;
    line-height: 1.37931em;
    background-color: #fff;

    @media screen and (max-width: 539px) {
      margin-right: 15px;
      margin: 10px 0;
    }

    @media screen and (max-width: 1023px) and (min-width: 540px) {
      margin-left: -15px;
      min-height: 68px;
    }

    @media screen and (min-width: 1024px) {
      margin-left: -30px;
    }

    & > h1 > a {
      float: left;
      display: inline-block;
      min-height: 68px;
      color: #767676;
      text-decoration: none;
    }
  }
`
export const HeaderGridWrapper = styled.div<Props>`
  background-color: green;
  position: relative;
  font-size: 100%;
  margin: 0 auto;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: 'AvenirNextLTW01-Regular', arial, sans-serif;

  @media screen and (min-width: 1024px) {
    background-color: red;
    max-width: 1400px;
  }
`
export const HeaderGridContainer = styled.div<Props>`
  background-color: #fff222;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: 1023px) and (min-width: 540px) {
    max-width: 480px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 960px;
  }
`
export const HeaderGridZone = styled.div<Props>`
  position: relative;

  @media screen and (min-width: 1024px) {
    box-sizing: border-box;
    width: 100%;
    float: left;
  }
`

export default HeaderStyle
