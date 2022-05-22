import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import CardMore from '../pages/cardMore/CardMore'
import Home from '../pages/home/Home'
import Main from '../pages/main/Main'

function Layout() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemon' element={<Main />}/>
        <Route path='/pokemon/:id' element={<CardMore />}/>

        <Route path='*' element={<Navigate to={'/'} />}/>
      </Routes>
     
    </div>
  )
}

export default Layout
