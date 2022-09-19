import React from "react";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import { BackButton } from "../../components/BackButton";

import ArrowSvg from "../../assets/arrow.svg";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";

export function Schedulle() {
  const theme = useTheme();
  return (
    <Container>
      <StatusBar style="light" />
      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>
          Escolha uma{"\n"}
          data de início e{"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>

          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected>1/09/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
