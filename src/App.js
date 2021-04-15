import React, { useState } from 'react';
import axios from 'axios';

const SWindex = () => {
  // const [SW, setSW] = useState([])
  // getData(() => {
  //   axios.get(`https://swapi.dev/api/people`)
  //     .then(response => setSW(response.data))
  //     .catch(error => console.log(error))
  // }, [])


  const getData = async () => {
        try {    
          const result = await axios.get('/api/people/')
          console.log(result);
        } catch (error) {    
          console.log("error!!");
        }
    };

  return (
    <>
      <div className="App">
      <div>
        <button onClick={() =>getData()}>get profile!</button>
      </div>
    </div>
      {/* <ul>
        { SW.map(SW => <li>{SW.results}</li>)}
      </ul> */}
    </>
  );
}

export default SWindex;
