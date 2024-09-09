import React from 'react'
import CharacterCard from '../CharacterCard/characterCard'
import { useState , useEffect } from 'react'

const RickAndMortyCharacterCard = (props) => {
    const rickAndMortyCharacterId = props.id;

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [genre, setGenre] = useState('')
    const [status, setStatus] = useState('')

    useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/"+ rickAndMortyCharacterId)
    .then((response) => response.json())
    .then((result) =>{
      console.log(result)

      setName(result.name)
      setImage(result.image)
      setGenre(result.gender)
      setStatus(result.status)
    }
    )
  },[])
  const handleLogOut = ()=>{
    props.setUser([])
  }
  return (
    <div>
      <h1>Bienvenido {props.user}</h1>
        <CharacterCard
            name={name}
            image={image}
            genre={genre}
            status={status}
        />
        <button onClick={handleLogOut}>Regreso</button>
    </div>
  )
}

export default RickAndMortyCharacterCard