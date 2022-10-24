import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DateData } from "react-native-calendars";
import { format } from "date-fns";
import { Alert } from "react-native";
import { Button } from "../../components/Button";
import {
  Calendar,
  genereteInterval,
  MarkedDateProps,
} from "../../components/Calendar";
import { BackButton } from "../../components/BackButton";

import ArrowSvg from "../../assets/arrow.svg";
import { CarsRequest } from "../../@types/interfaces";

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

interface RentalPeriod {
  startFormated: string;
  endFormated: string;
}

interface Props {
  carDetails: CarsRequest;
}

export function Schedulle() {
  const navigation = useNavigation();
  const theme = useTheme();

  const route = useRoute();
  const { carDetails } = route.params as Props;

  const [lastSelectedDate, setLastSelectedDate] = useState<DateData>(
    {} as DateData
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  function handleGoToSchedulleDetails() {
    if (!rentalPeriod.startFormated || !rentalPeriod.endFormated) {
      Alert.alert("Selecione o intervalo para alugar");
    } else {
      navigation.navigate("SchedullingDetails", {
        carDetails,
        dates: Object.keys(markedDates),
      });
    }
  }

  function handleChangeDate(date: DateData) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = genereteInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormated: format(new Date(firstDate), "dd/MM/yyyy"),
      endFormated: format(new Date(endDate), "dd/MM/yyyy"),
    });
  }

  return (
    <Container>
      <StatusBar style="light" />
      <Header>
        <BackButton
          onPress={() => navigation.goBack()}
          color={theme.colors.shape}
        />
        <Title>
          Escolha uma{"\n"}
          data de início e{"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormated}>
              {rentalPeriod.startFormated}
            </DateValue>
          </DateInfo>

          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormated}>
              {rentalPeriod.endFormated}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>
      <Footer>
        <Button
          title="Confirmar"
          onPress={() => handleGoToSchedulleDetails()}
        />
      </Footer>
    </Container>
  );
}
