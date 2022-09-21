import React from "react";
import { TouchableOpacityProps } from "react-native";
import { CarsRequest } from "../../@types/interfaces";

import GasolineSvg from "../../assets/gasoline.svg";
import { theme } from "../../styles/theme";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
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

interface Props extends TouchableOpacityProps {
  data: CarsRequest;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest}>
      <InfoContainer>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          <Type>
            <MotorIcon color={theme.colors.text_detail} />
          </Type>
        </About>
      </InfoContainer>
      <CarImage
        resizeMode="contain"
        source={{
          uri: data.thumbnail,
        }}
      />
    </Container>
  );
}
