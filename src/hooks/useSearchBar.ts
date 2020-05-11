import { createContext, useContext } from 'react'

const SearchBar = createContext({})

export const SearchBarProvider = SearchBar.Provider

export const stateDefault = {
  text: ''
}

export default () => useContext(SearchBar)
