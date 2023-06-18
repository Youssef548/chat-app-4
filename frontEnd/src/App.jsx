import { useState } from 'react'
import { Sidebar } from './components/app/sidebar'
import Chat from './components/app'
import Form from './components/auth/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl'>hi i am a css developer</h1>
      <Sidebar />
      <Chat />
    </>
  )
}


export default App

