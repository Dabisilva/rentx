import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";

import { Routes } from "./src/routes/index.routes";
import { theme } from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  });

  async function prepare() {
    if (!fontsLoaded) {
      await SplashScreen.preventAutoHideAsync();
    } else {
      await SplashScreen.hideAsync();
    }
  }
  useEffect(() => {
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
