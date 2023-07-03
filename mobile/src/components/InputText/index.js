import * as S from "./styles";

export function InputText({ isLoading = false, title = "", ...restProps }) {
  return (
    <S.Container>
      {title ? <S.Text17>{title}</S.Text17> : null}
      <S.Input editable={!isLoading} {...restProps} />
    </S.Container>
  );
}
