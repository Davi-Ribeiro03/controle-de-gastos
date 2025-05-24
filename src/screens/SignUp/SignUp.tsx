import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Background from "../../components/Background/Background";
import { styles } from "./styles";
import CommonInput from "../../components/CommonInput/CommonInput";
import { useNavigation } from "@react-navigation/native";
import { useUserStore } from "../../store/user";

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const navigation = useNavigation();
  const signUp = useUserStore((state) => state.signUp);

  const handleSignUp = () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      repeatPassword === ""
    ) {
      alert("Você deve preencher todos os campos");
      return;
    }
    if (password !== repeatPassword) {
      alert("As senhas estão diferentes");
      return;
    }
    if (password.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres");
    }

    signUp(name, email, password).then((res) => {
      if (res) navigation.navigate("SignIn");
    });
  };

  return (
    <View style={styles.container}>
      <Background />

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.return}
      >
        <Text style={styles.returnText}> {"<"} Voltar</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Cadastro</Text>
        <CommonInput
          placeholder="Digite seu nome"
          placeholderTextColor="black"
          onChangeText={(text: string) => setName(text)}
        />
        <CommonInput
          placeholder="Digite seu email"
          placeholderTextColor="black"
          onChangeText={(text: string) => setEmail(text)}
        />
        <CommonInput
          placeholder="Digite sua senha"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(text: string) => setPassword(text)}
        />
        <CommonInput
          placeholder="Digite sua senha novamente"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(text: string) => setRepeatPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
