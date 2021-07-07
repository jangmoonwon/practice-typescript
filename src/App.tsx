import React from 'react';
import styled from 'styled-components';
import CounterContainer from './containers/CounterContainer';
import TodoApp from './containers/TodoApp';



function App() {

  return (
    <Container>
      <CounterContainer />
      <TodoApp />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;