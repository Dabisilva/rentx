import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Button } from "../../components/Button";

import speedSvg from "../../assets/speed.svg";
import accelerateSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import peapleSvg from "../../assets/people.svg";
import exchangeSvg from "../../assets/exchange.svg";

import { CarsRequest } from "../../@types/interfaces";

import {
  Container,
  Header,
  ImagesContainer,
  Content,
  Details,
  Brand,
  Name,
  Description,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from "./styles";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

interface Props {
  carDetails: CarsRequest;
}

export function CarDetails() {
  const route = useRoute();
  const { carDetails } = route.params as Props;
  const navigation = useNavigation();

  function handleGoToSchedulle() {
    navigation.navigate("Schedulle");
  }

  return (
    <Container>
      <StatusBar style="dark" />
      <Header>
        <BackButton onPress={() => navigation.goBack()} />
      </Header>
      <ImagesContainer>
        <ImageSlider imagesUrl={carDetails.photos} />
      </ImagesContainer>
      <Content>
        <Details>
          <Description>
            <Brand>{carDetails.brand}</Brand>
            <Name>{carDetails.name}</Name>
          </Description>
          <Rent>
            <Period>{carDetails.rent.period}</Period>
            <Price>R$ {carDetails.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {carDetails.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>
        <About>{carDetails.about}</About>
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={() => handleGoToSchedulle()} />
      </Footer>
    </Container>
  );
}
