import * as S from "./styles";

export function Button({ title = "", ...restProps }) {
  return (
    <S.Container {...restProps}>
      <S.Text17>{title}</S.Text17>
    </S.Container>
  );
}
