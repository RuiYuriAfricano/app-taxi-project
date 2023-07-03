import { styled } from "styled-components/native";
import { MaskedTextInput } from "react-native-mask-text";

export const InputMask = styled(MaskedTextInput)`
  border-width: 1px;
  padding: 0px 20px;
  border-radius: 8px;
  width: 100%;
  height: 48px;
  border-color: #efeff4;
`;

export const Container = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Text17 = styled.Text`
  color: #262628;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: #262628;
  margin-bottom: 10px;
`;
