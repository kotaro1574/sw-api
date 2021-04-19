import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Character.scss'

const Character = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [mass, setMass] = useState('');
  const [hair_color, setHair_color] = useState('');
  const [skin_color, setSkin_color] = useState('');
  const [eye_color, setEye_color] = useState('');
  
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}/`)
      .then((response) => {
        console.log(response.data)
        setName(response.data.name)
        setHeight(response.data.height)
        setMass(response.data.mass)
        setHair_color(response.data.hair_color)
        setSkin_color(response.data.skin_color)
        setEye_color(response.data.eye_color)
      })
      .catch(error => console.log(error))
  }, [id]);

  return (
    <>
      <div className="character">
        <table border="1">
          <tr>
            <th>名前</th>
            <th>身長</th>
            <th>体重</th>
            <th>髪の色</th>
            <th>肌の色</th>
            <th>目の色</th>
          </tr>
          <tr>
            <td>{name}</td>
            <td>{height}</td>
            <td>{mass}</td>
            <td>{hair_color}</td>
            <td>{skin_color}</td>
            <td>{eye_color}</td>
          </tr>
        </table>
        <div className="back">
          <a href="/">戻る</a>
        </div>
      </div>
    </>
  )
}

export default Character
