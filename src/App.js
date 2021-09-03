import React from 'react';
import { useHistory } from "react-router-dom";
import Header from './components/Header';
import News from './components/News';

function App() {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }
  return (
    
    <div>
      <Header />
      <News />
      <button type="button" onClick={handleClick}>
        Go home
    </button>
    </div>
  );
}

export default App;
