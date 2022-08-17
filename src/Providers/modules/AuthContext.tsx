import {
  createContext,
  useContext,
  ReactNode,
  useCallback,
  useState,
} from "react";

import api from "../../Server/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface DataRegister {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface DataLogin {
  email: string;
  password: string;
}

interface User {
  name: string;
  email: string;
  id: string;
}

interface DataUser {
  user: User;
  accessToken: string;
}

interface AuthContextDatas {
  registerUser(data: DataRegister): Promise<void>;
  singIn(data: DataLogin): Promise<void>;
  user: User;
  accessToken: string;
}

const AuthContext = createContext<AuthContextDatas>({} as AuthContextDatas);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [dataUser, setDataUser] = useState<DataUser>(() => {
    const user = localStorage.getItem("@Hamburgueria:User");
    const token = localStorage.getItem("@Hamburgueria:Token");

    if (user && token) {
      return { accessToken: token, user: JSON.parse(user) };
    }

    return {} as DataUser;
  });

  const singIn = useCallback(async ({ email, password }: DataLogin) => {
    try {
      const response = await api.post("/login", { email, password });

      localStorage.setItem(
        "@Hamburgueria:User",
        JSON.stringify(response.data.user)
      );
      localStorage.setItem("@Hamburgueria:Token", response.data.accessToken);

      setDataUser(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const registerUser = useCallback(
    async ({ name, email, password }: DataRegister) => {
      try {
        const response = await api.post("/register", { name, email, password });

        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    []
  );
  return (
    <AuthContext.Provider
      value={{
        registerUser,
        singIn,
        user: dataUser.user,
        accessToken: dataUser.accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
