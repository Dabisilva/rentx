import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

interface ButtonProps extends RectButtonProps {
  color: string;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ButtonProps>`
  width: 100%;
  padding: 19px;

  align-items: center;
  justify-content: center;

  background-color: ${({ color, theme }) =>
    color ? color : theme.colors.main};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
`;
