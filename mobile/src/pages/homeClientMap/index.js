import MapView from "react-native-maps";

import * as S from "./styles";
import { ButtonNormal } from "../../components/ButtonNormal";

export function HomeClientMap() {
  return (
    <S.Container>
      <MapView style={{ flex: 1 }} />
      <S.ButtonView>
        <ButtonNormal title="Solicitar" />
      </S.ButtonView>
    </S.Container>
  );
}
