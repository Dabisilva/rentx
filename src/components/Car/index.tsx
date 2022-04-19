import React from "react";

import GasolineSvg from "../../assets/gasoline.svg";
import { theme } from "../../styles/theme";
import {
  Container,
  InfoContainer,
  CarImage,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
} from "./styles";

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
    type: string;
  };
  thumb: string;
}

interface Props {
  data: CarData;
}

export function Car({ data }: Props) {
  return (
    <Container>
      <InfoContainer>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          <Type>
            {data.rent.type === "gasoline" ? (
              <GasolineSvg color={theme.colors.text_detail} />
            ) : (
              ""
            )}
          </Type>
        </About>
      </InfoContainer>
      <CarImage
        resizeMode="contain"
        source={{
          uri: data.thumb,
        }}
      />
    </Container>
  );
}
