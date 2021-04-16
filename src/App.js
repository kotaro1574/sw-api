import React, { useState } from 'react';
import axios from 'axios';

const SWindex = () => {
  const [SW, setSW] = useState([])
  const getData = () => {
    axios.get(`https://swapi.dev/api/people/`)
      .then((response) => {
        console.log(response.data.results)
        // setSW(response.data.results.map(name => name.name))
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <div className="App">
        <div>
          <button onClick={getData()}>get profile!</button>
          {SW}
        </div>
      </div>
      {/* <ul>
        { SW.map(SW => <li>{SW}</li>)}
      </ul> */}
    </>
  );
}

export default SWindex;
