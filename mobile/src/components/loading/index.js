import backgroundImagePng from "./../../assets/imgs/splash.png";

import * as S from "./styles";

export function LoadingScreen() {
  return (
    <S.BackgroundImage source={backgroundImagePng}>
      <S.Loading color="#ffff" size="large" />
    </S.BackgroundImage>
  );
}
