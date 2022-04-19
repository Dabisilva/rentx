import React from "react";
import { StatusBar } from "expo-status-bar";

import { Header } from "../../components/Header";

import { Container, Content, Title } from "./styles";
import { Car } from "../../components/Car";

export function Home() {
  const data = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
      type: "gasoline",
    },
    thumb: "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png",
  };
  return (
    <Container>
      <StatusBar animated style="light" />
      <Header />
      <Car data={data} />
    </Container>
  );
}
