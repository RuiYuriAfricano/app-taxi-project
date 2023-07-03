import * as S from "./styles";

export function InputMask({ isLoading = false, title = "", ...restProps }) {
  return (
    <S.Container>
      {title ? <S.Text17>{title}</S.Text17> : null}
      <S.InputMask editable={!isLoading} {...restProps} />
    </S.Container>
  );
}
