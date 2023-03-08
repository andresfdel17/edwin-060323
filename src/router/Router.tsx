import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Background } from '../components/Background'
import { Filter } from '../components/Filter'
import { Form } from '../components/Form'
import { NNavbar } from '../components/NNavbar'
import { View404 } from '../components/View404'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NNavbar />} />
        <Route path='/background' element={<Background />} />
        <Route path='/filter' element={<Filter />} />
        <Route path='/form' element={<Form />} />
        <Route path="*" element={<View404 />} />
      </Routes>
    </BrowserRouter>
  )
}
