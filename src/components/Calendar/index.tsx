import React from "react";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from "react-native-calendars";

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "sexta",
    "Sábado",
  ],
  dayNamesShort: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
  today: "Hoje",
};

LocaleConfig.defaultLocale = "pt-br";

export function Calendar() {
  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          size={RFValue(24)}
          color={theme.colors.text}
          name={direction === "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: RFValue(0.5),
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: RFValue(10),
        marginBottom: RFValue(10),
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: RFValue(10),
        textMonthFontSize: RFValue(20),
        monthTextColor: theme.colors.title,
        textMonthFontFamily: theme.fonts.secondery_600,
        arrowStyle: {
          marginHorizontal: RFValue(-15),
        },
      }}
      firstDay={1}
      minDate={String(new Date())}
    />
  );
}
