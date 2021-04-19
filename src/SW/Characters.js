import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Characters.scss'

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then((response) => {
        console.log(response.data.results)
        setCharacters(response.data.results.map((char)=> (char.name)))
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <div className="characters">
        <ul>
          {characters.map((char, index) => (
            <li key={index}>
            <a href={index + 1}>{char}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Characters
