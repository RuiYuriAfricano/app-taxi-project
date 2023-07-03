import { styled } from "styled-components/native";

export const Container = styled.ImageBackground`
  background-color: #f0c414;
  height: 275px;
  width: 100%;
  margin-bottom: 20px;
  margin-top: -50px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 10px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 88px;
`;

export const ImageContainer = styled.View`
  width: 88px;
  height: 88px;
  border-radius: 88px;
  border-width: 4px;
  border-color: #fff;
  overflow: hidden;
  margin-bottom: 10px;
  background-color: #f0c414;
`;

export const Title = styled.Text`
  color: black;
  background-color: #ffff;
  padding: 5px 20px;
  border-radius: 20px;
  font-size: 15px;
  margin-bottom: 5px;
  width: 100%;
  text-align: center;
`;

export const Out = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #fdf8e2;
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
