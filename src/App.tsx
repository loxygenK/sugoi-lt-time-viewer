import React, { FC } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  color: lightblue;
`;

const App: FC = () => (
  <div>
    <Title>Hello, world!</Title>
  </div>
);

export default App;
