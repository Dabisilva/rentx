import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Button } from "../../components/Button";

import { CarsRequest } from "../../@types/interfaces";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { format } from "date-fns";
import { api } from "../../services/api";

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

interface Props {
  carDetails: CarsRequest;
  dates: string[];
}

interface RentalPeriodProps {
  startFormated: string;
  endFormated: string;
}

export function SchedullingDetails() {
  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();

  const { carDetails, dates } = route.params as Props;

  const rentalTotal = Number(dates.length * carDetails.rent.price);

  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>(
    {} as RentalPeriodProps
  );

  async function handleGoToSchedulleComplete() {
    const response = await api.get(`/schedules_bycars/${carDetails.id}`);

    const unavailable_dates = [...response.data.unavailable_dates, ...dates];

    await api.post("schedules_byuser", {
      user_id: 1,
      car: carDetails,
    });

    await api
      .put(`/schedules_bycars/${carDetails.id}`, {
        id: carDetails.id,
        unavailable_dates,
      })
      .then(() => {
        navigation.navigate("SchedullingComplete");
      })
      .catch(() => {
        Alert.alert("Nao foi possivel fazer o agendamento");
      });
  }

  useEffect(() => {
    setRentalPeriod({
      startFormated: format(new Date(dates[0]), "dd/MM/yyyy"),
      endFormated: format(new Date(dates[dates.length - 1]), "dd/MM/yyyy"),
    });
  }, []);
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
            <DateValue>{rentalPeriod.startFormated}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.endFormated}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${carDetails.rent.price} x${dates.length} diarias`}</RentalPriceQuota>
            <RentalpriceTotal>R$ {rentalTotal}</RentalpriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar Carro"
          color={theme.colors.success}
          onPress={() => handleGoToSchedulleComplete()}
        />
      </Footer>
    </Container>
  );
}
