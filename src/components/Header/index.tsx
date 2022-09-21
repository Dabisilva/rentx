import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/logo.svg";
import { Container, Content, TotalCars } from "./styles";

interface Props {
  totalCars: number;
}

export function Header({ totalCars }: Props) {
  function getTotalCars() {
    switch (totalCars) {
      case 1:
        return `${totalCars} carro`;
      case undefined:
        return `0 carros`;

      default:
        return `${totalCars} carros`;
    }
  }

  return (
    <Container>
      <Content>
        <Logo width={RFValue(108)} height={RFValue(12)} />
        <TotalCars>Total de {getTotalCars()}</TotalCars>
      </Content>
    </Container>
  );
}
