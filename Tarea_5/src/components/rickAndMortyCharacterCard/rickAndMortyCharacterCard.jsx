import React, { useState, useEffect } from 'react';
import CharacterCard from '../characterCard/characterCard';
import './rickAndMortyCharacterCard.css';

const RickAndMortyCharacterCard = (props) => {
  const [caracterList, setCaracterList] = useState([]);
  const [changePages, setChangePages] = useState(1); 

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${changePages}`)
      .then((res) => res.json())
      .then((data) => {
        setCaracterList(data.results); 
      });
  }, [changePages]); 

  const handleLogOut = () => {
    props.setUser([]);
  };

  const changePage = (event) => {
    const pageNumber = parseInt(event.target.value, 10); 
    setChangePages(pageNumber); 
  };

  return (
    <div>
      <h1>Bienvenido {props.user}</h1>
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
      <button onClick={handleLogOut}>Cerrar sesion</button>
    </div>
  );
};

export default RickAndMortyCharacterCard;
