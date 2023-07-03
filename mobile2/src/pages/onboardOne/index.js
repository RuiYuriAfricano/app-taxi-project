import * as S from "./styles";

import On1Png from "./../../assets/imgs/on1.png";

import { Text30 } from "../../components/Text/text30";
import { Text17 } from "../../components/Text/text17";
import { NextButton } from "../../components/nextButton";
import { TouchableOpacity } from "react-native";

export const OnBoardingOne = ({ navigation }) => {
  return (
    <S.Container>
      <S.ImageWrappper>
        <S.Image resizeMode="stretch" source={On1Png} />
      </S.ImageWrappper>
      <S.TitleWrappper>
        <Text30 text="Solicitar corrida" />
      </S.TitleWrappper>
      <S.SubtitleWrappper>
        <Text17 text="Solicite uma corrida e seja buscado por um motorista da comunidade nas proximidades" />
      </S.SubtitleWrappper>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("OnboardTwo");
        }}
      >
        <NextButton />
      </TouchableOpacity>
    </S.Container>
  );
};
