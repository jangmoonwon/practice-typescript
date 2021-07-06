import React from 'react';
import styled from 'styled-components';
import CounterContainer from './containers/CounterContainer';



function App() {

  return (
    <Container>
      <CounterContainer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;  
`;