import { styled } from "styled-components/native";

export const ScrollView = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const ButtonView = styled.View`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  width: 95%;
  margin-top: -50px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
`;

export const Gapheight = styled.View`
  height: ${({ height }) => (height ? height + `px` : "20px")};
`;

export const GapWidth = styled.View`
  width: 20px;
`;

export const MultView = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
