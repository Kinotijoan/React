import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import Tasks from './components/Tasks'
import Footer from './components/Footer'
import background from '.././public/background.jpeg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="min-h-screen w-screen bg-cover bg-center h-64" style={{backgroundImage: `url(${background})`}}>
      <header>
        <Header/> 
      </header>
      <main>
        <Input/>
        <Tasks/> 
      </main>
      <footer className="absolute bottom-0 left-0 w-full">
        <Footer/>
      </footer>
    </div>
  )
}

export default App
