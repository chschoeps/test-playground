import React from 'react';
// import './App.css';
import { MyForm } from './components/my-form';
import styled from 'styled-components';

const HeadLine = styled.div`
  margin-top: 4em;
  margin-left: 4em;
  font-size: x-large;
`

function App() {
  return (
    <div className="App">
      <HeadLine>Just a test-playground</HeadLine>
      <MyForm/>
    </div>
  );
}

export default App;
