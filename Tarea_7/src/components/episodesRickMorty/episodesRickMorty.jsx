import React, { useEffect, useState } from 'react'
import Episodes from '../episodes/episodes';
import { Link } from 'react-router-dom';

const EpisodesRickMorty = (props) => {
  const [episodes, setEpisodes] = useState([]); 
  const [changePages, setChangePages] = useState(1); 

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${changePages}`) 
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.results); 
      })
  }, [changePages]); 


  const changePage = (event) => {
    const pageNumber = parseInt(event.target.value, 10); 
    setChangePages(pageNumber); 
  };
     
  return (
    <div>
      <div>
      <h1>Episodios Rick and Morty</h1>
      </div>
      <div>
      <Link to='/' >
            Character
      </Link>
      </div>
      <div className="container">
        {
          episodes.map((episode) => ( 
            <Episodes
              key={episode.id}
              name={episode.name}
              episode={episode.episode}
              date={episode.air_date}
            />
          ))
        }
      </div>
      <div>
        <button value={1} onClick={changePage}>1</button>
        <button value={2} onClick={changePage}>2</button>
        <button value={3} onClick={changePage}>3</button>
      </div>
    </div>  
  );
};

export default EpisodesRickMorty