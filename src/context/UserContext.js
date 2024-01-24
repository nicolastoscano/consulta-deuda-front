import { createContext, useState } from "react";
import demoUser from "../solo-demo/usuarios.json";

export const UserContext = createContext();

function UserProvider(props) {
  const [isUser, setIsUser] = useState(false);

  const user = demoUser;

  return (
    <UserContext.Provider
      value={{
        user,
        isUser,
        setIsUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
