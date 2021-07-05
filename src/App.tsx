import React from 'react';
import styled from 'styled-components';



function App() {
const onClick = (name: string) => {
  console.log(`${name} say hello`);
};

const onSubmit = (form: {name: string; description: string}) => {
  console.log(form);
};

  return (
    <Container>
      
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;  
`;