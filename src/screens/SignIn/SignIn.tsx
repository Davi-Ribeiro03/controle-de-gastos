import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import React, { useEffect, useState } from "react";
import Background from "../../components/Background/Background";
import CommonInput from "../../components/CommonInput/CommonInput";
import { useNavigation } from "@react-navigation/native";
import { useUserStore } from "../../store/user";
import { getUser } from "../../Services/getUser";
import { colors } from "../../Constants";

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signIn, findUser } = useUserStore((state) => state);
  const [signinLoading, setSigninLoading] = useState(false);
  const [searchingUser, setSearchingUser] = useState(false);

  useEffect(() => {
    setSearchingUser(true);
    findUser();
    setSearchingUser(false);
  }, []);

  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handleSignIn = () => {
    if (email === "" || password === "") {
      alert("Você deve preencher email e senha");
      return;
    }
    setSigninLoading(true);
    signIn(email, password);
    setSigninLoading(false);
  };

  if (searchingUser) {
    <ActivityIndicator size="large" />;
  }
  return (
    <View style={styles.container}>
      <Background />

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Login</Text>
        <CommonInput
          placeholder="Digite seu email"
          placeholderTextColor="black"
          onChangeText={(text: string) => setEmail(text)}
        />
        <CommonInput
          placeholder="Digite sua senha"
          placeholderTextColor="black"
          onChangeText={(text: string) => setPassword(text)}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          {signinLoading ? (
            <ActivityIndicator size="small" color={colors.primary} />
          ) : (
            <Text style={styles.buttonText}>Entrar</Text>
          )}
        </TouchableOpacity>

        <Text style={{ color: "white" }}>Não tem uma conta?</Text>

        <TouchableOpacity onPress={goToSignUp} disabled={signinLoading}>
          <Text
            style={{
              color: colors.secondary,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
