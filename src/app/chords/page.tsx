import React from 'react'
import Guitar from '../components/guitar/Guitar'

export default function Chord() {
  return (
    <div className='h-screen'>
      <div className='text-4xl text-center'>Guitar</div>
      <div className='flex justify-center'>
        <Guitar />
      </div>
    </div>
  )
}
