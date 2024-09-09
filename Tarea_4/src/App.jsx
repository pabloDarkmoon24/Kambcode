import { useEffect, useState } from 'react'
import './App.css'
import RickAndMortyCharacterCard from './components/rickAndMortyCharacterCard/rickAndMortyCharacterCard'
import Login from './Login/login'

function App() {

  const [user, setUser] = useState('')

 

  return (
    <div>
      {
        user.length > 0
        ?<RickAndMortyCharacterCard id={1} setUser={setUser} user={user}/>
        :<Login setUser={setUser}/>
      }
    </div>
  )
}

export default App
