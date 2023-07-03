import imageBackground from "./../../assets/imgs/login.png";

import { useState } from "react";
import { useLoginState } from "./state";
import { InputMask } from "../../components/InputMask";
import { InputText } from "./../../components/InputText";
import { ButtonNormal } from "../../components/ButtonNormal";

import * as S from "./styles";

export function Login() {
  const {
    formLogin,
    formRegister,
    isLoadingLoginUser,
    isLoadingCreateUser,
    setLogin,
    handleLogin,
    setRegister,
    handleCreateUser,
  } = useLoginState();
  const [isLogin, setIsLogin] = useState(false);

  return (
    <S.Container>
      <S.Image source={imageBackground} />
      <S.Body>
        <S.LoginBox>
          <S.TabBox>
            <S.Tab onPress={() => setIsLogin(false)} active={!isLogin}>
              <S.Title active={!isLogin}>Entrar</S.Title>
            </S.Tab>
            <S.Gap />
            <S.Tab onPress={() => setIsLogin(true)} active={isLogin}>
              <S.Title active={isLogin}>Criar</S.Title>
            </S.Tab>
          </S.TabBox>
          {!isLogin ? (
            <S.TabBody>
              <InputText
                value={formLogin?.email}
                onChangeText={(value) => setLogin("email", value)}
                title="E-mail"
                placeholder="E-mail"
              />
              <S.GapHeight />
              <InputText
                value={formLogin?.password}
                onChangeText={(value) => setLogin("password", value)}
                title="Senha"
                placeholder="Senha"
                secureTextEntry={true}
              />
              <S.GapHeight />
              <ButtonNormal
                title="Entrar"
                onPress={handleLogin}
                isLoading={isLoadingLoginUser}
              />
            </S.TabBody>
          ) : (
            <S.TabBody>
              <InputText
                value={formRegister?.email}
                onChangeText={(value) => setRegister("email", value)}
                title="E-mail"
                placeholder="ex.: julia@gmail.com"
              />
              <S.GapHeight />
              <InputText
                value={formRegister?.password}
                onChangeText={(value) => setRegister("password", value)}
                title="Senha"
                placeholder="ex.: 2787*+"
                secureTextEntry={true}
              />
              <S.GapHeight />
              <InputText
                value={formRegister?.address}
                onChangeText={(value) => setRegister("address", value)}
                title="Morada"
                placeholder="ex.: Rocha"
              />
              <S.GapHeight />
              <InputMask
                value={formRegister?.birthDate}
                onChangeText={(value) => setRegister("birthDate", value)}
                mask="99/99/9999"
                placeholder="ex.: 12/01/2023"
                keyboardType="numeric"
                title="Data"
              />
              <S.GapHeight />
              <ButtonNormal
                title="Salvar"
                onPress={handleCreateUser}
                isLoading={isLoadingCreateUser}
              />
            </S.TabBody>
          )}
        </S.LoginBox>
        <S.Text13>UTEC@2023</S.Text13>
      </S.Body>
    </S.Container>
  );
}
