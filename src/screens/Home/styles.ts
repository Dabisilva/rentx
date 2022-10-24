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

export const MyCarsButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  position: absolute;
  bottom: 13px;
  right: 22px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.main};

  height: 60px;
  width: 60px;

  border-radius: 30px;
`;
