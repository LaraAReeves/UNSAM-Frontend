import {  Outlet } from 'react-router-dom'
import SearchBar from '../../ui/SearchBar'

export default function Main() {
  return (
    <>
      <h1>Main</h1>
      <Outlet />
      <SearchBar/>
    </>
  )
}

