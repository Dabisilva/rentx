import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/logo.svg";
import { Container, Content, TotalCars } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <Logo width={RFValue(108)} height={RFValue(12)} />
        <TotalCars>Total de 12 carros</TotalCars>
      </Content>
    </Container>
  );
}
