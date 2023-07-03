import { styled } from "styled-components/native";

export const Container = styled.ScrollView`
  margin-top: 50px;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #d2d5dbe6;
`;

export const Image = styled.Image`
  width: 100%;
  height: 385px;
`;

export const Body = styled.View`
  padding: 0px 16px;
  width: 100%;
  flex: 1;
  margin-top: -55px;
`;

export const LoginBox = styled.View`
  width: 100%;
  background-color: #ffff;
  border-radius: 8px;
  min-height: 200px;
  overflow: hidden;
`;

export const TabBody = styled.View`
  width: 100%;
  padding: 28px 21px;
`;

export const TabBox = styled.View`
  width: 100%;
  height: 55px;
  border-bottom-width: 1px;
  border-bottom-color: #efeff4;
  padding: 10px 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Gap = styled.View`
  width: 50px;
`;

export const GapHeight = styled.View`
  height: 25px;
`;

export const Tab = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-width: 4px;
  border-radius: 2px;
  border-color: #ffff;

  ${({ active }) =>
    active
      ? `
    border-color: #f0c414;
  `
      : ``}
`;

export const Title = styled.Text`
  color: #c8c7cc;
  text-align: center;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;

  ${({ active }) =>
    active
      ? `
      color: #262628;
      `
      : ``}
`;

export const Text13 = styled.Text`
  color: #262628;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  margin-top: 25px;
  margin-bottom: 25px;
`;
