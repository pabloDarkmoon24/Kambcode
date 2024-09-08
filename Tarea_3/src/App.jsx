import './App.css'
import RickAndMortyCharacterCard from './components/rickAndMortyCharacterCard/rickAndMortyCharacterCard'

function App() {

  return (
    <div>
      <h1>Personajes de Rick and morty</h1>
      <div id='grid-container'>
        <RickAndMortyCharacterCard id={1}/>
        <RickAndMortyCharacterCard id={2}/>
        <RickAndMortyCharacterCard id={3}/>
        <RickAndMortyCharacterCard id={4}/>
      </div>
    </div>
  )
}

export default App
