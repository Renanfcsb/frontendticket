import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api/api";
import { TechsListContext } from "./TechsContext";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const { setTechs } = useContext(TechsListContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("@KENZIETOKEN");
    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          setTechs(response.tech);
          navigate("/profile");
        } catch (error) {
          console.log(error);
        }
      };
      userAutoLogin();
    }
  }, []);

  //////
  const userLogin = async (formData) => {
    try {
      const response = await api.post("api/users/login/", formData);
      console.log(response);
      setUser(response.data.user);
      localStorage.setItem("@KENZIETOKEN", response.data.token);
      navigate("/profile");
    } catch (error) {
      toast.error("Senha ou Usuario invalidos", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@KENZIETOKEN");
    navigate("/");
  };
  return (
    <UserContext.Provider value={{ userLogin, userLogout, user }}>
      {children}
    </UserContext.Provider>
  );
};
