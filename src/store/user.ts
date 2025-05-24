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

interface IUserAuth {
  name: string;
  email: string;
}

interface IUserState {
  userAuth?: IUserAuth;
  signIn: (email: string, password: string) => void;
  signUp: (
    name: string,
    email: string,
    password: string
  ) => Promise<string | null | undefined>;
  findUser: () => void;
  logout: () => void;
}

export const useUserStore = create<IUserState>()((set) => ({
  userAuth: undefined,
  signIn: (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        const user = {
          name: res.user.displayName ?? "",
          email: res.user.email ?? "",
        };

        await saveUser(user);
        set({ userAuth: user });
      })
      .catch((error) => {
        // console.log(error);

        alert("Email ou senha incorretos");
      });
  },
  signUp: async (name, email, password) => {
    try {
      const userCreated = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Criado com sucesso");
      await updateProfile(userCreated?.user, {
        displayName: name,
      });

      return userCreated?.user?.email;
    } catch (error: any) {
      console.log(error.message);
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        alert("Email já cadastrado");
      }
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        alert("O email digitado não é válido");
      }
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
