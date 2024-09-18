import { useEffect, useState } from 'react'
import RickAndMortyCharacterCard from '../components/rickAndMortyCharacterCard/rickAndMortyCharacterCard'

function CharacterPage() {
  const [user, setUser] = useState('')
  return (
    <div>
      {
        <RickAndMortyCharacterCard id={1} setUser={setUser} user={user}/>
      }
    </div>
  )
}

export default CharacterPage