import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Characters from './SW/Characters'
import Character from './SW/Character'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact children={<Characters />} />
          <Route path="/:id" children={<Character/>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
