import imageBackground from "./../../assets/imgs/login.png";

import * as S from "./styles";

import { Text17 } from "../../components/Text/text17";
import { InputText } from "../../components/InputText";
import { ButtonNormal } from "../../components/ButtonNormal";
import { useState } from "react";

export function HomeClientMap() {
  const [form, setForm] = useState({
    originX: "",
    originY: "",
    originTime: "",
    originCost: "",
    taxiTime: "",
    taxiCost: "",
    DestX: "",
    DestY: "",
    finalTime: "",
    finalCost: "",
  });

  const [selectedDriver, setSelectedDriver] = useState(null);
  const [drivers, setDrivers] = useState([]);

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
            <InputText
              onChangeText={(value) => {
                setForm({ ...form, originX: value });
              }}
              keyboardType="numeric"
              title="Ponto X"
            />
            <S.GapWidth />
            <InputText
              onChangeText={(value) => {
                setForm({ ...form, originY: value });
              }}
              keyboardType="numeric"
              title="Ponto Y"
            />
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
            <InputText
              onChangeText={(value) => {
                setForm({ ...form, DestX: value });
              }}
              keyboardType="numeric"
              title="Ponto X"
            />
            <S.GapWidth />
            <InputText
              onChangeText={(value) => {
                setForm({ ...form, DestY: value });
              }}
              keyboardType="numeric"
              title="Ponto Y"
            />
          </S.MultView>
          <S.Gapheight height={20} />
          <Text17
            style={{
              color: "rgba(0,0,0,0.2)",
              marginBottom: 10,
            }}
            text="3. Escolha motorista"
          />
          <S.Gapheight height={10} />
          <S.DriverContainer horizontal showsHorizontalScrollIndicator={false}>
            <S.DriverContainerScroll>
              <S.Label active={true}>Teste</S.Label>
              <S.Gap />
              <S.Label active={true}>Teste</S.Label>
              <S.Gap />
              <S.Label active={true}>Teste</S.Label>
              <S.Gap />
              <S.Label active={true}>Teste</S.Label>
              <S.Gap />
              <S.Label active={true}>Teste</S.Label>
              <S.Gap />
              <S.Label active={true}>Teste</S.Label>
              <S.Gap />
              <S.Label active={true}>Teste</S.Label>
            </S.DriverContainerScroll>
          </S.DriverContainer>

          <Text17
            style={{
              color: "rgba(0,0,0,0.2)",
              marginBottom: 10,
            }}
            text="4. Estimativa Origem - Destino"
          />
          <S.Gapheight height={10} />
          <S.MultView>
            <InputText
              value={form?.originTime}
              editable={false}
              keyboardType="numeric"
              title="Tempo (s)"
            />
            <S.GapWidth />
            <InputText
              value={form?.originCost}
              editable={false}
              keyboardType="numeric"
              title="Custo (AOA)"
            />
          </S.MultView>

          <S.Gapheight height={20} />
          <Text17
            style={{
              color: "rgba(0,0,0,0.2)",
              marginBottom: 10,
            }}
            text="5. Estimativa Taxi - Origem"
          />
          <S.Gapheight height={10} />
          <S.MultView>
            <InputText
              value={form?.taxiTime}
              editable={false}
              keyboardType="numeric"
              title="Tempo (s)"
            />
          </S.MultView>
          <S.Gapheight height={50} />
          <ButtonNormal title="Solicitar" />
        </S.ButtonView>
      </S.Container>
    </S.ScrollView>
  );
}
