import { styled } from "styled-components/native";

export const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  margin-bottom: 25px;
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

export const DriverContainer = styled.ScrollView`
  margin-bottom: 20px;
  display: flex;
  width: 100%;
`;

export const DriverContainerScroll = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: nowrap;
`;

export const Gap = styled.View`
  width: 20px;
`;

export const Label = styled.Text`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 20px;

  ${({ active = false }) =>
    active
      ? `
        background-color: #f0c414;
        color: #fff;
      `
      : ``}
`;
