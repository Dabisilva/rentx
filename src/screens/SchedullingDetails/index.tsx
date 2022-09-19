import React from "react";

import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";

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
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalpriceTotal,
} from "./styles";

export function SchedullingDetails() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <ImagesContainer>
        <ImageSlider
          imagesUrl={["https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png"]}
        />
      </ImagesContainer>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Accessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerateSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peapleSvg} />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>19/09/2022</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>19/09/2022</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diarias</RentalPriceQuota>
            <RentalpriceTotal>R$ 2.900</RentalpriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
