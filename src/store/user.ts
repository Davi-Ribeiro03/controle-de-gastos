import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { create } from "zustand";
import { auth } from "../Services/firebaseConnection";
import { saveUser } from "../Services/saveUser";
import { getUser } from "../Services/getUser";
import { deleteUserSession } from "../Services/deleteUserSession";
import { Alert } from "react-native";
import api from "../api";

interface IUserAuth {
  name: string;
  email: string;
}

interface IResponse {
  success: boolean;
  message: string;
  data: any;
}

interface IUserState {
  userAuth?: IUserAuth;
  signIn: (email: string, password: string) => void;
  signUp: (name: string, email: string, password: string) => void;
  findUser: () => void;
  logout: () => void;
}

export const useUserStore = create<IUserState>()((set) => ({
  userAuth: undefined,
  signIn: async (email, password) => {
    try {
      const response: IResponse = await api.post("/auth/login", {
        email,
        password,
      });
      Alert.alert("Sucesso", response?.message);
      await saveUser(response?.data);
      set({ userAuth: response?.data });
    } catch (error) {
      Alert.alert("Erro", "Falha ao fazer login. Verifique suas credenciais.");
    }
  },
  signUp: async (name, email, password) => {
    try {
      const response: IResponse = await api.post("/auth/register", {
        name,
        email,
        password,
      });
      Alert.alert("Sucesso", response?.message);
      await saveUser(response?.data);
      set({ userAuth: response?.data });
    } catch (error: any) {
      console.log(error.message);
      Alert.alert("Erro", "Falha ao fazer login. Verifique suas credenciais.");
    }
  },
  findUser: async () => {
    const user = await getUser();
    set({ userAuth: user });
  },
  logout: async () => {
    Alert.alert("Sair", "Deseja realmente sair?", [
      {
        text: "Cancelar",
      },
      {
        text: "Sair",
        onPress: async () => {
          await deleteUserSession();
          set({ userAuth: undefined });
        },
      },
    ]);
  },
}));
