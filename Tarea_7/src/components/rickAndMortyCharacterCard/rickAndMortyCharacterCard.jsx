import React, { useState, useEffect } from 'react';
import CharacterCard from '../characterCard/characterCard';
import './rickAndMortyCharacterCard.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const RickAndMortyCharacterCard = () => {
  const [caracterList, setCaracterList] = useState([]); 
  const [changePages, setChangePages] = useState(1); 
  const [query, setQuery] = useState('');
  const [query2, setQuery2] = useState('');
  const [query3, setQuery3] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const queryparams = new URLSearchParams(location.search);
  
  const onSearch = () =>{
    fetch(`https://rickandmortyapi.com/api/character/?page=${changePages}` )
    .then((res) => res.json())
    .then((data)=>{
      setCaracterList(data.results)
    })
  }

  const handleSumbmit = (e) =>{
    e.preventDefault()

    if (query && query2 && query3) {
      navigate(`/?character=${query}&status=${query2}&gender=${query3}`);
    } else {
      navigate('/');
    }
  };

 

  useEffect(() => {
    const fetchCharacter = async () => {
      const characteQuery = queryparams.get('character')
      const statusQuery = queryparams.get('status')
      const genderQuery = queryparams.get('gender');
      const url = characteQuery
              ? `https://rickandmortyapi.com/api/character/?name=${characteQuery}&status=${statusQuery}&gender=${genderQuery}`
              : `https://rickandmortyapi.com/api/character/?page=${changePages}`;
    
    try {
      const res = await fetch(url);
      const data = await res.json()

      setCaracterList(data.results)
    } catch (error) {
        console.error(error);
    }}

    fetchCharacter()
  }, [[location.search, changePages]]);   


  const changePage = (event) => {
    const pageNumber = parseInt(event.target.value, 10); 
    setChangePages(pageNumber); 
  };

  return (
    <div>
      <div>
        <h1>Bienvenido</h1>
      </div>
      <div>
      <Link to='/episodios' >
            episodios
      </Link>
      </div>
      <div>
          <form className="max-w-md mx-auto" onSubmit={handleSumbmit}>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                value={query}
                onChange={(e) => {setQuery(e.target.value)}}
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
              <select id="status" name="status" onChange={(e) => setQuery2(e.target.value)} value={query2}>
              <option value="status">Status</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
              </select>
              <select id="gender" name="gender" onChange={(e) => setQuery3(e.target.value)} value={query3}>
              <option value="gender">Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            </div>
            <button
            onClick={onSearch} 
            type='submit'>
            Buscar
          </button>
          </form>
        </div>
      <div className="container">
        {caracterList.map((user) => (
          <CharacterCard
            key={user.id}
            name={user.name}
            image={user.image}
            genre={user.gender} 
            status={user.status}
          />
        ))}
      </div>
      <div>
        <button value={1} onClick={changePage}>1</button>
        <button value={2} onClick={changePage}>2</button>
        <button value={3} onClick={changePage}>3</button>
        <button value={4} onClick={changePage}>4</button>
        <button value={5} onClick={changePage}>5</button>
      </div>
    </div>
  );
};

export default RickAndMortyCharacterCard;
