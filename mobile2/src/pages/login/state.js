import { useState } from "react";
import { Alert } from "react-native";
import { useApp } from "../../context/app";
import { services } from "../../../services";
import { formatDate, validateEmail } from "./util";

export const useLoginState = () => {
  const { setLoggedUser } = useApp();

  const [isLoadingCreateUser, setIsLoadingCreateUser] = useState(false);
  const [isLoadingLoginUser, setIsLoadingLoginUser] = useState(false);

  const [formLogin, setFormLogin] = useState({
    email: "jose123@gmail.com",
    password: "1234",
  });

  const [formRegister, setFormRegister] = useState({
    email: "",
    password: "",
    address: "",
    birthDate: "",
  });

  const setLogin = (key, value) => {
    setFormLogin((prevState) => ({ ...prevState, [key]: value }));
  };

  const setRegister = (key, value) => {
    setFormRegister((prevState) => ({ ...prevState, [key]: value }));
  };

  const isValidRegisterForm = () => {
    let isValid = true;

    if (!formRegister?.email || !validateEmail(formRegister?.email)) {
      Alert.alert("Erro!", "Email inválido!");
      isValid = false;
    }

    if (!formRegister?.address) {
      Alert.alert("Erro!", "Endereço não foi digitado!");
      isValid = false;
    }

    if (!formRegister?.password) {
      Alert.alert("Erro!", "Senha inválida!");
      isValid = false;
    }

    if (!formRegister?.birthDate) {
      Alert.alert("Erro!", "Data de nascimento inválida!");
      isValid = false;
    }

    return isValid;
  };

  const isValidLoginForm = () => {
    let isValid = true;

    if (!formLogin?.email || !validateEmail(formLogin?.email)) {
      Alert.alert("Erro!", "Email inválido!");
      isValid = false;
    }

    if (!formLogin?.password) {
      Alert.alert("Erro!", "Senha inválida!");
      isValid = false;
    }

    return isValid;
  };

  const handleCreateUser = async () => {
    if (!isValidRegisterForm()) return;

    setIsLoadingCreateUser(true);

    const responseRegister = await services.author.add({
      email: formRegister?.email,
      morada: formRegister?.address,
      password: formRegister?.password,
      datanasc: formatDate(formRegister?.birthDate),
    });

    setIsLoadingCreateUser(false);

    if (responseRegister?.status !== 201) {
      return Alert.alert("Erro!", "Falha ao registrar o usuário!");
    }

    setIsLoadingCreateUser(true);
    const responseClient = await services.customer.add({
      clienteEmail: formRegister?.email,
      x: "0",
      y: "0",
    });
    setIsLoadingCreateUser(false);

    console.log({ responseClient });
    if (responseClient?.status !== 201) {
      return Alert.alert(
        "Erro!",
        "Falha ao registrar o usuário, dados do cliente!"
      );
    }

    setFormRegister({
      email: "",
      address: "",
      password: "",
      birthDate: "",
    });

    Alert.alert("Sucesso", "Utilizador criado com sucesso!");

    console.log({ responseRegister });
    console.log({ responseClient });
  };

  const handleLogin = async () => {
    if (!isValidLoginForm()) return;

    setIsLoadingLoginUser(true);
    const response = await services.author.login({
      email: formLogin?.email,
      password: formLogin?.password,
    });

    console.log({ responseLogin: response });
    setIsLoadingLoginUser(false);

    if (response?.status == 201) {
      setLoggedUser(response?.data);
    } else {
      Alert.alert("Error!", "");
    }
  };

  return {
    setLogin,
    handleLogin,
    setRegister,
    handleCreateUser,
    setIsLoadingLoginUser,
    setIsLoadingCreateUser,
    formLogin,
    formRegister,
    isLoadingLoginUser,
    isLoadingCreateUser,
  };
};
