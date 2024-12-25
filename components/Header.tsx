import React from "react";
import styled from "styled-components/native";
import { IconSymbol } from "./ui/IconSymbol";

export function Header() {
  return (
    <Container>
      <IconSymbol name="logo.xbox" color="" size={32} />
    </Container>
  );
}

const Container = styled.View`
  height: 50px;
  background-color: ${({ theme }) => theme.background};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0 10px;
`;