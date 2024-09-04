import './App.css'
import Title from './components/title/title'
import Details from './components/details/details'
import Image from './components/image/image'

function App() {


  return (
    <div id="grid-container">
      <div id='grid-items'>
        <Title title={'Rick Sanchez'}></Title>
        <Image url={'./rick.jpg'}></Image>
        <Details genre={'Masculino'} status={'Vivo'} ></Details>
      </div>
      <div id='grid-items'>
        <Title title={'Morty Smith'}></Title>
        <Image url={'./morty.jpg'}></Image>
        <Details genre={'Masculino'} status={'Vivo'} ></Details>
      </div>
      <div id='grid-items'>
        <Title title={'Summer Smith'}></Title>
        <Image url={'./summer.png'}></Image>
        <Details genre={'Femenina'} status={'Vivo'} ></Details>
      </div>
    </div>
  )
}

export default App
