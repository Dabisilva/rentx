import styled from "styled-components/native";
import { FlatList } from "react-native";
import { CarsRequest } from "../../@types/interfaces";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;
export const Content = styled.View``;

export const Title = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.header};
`;

export const CarList = styled(
  FlatList as new () => FlatList<CarsRequest>
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;
