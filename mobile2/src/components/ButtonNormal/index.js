import { ActivityIndicator } from "react-native";

import * as S from "./styles";

export function ButtonNormal({ isLoading = false, title = "", ...restProps }) {
  return (
    <S.Container disabled={isLoading} {...restProps}>
      {isLoading ? (
        <ActivityIndicator color="#ffff" size="small" />
      ) : (
        <S.Text17>{title}</S.Text17>
      )}
    </S.Container>
  );
}
