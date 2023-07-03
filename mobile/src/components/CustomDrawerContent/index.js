import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useApp } from "../../context/app";
import { Ionicons } from "@expo/vector-icons";

import opacityPng from "../../assets/imgs/drawer.png";
import userPng from "../../assets/imgs/user.png";

import * as S from "./styles";

export function CustomDrawerContent(props) {
  const { loggedUser, setLoggedUser } = useApp();

  console.log({ loggedUser });
  const handleLogout = () => {
    setLoggedUser(null);
  };

  return (
    <>
      <DrawerContentScrollView {...props}>
        <S.Container resizeMode="cover" source={opacityPng}>
          <S.ImageContainer>
            <S.Image source={userPng} />
          </S.ImageContainer>
          <S.Title>{loggedUser?.email}</S.Title>
        </S.Container>
        <DrawerItemList {...props} />
        <S.Out onPress={handleLogout}>
          <Ionicons name="arrow-undo-circle-outline" size={24} color="red" />
        </S.Out>
      </DrawerContentScrollView>
    </>
  );
}
