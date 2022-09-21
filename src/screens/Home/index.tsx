import React, { useState, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";

import { Car } from "../../components/Car";
import { CarsRequest } from "../../@types/interfaces";
import { api } from "../../services/api";

import { Container, CarList } from "./styles";
import { Load } from "../../components/Load";

export function Home() {
  const navigation = useNavigation();
  const [carsData, setCarsData] = useState<CarsRequest[]>([]);
  const [loading, setLoading] = useState(true);

  function handleGoToCarDetaisl(carDetails: CarsRequest) {
    navigation.navigate("CarDetails", { carDetails });
  }

  async function handleFetchCars() {
    await api
      .get("/cars")
      .then((response) => {
        setCarsData(response.data);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }

  useFocusEffect(
    useCallback(() => {
      handleFetchCars();
    }, [])
  );

  return (
    <Container>
      <StatusBar animated style="light" />
      <Header totalCars={carsData.length} />
      {loading ? (
        <Load />
      ) : (
        <CarList
          data={carsData}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleGoToCarDetaisl(item)} />
          )}
        />
      )}
    </Container>
  );
}
