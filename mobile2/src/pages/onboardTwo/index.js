import * as S from "./styles";

import On1Png from "./../../assets/imgs/on2.png";

import { Text30 } from "../../components/Text/text30";
import { Text17 } from "../../components/Text/text17";
import { NextButton } from "../../components/nextButton";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const OnboardTwo = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.ImageWrappper>
        <S.Image resizeMode="stretch" source={On1Png} />
      </S.ImageWrappper>
      <S.TitleWrappper>
        <Text30 text="Confirme seu motorista" />
      </S.TitleWrappper>
      <S.SubtitleWrappper>
        <Text17 text="Uma enorme rede de motoristas ajuda você a encontrar viagens confortáveis, seguras e baratas" />
      </S.SubtitleWrappper>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("OnBoardThree");
        }}
      >
        <NextButton />
      </TouchableOpacity>
    </S.Container>
  );
};
