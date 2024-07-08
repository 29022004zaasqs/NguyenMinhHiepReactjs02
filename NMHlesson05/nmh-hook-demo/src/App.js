import React from 'react'
import NmhuseState from './components/NmhuseState'
import NmhUseEffect from './components/NmhUseEffect'
import NmhUseContext from './components/NmhUseContext'
import './App.css'

export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Nguyễn Minh Hiệp - Hook</h1>
      <hr/>
      <NmhuseState />
      <hr/>
      <NmhUseEffect />
      <hr/>
      <NmhUseContext />
    </div>
  )
}
