import * as S from "./styles";

import { MaterialIcons } from "@expo/vector-icons";

export function NextButton() {
  return (
    <S.Container>
      <MaterialIcons name="navigate-next" size={24} color="black" />
    </S.Container>
  );
}
