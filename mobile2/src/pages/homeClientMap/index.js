import imageBackground from "./../../assets/imgs/login.png";

import * as S from "./styles";

import { Text17 } from "../../components/Text/text17";
import { InputText } from "../../components/InputText";
import { ButtonNormal } from "../../components/ButtonNormal";

export function HomeClientMap() {
  return (
    <S.ScrollView>
      <S.Container>
        <S.Image source={imageBackground} />
        <S.ButtonView>
          <Text17
            style={{
              color: "rgba(0,0,0,0.2)",
              marginBottom: 10,
            }}
            text="1. Origem"
          />
          <S.Gapheight height={10} />
          <S.MultView>
            <InputText keyboardType="numeric" title="Ponto X" />
            <S.GapWidth />
            <InputText keyboardType="numeric" title="Ponto Y" />
          </S.MultView>
          <S.Gapheight height={20} />
          <Text17
            style={{
              color: "rgba(0,0,0,0.2)",
              marginBottom: 10,
            }}
            text="2. Destino"
          />
          <S.Gapheight height={10} />
          <S.MultView>
            <InputText keyboardType="numeric" title="Ponto X" />
            <S.GapWidth />
            <InputText keyboardType="numeric" title="Ponto Y" />
          </S.MultView>
          <S.Gapheight height={20} />
          <Text17
            style={{
              color: "rgba(0,0,0,0.2)",
              marginBottom: 10,
            }}
            text="4. Estimativa"
          />
          <S.Gapheight height={10} />
          <S.MultView>
            <InputText
              value="0"
              editable={false}
              keyboardType="numeric"
              title="Tempo (s)"
            />
            <S.GapWidth />
            <InputText
              editable={false}
              value="100.0"
              keyboardType="numeric"
              title="Custo (AOA)"
            />
          </S.MultView>
          <S.Gapheight height={50} />
          <ButtonNormal title="Solicitar" />
        </S.ButtonView>
      </S.Container>
    </S.ScrollView>
  );
}
