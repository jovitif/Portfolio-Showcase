import { useState } from 'react'
import '../Home/style.css'
export function Home() {
  

  return (
    <div className='container'>
     <h1>Ola mundo</h1>
     <input type='text' placeholder='Digite o nome...' />
     <button type='button'>Adicionar</button>
    </div>
  )
}

