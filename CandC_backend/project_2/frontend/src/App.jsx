import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((Response) =>{
      setJokes(Response.data)
    })
    .catch((error) =>{
      console.log(error);
    })
  })

  return (
    <>
     <h1>welcome to backend Dasmat</h1>
     <p>JOKES: {jokes.length}</p>

     {
      jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <h3>{joke.content}</h3>
          <h3>{joke.author}</h3>
        </div>
      ))
    }  
    </>
  )
}

export default App
