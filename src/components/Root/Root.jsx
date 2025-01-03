import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'

export default function Root() {
  return (
    <div>
     <Header></Header>
    <Outlet />
    <Banner></Banner>
    <Footer></Footer>
    </div>
  )
}



