import React from 'react';
import './App.css';
// import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
