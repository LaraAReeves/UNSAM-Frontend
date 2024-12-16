import {  Outlet } from 'react-router-dom'
import Nav from '../../common/Nav'

export default function Main() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}
