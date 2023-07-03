import * as S from "./styles";

import On1Png from "./../../assets/imgs/on3.png";

import { Text30 } from "../../components/Text/text30";
import { Text17 } from "../../components/Text/text17";
import { Button } from "../../components/Button";
import { useOnBoardThree } from "./state";

export const OnBoardThree = () => {
  const { handleGoHome } = useOnBoardThree();

  return (
    <S.Container>
      <S.ImageWrappper>
        <S.Image resizeMode="stretch" source={On1Png} />
      </S.ImageWrappper>
      <S.TitleWrappper>
        <Text30 text="Acompanhe sua viagem" />
      </S.TitleWrappper>
      <S.SubtitleWrappper>
        <Text17 text="Conheça seu motorista com antecedência e visualize a localização atual em tempo real no mapa" />
      </S.SubtitleWrappper>
      <Button title="Vamos iniciar!" onPress={handleGoHome} />
    </S.Container>
  );
};
