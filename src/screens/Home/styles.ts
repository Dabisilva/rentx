import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;
export const Content = styled.View``;

export const Title = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.header};
`;
