import React, { FC } from 'react'
import Header from '../header'

interface Props {
  children: JSX.Element
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
