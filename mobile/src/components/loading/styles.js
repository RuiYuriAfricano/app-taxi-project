import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
`;

export const BackgroundImage = styled.ImageBackground`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator`
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
`;
